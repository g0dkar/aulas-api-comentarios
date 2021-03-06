import { useState } from "react";
import ComentariosApi from "../api/ComentarioApi";
import FormularioNovoComentario from "./FormularioNovoComentario";

const Apresentacao = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    const api = new ComentariosApi()

    return <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Comentários</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Deixe aqui seu comentário e vamos ler, votar e nos divertir!</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                {mostrarFormulario ?
                    <FormularioNovoComentario carregando={false} valorPadrao="Escreva um comentário" api={api} onComentarioCriado={() => setMostrarFormulario(false)} />
                    :
                    <button onClick={() => setMostrarFormulario(true)} type="button" className="btn btn-primary btn-lg px-4 gap-3">Deixar comentário</button>}
            </div>
        </div>
    </div>
}

export default Apresentacao;
