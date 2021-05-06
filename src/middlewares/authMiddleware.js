const jwt = require('jsonwebtoken');
const ExecutionError = require('../errors/models/ExecutionError');

module.exports = {
    async verifyToken(request, response, next) {
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) throw new ExecutionError(6, "Token não informado");

        jwt.verify(token, process.env.SECRET, (error, data) => {
            if (error) throw new ExecutionError(7, "Token Inválido");
            request.tokenData = data.id;

            
        });

        next();
    }
}