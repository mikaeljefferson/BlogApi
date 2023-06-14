const { emailSchema, idSchema } = require('./shema');
   
   const BAD_REQUEST = 'BAD_REQUEST';
  const validateEmail = (email) => {
    const { error } = emailSchema.validate(email);
  
    if (error) return { type: BAD_REQUEST, message: error.message };
  
    return { type: null, message: '' };
  };
  
  const validateId = (id) => {
    const { error } = idSchema.validate(id);
  
    if (error) return { type: 'BAD_REQUEST', message: error.message };
  
    return { type: null, message: '' }; 
  };
  
  module.exports = {
    validateEmail,
    validateId,
   
  };