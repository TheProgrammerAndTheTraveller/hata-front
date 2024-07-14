import React, { useState, useEffect } from 'react';
import { Image, Row, Col, Container, Accordion } from 'react-bootstrap';
import { useProfile } from '../../contexts/ProfileContext';
import { getCurrentBooking, getPropertyById } from '../../apiServices/profileService';
import ApartmentCard from '../../components/apartment-card';
import './profile.css';

function Profile() {
  const { getToken, getProfile, loading, error } = useProfile();
  const token = getToken(); // ИСПОЛЬЗОВАТЬ ВЕЗДЕ В КОМПОНЕНТАХ ВМЕСТО ПОЛУЧЕНИЯ ТОКЕНА ИЗ localStorage. И передавать через параметры в сервис.

  const [currentApartment, setCurrentApartment] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setProfile(await getProfile());
    }
    const fetchCurrentApartment = async () => {
      try {
        const booking = await getCurrentBooking(token);
        if (booking) {
          const apartment = await getPropertyById(booking.propertyId, token);
          setCurrentApartment(apartment);
        }
      } catch (error) {
        console.error('Failed to fetch current apartment:', error);
      }
    };

    fetchCurrentApartment();
    fetchProfile();
  }, []);

  if (loading || !profile) return <p>Loading...</p>;

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
          <Image src={profile.profilePicture} height="150px" rounded className="profile-image" />
          <div className="profile-text">
            <h2>{profile.firstName} {profile.lastName}</h2>
            <h3>Рейтинг: 10/10</h3>
            <h3>Телефон: {profile.contactInfo}</h3>
          </div>
        </Col>
        <Col xs={12} md={6} className="current-rental text-md-end justify-content-lg-end">
          {currentApartment ? (
            <ApartmentCard
              id={currentApartment.id}
              image={currentApartment.photo}
              title={currentApartment.address}
              price={currentApartment.price}
              className="mt-2"
            />
          ) : (
            <p>Сейчас нет активных бронирований</p>
          )}
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