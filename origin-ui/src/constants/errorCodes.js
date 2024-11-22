export const ERROR_CODES = {
    NOT_AUTHORIZED: 100,
    INVALID_INPUT: 101,
    PRODUCT_NOT_FOUND: 102,
    PRODUCT_ALREADY_EXISTS: 103,
    INVALID_STATUS: 104
  };
  
  export const getErrorMessage = (code) => {
    const errorMessages = {
      [ERROR_CODES.NOT_AUTHORIZED]: 'Not authorized to perform this action',
      [ERROR_CODES.INVALID_INPUT]: 'Invalid input provided',
      [ERROR_CODES.PRODUCT_NOT_FOUND]: 'Product not found',
      [ERROR_CODES.PRODUCT_ALREADY_EXISTS]: 'Product already registered',
      [ERROR_CODES.INVALID_STATUS]: 'Invalid product status'
    };
  
    return errorMessages[code] || 'Unknown error occurred';
  };
  