/**
 * API Utility Functions
 * Best practices for fetch calls with proper CORS and HTTP headers
 */

/**
 * Standard fetch configuration with proper headers
 * @param {string} url - API endpoint URL
 * @param {Object} options - Fetch options
 * @returns {Promise<any>} - Parsed JSON response
 */
export async function fetchWithHeaders(url, options = {}) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  // CRITICAL: Never use mode: "no-cors" - it hides CORS errors and prevents reading responses
  // If you see CORS errors, fix them on the backend, not by disabling CORS validation
  if (config.mode === 'no-cors') {
    console.warn('WARNING: mode: "no-cors" is not recommended. Remove it and fix CORS on backend.');
    delete config.mode;
  }

  try {
    const response = await fetch(url, config);

    // Check if response is ok (status 200-299)
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText || 'No error message'}`
      );
    }

    // Verify response has content before parsing JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error(`Expected JSON response but got: ${contentType}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

/**
 * GET request with proper headers
 * @param {string} url - API endpoint
 * @param {Object} options - Additional fetch options
 */
export async function apiGet(url, options = {}) {
  return fetchWithHeaders(url, {
    method: 'GET',
    ...options,
  });
}

/**
 * POST request with proper headers
 * @param {string} url - API endpoint
 * @param {Object} data - Request body data
 * @param {Object} options - Additional fetch options
 */
export async function apiPost(url, data, options = {}) {
  return fetchWithHeaders(url, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  });
}

/**
 * PUT request with proper headers
 * @param {string} url - API endpoint
 * @param {Object} data - Request body data
 * @param {Object} options - Additional fetch options
 */
export async function apiPut(url, data, options = {}) {
  return fetchWithHeaders(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options,
  });
}

/**
 * DELETE request with proper headers
 * @param {string} url - API endpoint
 * @param {Object} options - Additional fetch options
 */
export async function apiDelete(url, options = {}) {
  return fetchWithHeaders(url, {
    method: 'DELETE',
    ...options,
  });
}

/**
 * PATCH request with proper headers
 * @param {string} url - API endpoint
 * @param {Object} data - Request body data
 * @param {Object} options - Additional fetch options
 */
export async function apiPatch(url, data, options = {}) {
  return fetchWithHeaders(url, {
    method: 'PATCH',
    body: JSON.stringify(data),
    ...options,
  });
}

/**
 * Example usage patterns:
 * 
 * GET request
 * try {
 *   const users = await apiGet('https://api.example.com/users');
 *   console.log(users);
 * } catch (error) {
 *   console.error('Failed to fetch users:', error);
 *   toast({ title: 'Error', description: 'Failed to load users' });
 * }
 * 
 * POST request
 * try {
 *   const newUser = await apiPost('https://api.example.com/users', {
 *     name: 'John Doe',
 *     email: 'john@example.com'
 *   });
 *   toast({ title: 'Success', description: 'User created!' });
 * } catch (error) {
 *   console.error('Failed to create user:', error);
 *   toast({ title: 'Error', description: 'Failed to create user', variant: 'destructive' });
 * }
 * 
 * PUT request
 * try {
 *   const updated = await apiPut('https://api.example.com/users/123', {
 *     name: 'Jane Doe'
 *   });
 *   toast({ title: 'Success', description: 'User updated!' });
 * } catch (error) {
 *   console.error('Failed to update user:', error);
 * }
 * 
 * DELETE request
 * try {
 *   await apiDelete('https://api.example.com/users/123');
 *   toast({ title: 'Success', description: 'User deleted!' });
 * } catch (error) {
 *   console.error('Failed to delete user:', error);
 * }
 */

/**
 * BACKEND CORS CONFIGURATION CHECKLIST:
 * 
 * Your backend must include these headers in responses:
 * 
 * 1. Access-Control-Allow-Origin: * (or specific domain)
 * 2. Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS
 * 3. Access-Control-Allow-Headers: Content-Type, Accept, Authorization
 * 4. Access-Control-Max-Age: 86400 (optional, for preflight cache)
 * 
 * For Express.js example:
 * app.use((req, res, next) => {
 *   res.header('Access-Control-Allow-Origin', '*');
 *   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
 *   res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
 *   if (req.method === 'OPTIONS') {
 *     return res.sendStatus(200);
 *   }
 *   next();
 * });
 * 
 * For other backends (PHP, Python, Ruby, etc.), ensure similar headers are set.
 * 
 * NEVER return HTTP 204 (No Content) - always return 200 with JSON body (even if empty: {})
 */