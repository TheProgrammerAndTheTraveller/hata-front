import { useLoaderData } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './apartment.css';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import Stars from "../../components/stars/stars";
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faChartSimple, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function Apartment() {
  const { apartment } = useLoaderData();

  const description = [
    {
      "name": "Адрес",
      "value": apartment.address
    },
    {
      "name": "Название",
      "value": apartment.title
    },
    {
      "name": "Третий критерий",
      "value": "Заебись!"
    }
  ];

  return (
    <Container>
      <Row>
        <Col>
          <Carousel>
            {apartment.image.map((image, index) => (
              <Carousel.Item key={index} className="carousel-item-custom">
                <img
                  className="d-block w-100 carousel-image img-fluid"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col>
          <div className="map-container">
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <Map
                defaultZoom={13}
                defaultCenter={{ lat: apartment.location[0], lng: apartment.location[1] }}
              />
            </APIProvider>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <h1>{apartment.price}</h1>
          <h2>{apartment.address}</h2>
          <Stack direction="horizontal" gap={2}>
            <Badge pill bg="primary" text="light">
              Квартира
            </Badge>
            <Badge pill bg="primary" text="light">
              Помесячно
            </Badge>
          </Stack>
          <ButtonGroup className="my-2">
            <Button variant="outline-primary"><FontAwesomeIcon icon={faFilter} /> Wishlist</Button>
            <Button variant="outline-primary"><FontAwesomeIcon icon={faChartSimple} /> Compare</Button>
            <Button variant="outline-primary"><FontAwesomeIcon icon={faShareNodes} /> Share</Button>
          </ButtonGroup>
          <div className="my-3">
            <ButtonGroup size="lg" className="mb-1">
            <Link to="/checkout" className="btn btn-primary btn-lg">Арендовать</Link>
            <Button>Чат</Button>
              <Button>Отзывы</Button>
            </ButtonGroup>
          </div>
          <h1>Описание</h1>
          <hr />
          {description.map(({ name, value }, index) => (
            <Row key={index}>
              <Col xs="auto">{name}</Col>
              <Col xs="auto" className="description-divider"></Col>
              <Col xs={6}>{value}</Col>
            </Row>
          ))}
        </Col>

        <Col xs={3}>
          <div className="mt-1">
            <Stars ratio={3.5} />
          </div>
          <h1>Отзывы</h1>
          <hr />
          <h2>Ну ниче так, только дорого</h2>
        </Col>
      </Row>

      <div className="mt-5">
        <h1>Владелец квартиры</h1>
        <hr />
        <Row>
          <Col xs="auto">
            <Image src="/images/Kassym-Jomart_Tokayev_(2020-02-01).jpg" height="200px" roundedCircle />
          </Col>
          <Col>
            <h2>Вы сами знаете кто это</h2>
            <h3>Всегда онлайн!</h3>
            <Button variant="primary">Профиль</Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Apartment;
