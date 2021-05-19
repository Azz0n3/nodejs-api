const express = require('express');
const routes = express.Router();

const usersController =  require('../../controller/usersController');

routes.post("/createUser", usersController.create);
routes.get("/getUsers", usersController.read);
routes.put("/updateUser", usersController.update);
routes.delete("/deleteUser/:id", usersController.delete);


module.exports = routes;