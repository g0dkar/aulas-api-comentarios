import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const BarraNavegacao = () =>
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">Comentários</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Produto</Nav.Link>
                    <Nav.Link href="#home">Fornecedor</Nav.Link>
                    <Nav.Link href="#home">Usuários</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

export default BarraNavegacao;
