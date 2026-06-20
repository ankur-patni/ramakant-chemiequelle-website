/**
 * Custom Hook: useContactForm
 * Handles contact form submission with proper error handling and state management
 */

import { useState, useCallback } from 'react';
import { submitContactForm } from '../api/contactApi';
import { ApiError, ContactFormData, ContactMessage } from '../api/types';

export interface UseContactFormState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
  successMessage: string | null;
  fieldErrors: Record<string, string>;
}

export interface UseContactFormActions {
  submit: (data: ContactFormData) => Promise<void>;
  clearError: () => void;
  clearSuccess: () => void;
  resetForm: () => void;
}

export type UseContactFormReturn = UseContactFormState & UseContactFormActions;

/**
 * Validate contact form data
 */
const validateContactForm = (data: ContactFormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  // First Name validation
  if (!data.firstName?.trim()) {
    errors.firstName = 'First name is required';
  } else if (data.firstName.trim().length < 1 || data.firstName.trim().length > 100) {
    errors.firstName = 'First name must be between 1 and 100 characters';
  }

  // Last Name validation
  if (!data.lastName?.trim()) {
    errors.lastName = 'Last name is required';
  } else if (data.lastName.trim().length < 1 || data.lastName.trim().length > 100) {
    errors.lastName = 'Last name must be between 1 and 100 characters';
  }

  // Email validation
  if (!data.email?.trim()) {
    errors.email = 'Email address is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  // Company Name validation
  if (!data.companyName?.trim()) {
    errors.companyName = 'Company name is required';
  } else if (data.companyName.trim().length < 1 || data.companyName.trim().length > 255) {
    errors.companyName = 'Company name must be between 1 and 255 characters';
  }

  // Subject validation
  if (!data.subject?.trim()) {
    errors.subject = 'Subject is required';
  } else if (data.subject.trim().length < 1 || data.subject.trim().length > 255) {
    errors.subject = 'Subject must be between 1 and 255 characters';
  }

  // Message validation
  if (!data.message?.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (data.message.trim().length > 5000) {
    errors.message = 'Message must not exceed 5000 characters';
  }

  return errors;
};

/**
 * Custom hook for contact form submission
 */
export const useContactForm = (): UseContactFormReturn => {
  const [state, setState] = useState<UseContactFormState>({
    isLoading: false,
    error: null,
    success: false,
    successMessage: null,
    fieldErrors: {},
  });

  /**
   * Handle form submission
   */
  const submit = useCallback(async (data: ContactFormData) => {
    // Reset previous states
    setState(prev => ({
      ...prev,
      error: null,
      success: false,
      successMessage: null,
      fieldErrors: {},
    }));

    // Validate form data
    const validationErrors = validateContactForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setState(prev => ({
        ...prev,
        fieldErrors: validationErrors,
        error: 'Please fix the validation errors',
      }));
      console.warn('[useContactForm] Validation failed', validationErrors);
      return;
    }

    // Set loading state
    setState(prev => ({ ...prev, isLoading: true }));

    try {
      // Submit form to API
      const response = await submitContactForm(data);

      if (response.success && response.data) {
        // Success
        setState(prev => ({
          ...prev,
          success: true,
          successMessage: response.message || 'Your message has been sent successfully!',
          isLoading: false,
        }));

        console.info('[useContactForm] Form submitted successfully', { id: response.data.id });
      } else {
        // API returned error
        throw new ApiError('SERVER_ERROR' as any, 200, response.errors);
      }
    } catch (error) {
      // Handle error
      let errorMessage = 'An unexpected error occurred. Please try again.';

      if (error instanceof ApiError) {
        errorMessage = error.getMessage();

        // Map validation errors to field errors
        if (error.details) {
          const fieldErrors: Record<string, string> = {};
          Object.entries(error.details).forEach(([field, messages]) => {
            fieldErrors[field] = messages[0] || 'Invalid value';
          });
          setState(prev => ({
            ...prev,
            fieldErrors,
            error: errorMessage,
            isLoading: false,
          }));
        } else {
          setState(prev => ({
            ...prev,
            error: errorMessage,
            isLoading: false,
          }));
        }

        console.error('[useContactForm] API Error', { type: error.type, status: error.statusCode });
      } else if (error instanceof Error) {
        console.error('[useContactForm] Unexpected error', error);
        setState(prev => ({
          ...prev,
          error: errorMessage,
          isLoading: false,
        }));
      }
    }
  }, []);

  /**
   * Clear error
   */
  const clearError = useCallback(() => {
    setState(prev => ({
      ...prev,
      error: null,
      fieldErrors: {},
    }));
  }, []);

  /**
   * Clear success
   */
  const clearSuccess = useCallback(() => {
    setState(prev => ({
      ...prev,
      success: false,
      successMessage: null,
    }));
  }, []);

  /**
   * Reset form
   */
  const resetForm = useCallback(() => {
    setState({
      isLoading: false,
      error: null,
      success: false,
      successMessage: null,
      fieldErrors: {},
    });
  }, []);

  return {
    ...state,
    submit,
    clearError,
    clearSuccess,
    resetForm,
  };
};
