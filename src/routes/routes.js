const express = require('express');
const routes = express.Router();

const UserRoutes = require('./UserRoutes');

routes.use(UserRoutes);

module.exports = routes;