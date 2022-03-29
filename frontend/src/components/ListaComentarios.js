import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import ComentariosApi from "../api/ComentarioApi"

const MapeamentoComentario = ({ comentario }) => {
    return <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
        <img src="https://github.com/twbs.png" alt="twbs" className="rounded-circle flex-shrink-0" width="32" height="32" />
        <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
                <h6 className="mb-0">{comentario.texto}</h6>
                <p className="mb-0 opacity-75">{comentario.idPai ? 'Em resposta a outro comentário' : '-'}</p>
            </div>
            <small className="opacity-50 text-nowrap">{comentario.dataHora}, ID: {comentario.id}</small>
        </div>
    </a>
}

const ListaComentarios = () => {
    const api = new ComentariosApi()

    const [carregandoComentarios, setCarregandoComentarios] = useState(true)
    const [comentarios, setComentarios] = useState([])

    const inicializar = () => {
        setCarregandoComentarios(true)

        api.delay(1000).then(() => {
            api.listComment()
                .then(listaComentarios => {
                    setComentarios(listaComentarios)
                    //setCarregandoComentarios(false)
                })
                .catch(erro => {
                    console.log("Deu erro! Erro =", erro)
                })
        })
    }

    useEffect(() => {
        inicializar()
    }, [])

    return <div className="list-group">
        <div id="exemplo">Olá!</div>
        <button className="btn btn-primary m-4" onClick={() => inicializar()} disabled={carregandoComentarios}>Recarregar</button>
        {
            carregandoComentarios ?
                <Spinner animation="border" />
                :
                comentarios.map(comentario => <MapeamentoComentario comentario={comentario} />)
        }
    </div>
}

export default ListaComentarios;
