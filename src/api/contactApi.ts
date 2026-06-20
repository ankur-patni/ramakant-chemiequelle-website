/**
 * Contact API Service
 * Handles all contact-related API calls
 */

import { ApiConfig } from './config';
import { ApiResponse, ContactFormData, ContactMessage } from './types';
import { httpClient } from './client';

/**
 * Submit a contact form
 */
export const submitContactForm = async (data: ContactFormData): Promise<ApiResponse<ContactMessage>> => {
  console.info('[ContactAPI] Submitting contact form', { email: data.email });

  try {
    const response = await httpClient.post<ContactMessage>(
      ApiConfig.endpoints.contacts.submit,
      data,
      {
        retries: 3,
        retryDelay: 1000,
      }
    );

    console.info('[ContactAPI] Contact form submitted successfully', { id: response.data?.id });
    return response;
  } catch (error) {
    console.error('[ContactAPI] Error submitting contact form', error);
    throw error;
  }
};

/**
 * Get all contact messages (admin only)
 */
export const getContactMessages = async (page = 1, pageSize = 10, token?: string): Promise<ApiResponse<ContactMessage[]>> => {
  console.info('[ContactAPI] Fetching contact messages', { page, pageSize });

  try {
    const response = await httpClient.get<ContactMessage[]>(
      `${ApiConfig.endpoints.contacts.list}?page=${page}&pageSize=${pageSize}`,
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );

    return response;
  } catch (error) {
    console.error('[ContactAPI] Error fetching contact messages', error);
    throw error;
  }
};

/**
 * Get contact message by ID (admin only)
 */
export const getContactMessageById = async (id: number, token?: string): Promise<ApiResponse<ContactMessage>> => {
  console.info('[ContactAPI] Fetching contact message', { id });

  try {
    const response = await httpClient.get<ContactMessage>(
      ApiConfig.endpoints.contacts.getById(id),
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );

    return response;
  } catch (error) {
    console.error('[ContactAPI] Error fetching contact message', error);
    throw error;
  }
};

/**
 * Get contact messages by status (admin only)
 */
export const getContactMessagesByStatus = async (
  status: string,
  page = 1,
  pageSize = 10,
  token?: string
): Promise<ApiResponse<ContactMessage[]>> => {
  console.info('[ContactAPI] Fetching contact messages by status', { status, page, pageSize });

  try {
    const response = await httpClient.get<ContactMessage[]>(
      `${ApiConfig.endpoints.contacts.byStatus(status)}?page=${page}&pageSize=${pageSize}`,
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );

    return response;
  } catch (error) {
    console.error('[ContactAPI] Error fetching contact messages by status', error);
    throw error;
  }
};

/**
 * Update contact message status (admin only)
 */
export const updateContactMessageStatus = async (
  id: number,
  status: string,
  isRead?: boolean,
  token?: string
): Promise<ApiResponse<ContactMessage>> => {
  console.info('[ContactAPI] Updating contact message status', { id, status, isRead });

  try {
    const response = await httpClient.patch<ContactMessage>(
      ApiConfig.endpoints.contacts.updateStatus(id),
      { status, ...(isRead !== undefined && { isRead }) },
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );

    return response;
  } catch (error) {
    console.error('[ContactAPI] Error updating contact message status', error);
    throw error;
  }
};

/**
 * Delete contact message (admin only)
 */
export const deleteContactMessage = async (id: number, token?: string): Promise<ApiResponse<{ id: number }>> => {
  console.info('[ContactAPI] Deleting contact message', { id });

  try {
    const response = await httpClient.delete<{ id: number }>(
      ApiConfig.endpoints.contacts.delete(id),
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );

    return response;
  } catch (error) {
    console.error('[ContactAPI] Error deleting contact message', error);
    throw error;
  }
};

/**
 * Get unread message count (admin only)
 */
export const getUnreadCount = async (token?: string): Promise<ApiResponse<{ unreadCount: number }>> => {
  console.info('[ContactAPI] Fetching unread message count');

  try {
    const response = await httpClient.get<{ unreadCount: number }>(
      ApiConfig.endpoints.contacts.unreadCount,
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );

    return response;
  } catch (error) {
    console.error('[ContactAPI] Error fetching unread count', error);
    throw error;
  }
};
