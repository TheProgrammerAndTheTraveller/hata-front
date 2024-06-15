import React from 'react';
import { Badge, Card, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ApartmentCard = ({ id, image, title, price }) => {
  return (
    <Card style={{ width: '18rem', textDecoration: 'none' }} as={Link} to={`/apartments/${id}`} >
      <Card.Img variant="top" src={image[0]} />
      <Card.Header>
        <Stack direction="horizontal" gap={2}>
          <Badge pill bg="primary" text="light">
            Квартира
          </Badge>
          <Badge pill bg="primary" text="light">
            Помесячно
          </Badge>
        </Stack>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>Залупа в пизде города</Card.Subtitle>
        <Card.Text>
          <strong>{price}</strong> за месяц
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ApartmentCard;
