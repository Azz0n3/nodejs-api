const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');

routes.post("/login", (request, response) => {
    const dados = request.body;
    const retorno = {
        mensagem: "Logad"
    };

    if (dados.nome != "Gabriel") {
        retorno.mensagem = "Nome invalido";
        response.status(400).json(retorno);
    }

    response.json(retorno);
});

routes.get("/users", async (request, response) => {
    const dados = request.query;

    const users = await connection('user_data').where({
        id: dados.id
    }).select('username');

    response.json({ users });
});




module.exports = routes;