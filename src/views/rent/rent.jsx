import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { addProperty } from '../../apiServices/propertyService';
import { useProfile } from '../../contexts/ProfileContext';
import { useNavigate } from 'react-router-dom';

function Rent() {
    const { getToken } = useProfile();
    const navigate = useNavigate();

    let token = null;

    useEffect(() => {
        token = getToken();
    })

    const [formData, setFormData] = useState({
        address: '',
        description: '',
        price: '',
        rooms: '',
        propertyType: '',
        internet: '',
        furniture: '',
        bathrooms: '',
        area: '',
        photo: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            photo: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(e.target);

        try {
            await addProperty(data, token);
            alert('Property added successfully');
            navigate("/");
            
        } catch (error) {
            alert(`Failed to add property: ${error.message}`);
        }
    };

    return (
        <Container>
            <h1>Вы хотите сдать квартиру? Заебись</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="address">
                    <Form.Label>Адрес</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Цена</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="rooms">
                    <Form.Label>Комнаты</Form.Label>
                    <Form.Control
                        type="number"
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="propertyType">
                    <Form.Label>Тип недвижимости</Form.Label>
                    <Form.Control
                        type="text"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="internet">
                    <Form.Label>Есть интернет?</Form.Label>
                    <Form.Control
                        as="select"
                        name="internet"
                        value={formData.internet}
                        onChange={handleChange}
                    >
                        <option value="true">Да</option>
                        <option value="false">Нет</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="furniture">
                    <Form.Label>Есть мебель?</Form.Label>
                    <Form.Control
                        as="select"
                        name="furniture"
                        value={formData.furniture}
                        onChange={handleChange}
                    >
                        <option value="true">Да</option>
                        <option value="false">Нет</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="bathrooms">
                    <Form.Label>Ванные комнаты</Form.Label>
                    <Form.Control
                        as="select"
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="area">
                    <Form.Label>Площадь</Form.Label>
                    <Form.Control
                        type="number"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="photo">
                    <Form.Label>Фотография</Form.Label>
                    <Form.Control
                        type="file"
                        name="photo"
                        onChange={handleFileChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Отправить
                </Button>
            </Form>
        </Container>
    );
}

export default Rent;
