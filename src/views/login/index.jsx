import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { login } from '../../apiServices/authService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const data = await login(email, password);
      console.log('Login successful', data);
      // Handle successful login (e.g., save token, redirect)
      navigate('/'); // Redirect to the main page
    } catch (err) {
      setError('Данного пользователя не существует'); // Set the error message
    }
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col xs={12} md={8} lg={5}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <Card.Title className="text-center mb-4">Вход</Card.Title>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Введите email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
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
                  Войти
                </Button>
              </Form>
              <div className="mt-3 text-center">
                <span>У вас еще нет аккаунта? </span>
                <a href="/registration">Зарегистрируйтесь прямо сейчас</a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
