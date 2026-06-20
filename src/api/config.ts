/**
 * API Configuration
 * Environment-based configuration for API communication
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '10000');
const RETRY_ATTEMPTS = parseInt(import.meta.env.VITE_RETRY_ATTEMPTS || '3');
const RETRY_DELAY = parseInt(import.meta.env.VITE_RETRY_DELAY || '1000');

export const ApiConfig = {
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  retryAttempts: RETRY_ATTEMPTS,
  retryDelay: RETRY_DELAY,
  endpoints: {
    contacts: {
      submit: '/api/v1/contacts',
      list: '/api/v1/contacts',
      getById: (id: number) => `/api/v1/contacts/${id}`,
      updateStatus: (id: number) => `/api/v1/contacts/${id}`,
      delete: (id: number) => `/api/v1/contacts/${id}`,
      byStatus: (status: string) => `/api/v1/contacts/status/${status}`,
      unreadCount: '/api/v1/contacts/stats/unread',
    },
  },
} as const;

export default ApiConfig;
