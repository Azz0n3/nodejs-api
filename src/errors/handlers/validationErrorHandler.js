
function validationErrorHandler(error, request, response) {
    response.status(400).json(error);
}

module.exports = validationErrorHandler;