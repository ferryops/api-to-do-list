/**
 * Utility function to standardize server response format
 * @param {string} msg - Message to send in response
 * @param {any} data - Data to send in response (optional)
 * @param {boolean} error - Whether the response indicates an error (default is false)
 * @returns {object} Standard response object
 */
const createResponse = (msg, data = null, error = false) => {
  return {
    msg,
    data,
    error,
  };
};

module.exports = createResponse;
