import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner'

const ListaComentarios = () => {
    console.log("dentro do componente ListaComentarios!")

    const [comentarios, setComentarios] = useState([])

    const adicionaComentario = () => {
        setComentarios(comentariosApi)
    }

    const comentariosApi = [
        {
            "idPai": 93314,
            "texto": "Est esse quos quis corporis animi id.",
            "pontos": 58293,
            "dataHora": "2022-03-22T02:37:37.565Z",
            "id": "1"
        },
        {
            "idPai": 8030,
            "texto": "Necessitatibus voluptas vitae voluptas accusamus.",
            "pontos": 82706,
            "dataHora": "2022-03-21T23:59:27.477Z",
            "id": "2"
        },
        {
            "idPai": 49391,
            "texto": "Quod nesciunt id nesciunt.",
            "pontos": 91735,
            "dataHora": "2022-03-22T12:10:44.810Z",
            "id": "3"
        },
        {
            "idPai": 88961,
            "texto": "Maxime veritatis ut et.",
            "pontos": 80617,
            "dataHora": "2022-03-22T00:56:08.373Z",
            "id": "4"
        },
        {
            "idPai": 41880,
            "texto": "Consequatur eos nihil ut alias quas quasi sint quia qui.",
            "pontos": 83875,
            "dataHora": "2022-03-22T19:37:24.230Z",
            "id": "5"
        },
        {
            "idPai": 84586,
            "texto": "Consequatur nostrum blanditiis est ullam consectetur neque.",
            "pontos": 70212,
            "dataHora": "2022-03-22T02:43:41.676Z",
            "id": "6"
        },
        {
            "idPai": 79240,
            "texto": "Nisi tempora sed.",
            "pontos": 31883,
            "dataHora": "2022-03-22T10:03:50.765Z",
            "id": "7"
        },
        {
            "idPai": 65999,
            "texto": "Atque et at commodi vitae qui.",
            "pontos": 82781,
            "dataHora": "2022-03-22T20:28:59.919Z",
            "id": "8"
        },
        {
            "idPai": 37756,
            "texto": "Quae eum sed delectus quod ab iusto.",
            "pontos": 22376,
            "dataHora": "2022-03-22T20:53:51.465Z",
            "id": "9"
        },
        {
            "idPai": 27054,
            "texto": "Nulla id non nam fugiat.",
            "pontos": 3025,
            "dataHora": "2022-03-22T04:50:16.345Z",
            "id": "10"
        },
        {
            "idPai": 92375,
            "texto": "Est mollitia aut expedita quis vitae porro vel.",
            "pontos": 73542,
            "dataHora": "2022-03-22T04:32:09.213Z",
            "id": "11"
        }
    ];

    return <>
    <div className="alert-danger p-2">
        <button onClick={() => adicionaComentario()}>adicionar</button>
        
        <p>Quantidade de Comentários: {comentarios.length}</p>

        <div className="list-group">
            {
                comentarios.length === 0 ?
                <Spinner animation="border" />
                :
                comentarios.map((comentario) =>
                    <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <img src="https://github.com/twbs.png" alt="twbs" className="rounded-circle flex-shrink-0" width="32" height="32" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">{comentario.texto}</h6>
                                <p className="mb-0 opacity-75">{comentario.idPai ? 'Em resposta a outro comentário' : '-'}</p>
                            </div>
                            <small className="opacity-50 text-nowrap">{comentario.dataHora}, ID: {comentario.id}</small>
                        </div>
                    </a>
                )
            }
        </div></div>
    </>
}

export default ListaComentarios;