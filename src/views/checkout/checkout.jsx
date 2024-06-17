// Ваш файл checkout.jsx
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


function Checkout() {
  const [startDate, setStartDate] = useState(new Date());


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
      <Tab eventKey="home" title="Даты" active="true">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
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
