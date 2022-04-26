import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import ComentariosApi from "../api/ComentarioApi"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/esm/Container"
import FormularioNovoComentario from "./FormularioNovoComentario"

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

        return api.listComment()
            .then(listaComentarios => {
                setComentarios(listaComentarios)
                setCarregandoComentarios(false)
            })
            .catch(erro => {
                console.log("Deu erro! Erro =", erro)
            });
    }

    useEffect(() => {
        inicializar()
    }, [])

    return <>
        <Navbar bg="light" expand="lg" className="mb-2">
            <Container>
                <Navbar.Brand href="#">{carregandoComentarios ? 'Carregando...' : comentarios.length + " comentários"}</Navbar.Brand>
                <Button onClick={inicializar} className="me-2" variant="outline-info" disabled={carregandoComentarios}>Atualizar</Button>
                <FormularioNovoComentario carregando={carregandoComentarios} valorPadrao="Escreva um comentário" api={api} />
            </Container>
        </Navbar>

        <div className="list-group mb-4">
            {
                carregandoComentarios ?
                    <Spinner animation="border" />
                    :
                    comentarios.map(comentario => <MapeamentoComentario key={comentario.id} comentario={comentario} />)
            }
        </div>
    </>
}

export default ListaComentarios;
