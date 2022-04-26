import { useState } from "react";
import Form from 'react-bootstrap/Form'
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

const FormularioNovoComentario = ({ className, valorPadrao, carregando, api, onComentarioCriado }) => {
    const [textoNovoComentario, setTextoNovoComentario] = useState("")

    const cadastrarNovoComentario = (evt) => {
        evt.preventDefault();

        return api.addComment(textoNovoComentario)
            .then(response => {
                if (response.status === 201) {
                    setTextoNovoComentario("");

                    if (typeof onComentarioCriado == "function") {
                        onComentarioCriado(response.data);
                    }
                }
                else {
                    console.error("Recebi uma resposta INESPERADA:", response);
                }
            }).catch(erro => console.error("Deu ruim!", erro))
    }

    return <Form className={"d-flex " + className} onSubmit={cadastrarNovoComentario}>
        <FormControl
            type="text"
            placeholder={valorPadrao != null ? valorPadrao : "Novo comentário"}
            className="me-2"
            aria-label={valorPadrao != null ? valorPadrao : "Novo comentário"}
            value={textoNovoComentario}
            onChange={(evt) => setTextoNovoComentario(evt.target.value)}
            disabled={carregando}
        />
        <Button type="submit" className="mx-1" variant="outline-success" disabled={carregando}>Comentar</Button>
        <Button onClick={() => setTextoNovoComentario("<limpou o texto>")} variant="outline-danger" disabled={carregando}>Limpar</Button>
    </Form>
}

export default FormularioNovoComentario;
