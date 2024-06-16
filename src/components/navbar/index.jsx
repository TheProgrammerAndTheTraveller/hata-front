import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function HataNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/chat">Чат</Nav.Link>
            <Nav.Link href="/search">Поиск</Nav.Link>
            <Nav.Link href="/wishlist">Избранное</Nav.Link>
            <Nav.Link href="/profile">Профиль</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Искать</Button>
          </Col>
          <Col xs="auto">
          <Button variant="outline-primary"><FontAwesomeIcon icon={faFilter} /></Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>
  );
}

export default HataNavbar;