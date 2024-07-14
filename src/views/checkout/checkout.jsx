// src/views/apartment/checkout.jsx
import React, { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from 'react-router-dom';
import bookingService from '../../apiServices/bookingService';
import { useProfile } from '../../contexts/ProfileContext'; // Импорт контекста профиля

function Checkout() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { apartment } = useLoaderData();
  const { getToken } = useProfile()
  const handleBooking = async () => {

    // БРАТЬ ИЗ КОНТЕКСТА метод getToken(), ошибку не обрабатывать
    const token = getToken()
    if (!token) {
      setError('User is not authenticated');
      return;
    }

    const bookingDto = {
      propertyId: apartment.id, 
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    };

    try {
      const booking = await bookingService.createBooking(bookingDto, token);
      console.log('Booking created successfully', booking);
      navigate('/profile'); // Перенаправление на страницу профиля после успешного бронирования
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <h1>Бронь</h1>
      <hr />
      <Tabs defaultActiveKey="dates" id="justify-tab-example" className="mb-3" justify>
        <Tab eventKey="dates" title="Даты">
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        </Tab>
        <Tab eventKey="payment" title="Оплата">
          <button onClick={handleBooking}>Забронировать</button>
        </Tab>
        <Tab eventKey="review" title="Отзыв">
          Tab content for Review
        </Tab>
      </Tabs>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </Container>
  );
}

export default Checkout;
