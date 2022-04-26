import express, { json, urlencoded } from 'express';
import logger from 'morgan';
import comentariosRouter from './routes/comentarios.js';

var app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/comentario", comentariosRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
