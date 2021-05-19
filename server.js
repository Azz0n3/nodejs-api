require('express-async-errors');
const express = require('express');
const app = express();
const routes =  require('./src/routes/routes');
require('dotenv').config();

const handleErrors = require('./src/errors/handler');


app.listen(3333, () => {
    console.log('Estou vivo');
});
app.use(express.json());
app.use(routes);

app.use(handleErrors);