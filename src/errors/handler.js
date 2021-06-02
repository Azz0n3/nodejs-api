const executionErrorHandler = require('./handlers/executionErrorHandler');
const internalErrorHandler = require('./handlers/internalErrorHandler');
const validationErrorHandler = require('./handlers/validationErrorHandler');


const ExecutionError = require('./models/ExecutionError');
const ValidationError = require('joi').ValidationError;

function handleErrors(error, request, response, next) {
    console.error(error);
    if (error instanceof ExecutionError) return executionErrorHandler(error, request, response);
    if (error instanceof ValidationError) return validationErrorHandler(error, request, response);
    return internalErrorHandler(error, request, response);
}

module.exports = handleErrors;