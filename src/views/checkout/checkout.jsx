// Ваш файл checkout.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Checkout() {
  return (
    <Container>
     <h1>Бронь</h1>
     <hr></hr>
     <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Даты">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Оплата">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Отзыв">
        Tab content for Loooonger Tab
      </Tab>
      
    </Tabs>
    </Container>
  );
}

export default Checkout; // Убедитесь, что компонент экспортируется таким образом
