import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Footer(){
    return(
    <footer className="bg-dark text-white mt-5 p-4 main-footer">
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <p>&copy; MachHataHouze.</p>
            <p>Наш девиз: Через жопу и на отъебись. Дайте нам денег, пожалуйста</p>
            <p>זין</p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
}
export default Footer;