// API
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

// Local Storage Keys
export const TOKEN_KEY = 'access_token'
export const USER_KEY = 'user_info'

// Pagination
export const DEFAULT_PAGE_SIZE = 10

// Roles
export const ROLES = {
  ADMIN: 'admin',
  HR: 'hr',
  MANAGER: 'manager',
  EMPLOYEE: 'employee',
}

// Status
export const STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
}
