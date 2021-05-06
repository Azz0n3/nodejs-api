
function executionErrorHanlder(error, request, response) {
    response.status(400).json({
        code: error.code,
        message: error.message
    });
}

module.exports = executionErrorHanlder;