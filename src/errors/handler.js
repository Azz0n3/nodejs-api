const executionErrorHandler = require('./handlers/executionErrorHandler');
const internalErrorHandler = require('./handlers/internalErrorHandler');

const ExecutionError = require('./models/ExecutionError');

function handleErrors(error, request, response, next) {
    console.error(error);
    if (error instanceof ExecutionError) return executionErrorHandler(error, request, response);
    return internalErrorHandler(error, request, response);
}

module.exports = handleErrors;