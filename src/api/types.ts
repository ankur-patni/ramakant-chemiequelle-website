/**
 * API Response Wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
  errors?: Record<string, string[]>;
  traceId?: string;
}

/**
 * Contact Form Data
 */
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  subject: string;
  message: string;
}

/**
 * Contact Message Response
 */
export interface ContactMessage extends ContactFormData {
  id: number;
  status: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Pagination Response
 */
export interface PaginatedResponse<T> {
  data: T[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

/**
 * API Error Types
 */
export enum ApiErrorType {
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  UNAUTHORIZED_ERROR = 'UNAUTHORIZED_ERROR',
  FORBIDDEN_ERROR = 'FORBIDDEN_ERROR',
  NOT_FOUND_ERROR = 'NOT_FOUND_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

/**
 * Custom API Error Class
 */
export class ApiError extends Error {
  constructor(
    public type: ApiErrorType,
    public statusCode?: number,
    public details?: Record<string, string[]>
  ) {
    super();
    this.name = 'ApiError';
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  getMessage(): string {
    switch (this.type) {
      case ApiErrorType.NETWORK_ERROR:
        return 'Network error. Please check your connection.';
      case ApiErrorType.TIMEOUT_ERROR:
        return 'Request timeout. Please try again.';
      case ApiErrorType.VALIDATION_ERROR:
        return 'Validation failed. Please check your input.';
      case ApiErrorType.UNAUTHORIZED_ERROR:
        return 'Unauthorized. Please login again.';
      case ApiErrorType.FORBIDDEN_ERROR:
        return 'Forbidden. You do not have permission.';
      case ApiErrorType.NOT_FOUND_ERROR:
        return 'Resource not found.';
      case ApiErrorType.SERVER_ERROR:
        return 'Server error. Please try again later.';
      default:
        return 'An unexpected error occurred.';
    }
  }
}

/**
 * Request Config Options
 */
export interface RequestConfig {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}
