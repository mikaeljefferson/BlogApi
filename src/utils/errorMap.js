const errorMap = {
    INVALID_VALUE: 422,
    USER_NOT_FOUND: 404,
    BAD_REQUEST: 400,
    CONFLICT: 409,
    POST_NOT_FOUND: 404,
  };
  
  const mapError = (type) => errorMap[type] || 500;
  module.exports = {
    errorMap,
    mapError,
  };