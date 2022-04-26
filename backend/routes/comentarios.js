import { Router } from 'express';

const comentariosRouter = Router();

const comentarios = [];

/* GET /comentario */
comentariosRouter.get("/", (req, res) => {
    res.send(
        {
            quantidade: comentarios.length,
            comentarios: comentarios
        }
    )
});

/* POST /comentario */
comentariosRouter.post("/", (req, res) => {
    const novoComentario = req.body

    comentarios.push(novoComentario)

    res.send(novoComentario)
});

export default comentariosRouter;
