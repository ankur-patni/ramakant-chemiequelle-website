/**
 * HTTP Client with Error Handling and Retry Logic
 * Implements best practices for API communication
 */

import { ApiConfig } from './config';
import { ApiError, ApiErrorType, ApiResponse, RequestConfig } from './types';

/**
 * Sleep utility for retry delays
 */
const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Check if error is retryable
 */
const isRetryableError = (status?: number): boolean => {
  if (!status) return true; // Network errors are retryable
  return status === 408 || status === 429 || (status >= 500 && status < 600);
};

/**
 * Parse error response
 */
const parseErrorResponse = async (response: Response): Promise<{ message: string; errors?: Record<string, string[]> }> => {
  try {
    const data = await response.json();
    return {
      message: data.message || 'An error occurred',
      errors: data.errors || data.details,
    };
  } catch {
    return {
      message: `HTTP ${response.status}: ${response.statusText}`,
    };
  }
};

/**
 * Map HTTP status to API error type
 */
const mapStatusToErrorType = (status: number): ApiErrorType => {
  switch (status) {
    case 400:
      return ApiErrorType.VALIDATION_ERROR;
    case 401:
      return ApiErrorType.UNAUTHORIZED_ERROR;
    case 403:
      return ApiErrorType.FORBIDDEN_ERROR;
    case 404:
      return ApiErrorType.NOT_FOUND_ERROR;
    case 408:
    case 504:
      return ApiErrorType.TIMEOUT_ERROR;
    case 429:
      return ApiErrorType.SERVER_ERROR; // Rate limited
    default:
      return status >= 500 ? ApiErrorType.SERVER_ERROR : ApiErrorType.UNKNOWN_ERROR;
  }
};

/**
 * Generic HTTP client with error handling and retry logic
 */
export class HttpClient {
  private baseURL: string;
  private timeout: number;
  private retryAttempts: number;
  private retryDelay: number;

  constructor(config = ApiConfig) {
    this.baseURL = config.baseURL;
    this.timeout = config.timeout;
    this.retryAttempts = config.retryAttempts;
    this.retryDelay = config.retryDelay;
  }

  /**
   * Create abort controller for timeout
   */
  private createAbortController(timeout: number): AbortController {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    // Cleanup timeout
    return {
      ...controller,
      abort: () => {
        clearTimeout(timeoutId);
        controller.abort();
      },
    } as AbortController;
  }

  /**
   * Make HTTP request with retry logic
   */
  async request<T>(
    endpoint: string,
    options: RequestInit & RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const { timeout = this.timeout, retries = this.retryAttempts, retryDelay = this.retryDelay, ...fetchOptions } = options;

    const url = `${this.baseURL}${endpoint}`;
    let lastError: Error | null = null;
    let lastErrorType: ApiErrorType = ApiErrorType.UNKNOWN_ERROR;

    // Retry loop
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        // Log attempt
        if (attempt > 0) {
          console.warn(`[API] Retry attempt ${attempt}/${retries} for ${options.method || 'GET'} ${endpoint}`);
          await sleep(retryDelay);
        }

        // Create abort controller for timeout
        const abortController = this.createAbortController(timeout);

        // Make request
        const response = await fetch(url, {
          ...fetchOptions,
          signal: abortController.signal,
          headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
          },
        });

        // Handle timeout
        if (!response.ok) {
          const errorData = await parseErrorResponse(response);
          const errorType = mapStatusToErrorType(response.status);

          // Check if retryable
          if (isRetryableError(response.status) && attempt < retries) {
            lastError = new ApiError(errorType, response.status, errorData.errors);
            lastErrorType = errorType;
            continue;
          }

          // Throw non-retryable error
          throw new ApiError(errorType, response.status, errorData.errors);
        }

        // Parse successful response
        const data: ApiResponse<T> = await response.json();

        // Validate response
        if (data.success === false) {
          throw new ApiError(ApiErrorType.SERVER_ERROR, 200, data.errors);
        }

        // Log success
        console.debug(`[API] ${options.method || 'GET'} ${endpoint} - Success`);

        return data;
      } catch (error) {
        // Handle AbortError (timeout)
        if (error instanceof DOMException && error.name === 'AbortError') {
          lastError = new ApiError(ApiErrorType.TIMEOUT_ERROR, 408);
          lastErrorType = ApiErrorType.TIMEOUT_ERROR;

          if (attempt < retries) {
            console.warn(`[API] Timeout on attempt ${attempt + 1}/${retries + 1}, retrying...`);
            continue;
          }
        }
        // Handle API errors
        else if (error instanceof ApiError) {
          lastError = error;
          lastErrorType = error.type;

          if (isRetryableError(error.statusCode) && attempt < retries) {
            continue;
          }
        }
        // Handle network errors
        else if (error instanceof TypeError) {
          lastError = new ApiError(ApiErrorType.NETWORK_ERROR);
          lastErrorType = ApiErrorType.NETWORK_ERROR;

          if (attempt < retries) {
            console.warn(`[API] Network error on attempt ${attempt + 1}/${retries + 1}, retrying...`);
            continue;
          }
        }
        // Handle unknown errors
        else {
          lastError = new Error('Unknown error occurred');
          lastErrorType = ApiErrorType.UNKNOWN_ERROR;
        }
      }
    }

    // All retries exhausted
    console.error(`[API] All ${retries + 1} attempts failed for ${options.method || 'GET'} ${endpoint}`);

    if (lastError instanceof ApiError) {
      throw lastError;
    }

    throw new ApiError(lastErrorType, undefined);
  }

  /**
   * GET request
   */
  get<T>(endpoint: string, options?: RequestInit & RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET', ...options });
  }

  /**
   * POST request
   */
  post<T>(endpoint: string, data?: unknown, options?: RequestInit & RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
  }

  /**
   * PATCH request
   */
  patch<T>(endpoint: string, data?: unknown, options?: RequestInit & RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
  }

  /**
   * DELETE request
   */
  delete<T>(endpoint: string, options?: RequestInit & RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE', ...options });
  }
}

// Create singleton instance
export const httpClient = new HttpClient(ApiConfig);
