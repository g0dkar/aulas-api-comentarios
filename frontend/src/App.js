import Container from 'react-bootstrap/Container'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNavegacao from './components/BarraNavegacao';
import Conteudo from './components/Conteudo';

const App = () =>
  <Container fluid>
    <BarraNavegacao />
    <Conteudo />
  </Container>

export default App;
