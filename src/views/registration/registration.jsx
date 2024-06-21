import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { register } from '../../apiServices/authService';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const data = await register({ firstName, lastName, email, password });
      console.log('Registration successful', data);
      navigate('/login');
    } catch (err) {
      console.error(err);
      setError('Ошибка при регистрации');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col xs={12} md={8} lg={5}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <Card.Title className="text-center mb-4">Регистрация</Card.Title>
              <Form onSubmit={handleRegister}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>Имя</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите имя"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formLastName" className="mt-3">
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите фамилию"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Введите email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                {error && <div className="alert alert-danger mt-3">{error}</div>}

                <Button variant="primary" type="submit" className="w-100 mt-4">
                  Зарегистрироваться
                </Button>
              </Form>
              <div className="mt-3 text-center">
                <span>У вас уже есть аккаунт? </span>
                <a href="/login">Войдите прямо сейчас</a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
