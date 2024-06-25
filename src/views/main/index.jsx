import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ApartmentCard from '../../components/apartment-card';
import { getProperties } from '../../apiServices/propertyService'; // Добавляем сервис

function Main() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties();
        setApartments(data);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      <h1>Главная</h1>
      <hr />
      <Row>
        {apartments.map(apartment => (
          <Col key={apartment.id} md="auto" className="mb-3">
            <ApartmentCard
              id={apartment.id}
              image={apartment.photo}
              title={apartment.address}
              price={apartment.price}
              location={apartment.address}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Main;
