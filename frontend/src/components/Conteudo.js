import Container from 'react-bootstrap/Container'
import Apresentacao from './Apresentacao';
import ListaComentarios from './ListaComentarios';

const Conteudo = () =>
    <Container>
        <Apresentacao />
        <hr />
        <ListaComentarios />
    </Container>

export default Conteudo;
