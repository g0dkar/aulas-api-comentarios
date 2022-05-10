import express, { json, urlencoded } from 'express';
import logger from 'morgan';
import comentariosRouter from './routes/comentarios.js';
import MongoDB from './persistencia/MongoDB.js';

var app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/comentario", comentariosRouter);

const port = 3000;

new MongoDB().connect().then(() => {
    app.listen(port, () => {
        console.log(`API rodando na porta ${port}`)
    })
});
