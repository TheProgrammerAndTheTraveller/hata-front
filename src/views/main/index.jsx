import { Col, Row } from "react-bootstrap";
import ApartmentCard from "../../components/apartment-card";
import apartmentcards from "../../data/apartmentcards";


function Main() {
  return <>
    <h1>Главная</h1>
    <hr></hr>
    <Row>
      {apartmentcards.map(apartment => (
        <Col md="auto" className="mb-3">
          <ApartmentCard
            key={apartment.id}
            id={apartment.id}
            image={apartment.image}
            title={apartment.title}
            price={apartment.price}
            location={apartment.location}
          />
        </Col>
      ))}
    </Row>
  </>
}

export default Main;