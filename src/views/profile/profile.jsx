import { Image } from "react-bootstrap";
import { Row, Col, Container, Accordion } from "react-bootstrap";
import ApartmentCard from "../../components/apartment-card";
import apartmentcards from "../../data/apartmentcards";
import "./profile.css";


function Profile() {
    const apartment = apartmentcards[0];

    return (
        <Container>
            <Row className="d-flex align-items-start">
                <Col xs={12}>
                    <Row className="d-flex justify-content-between align-items-center">
                        <Col xs={12} md={6}>
                            <h1>Обо мне</h1>
                        </Col>
                        <Col xs={12} md={6} className="text-md-end">
                            <h1>Снимаю сейчас</h1>
                        </Col>
                    </Row>
                    <hr className="w-100" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} className="about-me">
                    <Image src="/images/0bdcb380-7412-11ed-80af-5f46b05f17f0.jpg" height="150px" rounded className="profile-image" />
                    <div className="profile-text">
                        <h2>Зубенко Михаил</h2>
                        <h3>Рейтинг: 10/10</h3>
                        <h3>Телефон: +77272281488</h3>
                    </div>
                </Col>
                <Col xs={12} md={6} className="current-rental text-md-end justify-content-lg-end">
                    <ApartmentCard id={apartment.id} image={apartment.image} title={apartment.title} price={apartment.price} className="mt-2" />
                </Col>
            </Row>
            <div className="mt-4">
                <h1>Детали</h1>
                <hr />
                <Accordion>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Текущая аренда</Accordion.Header>
    <Accordion.Body>Ты платишь очень много</Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Настройки профиля</Accordion.Header>
    <Accordion.Body>Профиль как профиль, пойдет</Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Договоры/Чеки</Accordion.Header>
    <Accordion.Body>Договор о продаже матери.pdf</Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Список арендованных квартир</Accordion.Header>
    <Accordion.Body>Ты за первую заплати для начала</Accordion.Body>
  </Accordion.Item>
</Accordion>

            </div>
        </Container>
    );
}

export default Profile;
