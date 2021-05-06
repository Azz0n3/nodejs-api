const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');
const jwt = require('jsonwebtoken');

const ExecutionError = require('./errors/models/ExecutionError');

const authMiddleware =  require('./middlewares/authMiddleware');

routes.post("/login", async (request, response) => {
    const dados = request.body;
    const retorno = {
        mensagem: "Logado"
    };

    if (dados.nome != "Gabriel") {
        throw new ExecutionError(3, "Usuário não se chama Gabriel");
    }

    const users = await connection('user_data').where({
        username: dados.nome
    }).select('id').first();


    const token = jwt.sign(users, process.env.SECRET, { expiresIn: '5m' });

    response.json({ token });

});

routes.get("/users", authMiddleware.verifyToken, async (request, response) => {
    const tokenData =  request.tokenData;
    const dados = request.query;

    const users = await connection('user_data').where({
        id: dados.id
    }).select('username');

    response.json(tokenData);
});




module.exports = routes;