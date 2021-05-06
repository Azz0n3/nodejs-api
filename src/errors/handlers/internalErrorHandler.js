
function internalErrorHandler(error, request, response) {
    response.status(500).json({
        code: 5,
        message: "Internal error. Try again later"
    });
}

module.exports = internalErrorHandler;