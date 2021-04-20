const express = require('express');
const app = express();
const routes =  require('./src/routes');


app.listen(3333, () => {
    console.log('Estou vivo');
});
app.use(express.json());
app.use(routes);