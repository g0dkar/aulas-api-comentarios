import { Router } from 'express';
import ComentarioEntity from '../persistencia/ComentarioEntity.js';

const comentariosRouter = Router();

const comentarios = [];

/* GET /comentario */
comentariosRouter.get("/", (req, res) => {
    ComentarioEntity.find({}) // SELECT * FROM Comentario
        .limit(1000)          // LIMIT 1000
        .sort("dataHora")     // ORDER BY dataHora ASC
        .lean()
        .exec((err, comentarios) => { // Executa e faz algo com o resultado
            if (err) {
                res.sendStatus(500)
            }
            else {
                res.send({
                    quantidade: comentarios.length,
                    comentarios
                })
            }
        })
});

/* POST /comentario */
comentariosRouter.post("/", (req, res) => {
    const novoComentario = new ComentarioEntity({
        texto: req.body.texto,
        idPai: req.body.idPai,
        dataHora: new Date(),
        pontos: 1
    })

    novoComentario.save(err => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.send(novoComentario)
        }
    })
});

export default comentariosRouter;
