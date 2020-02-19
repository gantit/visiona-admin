import React, { useState } from 'react';
import {
  Form, Row, Col, Button, Image,
} from 'react-bootstrap';
import axios from 'axios';

import logoBlack from '../../assets/img/logo-whiteBg.svg';
import './Login.scss';

axios.create({
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const instance = axios.create({
  mode: 'no-cors',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});
const Login = () => {
  const [values, setValue] = useState({
    email: 'correo@superadmin.es',
    password: '1234',
  });
  const [token, setToken] = useState();

  const API_URL = window.location.hostname !== 'localhost' ? 'https://api.visiona.cat' : 'http://localhost:4000';

  const sendForm = async (data) => {
    const url = `${API_URL}/api/user/login`;
    const response = await instance.post(url, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response;
  };

  const getUserData = async () => {
    const url = `${API_URL}/api/user/profile`;
    const response = await instance.get(url, {
      headers: {
        Authorization: token,
      },
    });

    return response;
  };

  const handleSubmit = async () => {
    const response = await sendForm(values);
    setToken(response.data.token);
  };

  const handleEmail = (e) => setValue({ ...values, email: e.target.value });

  const handlePassword = (e) => setValue({ ...values, password: e.target.value });

  return (
    <Row className="rowfull">
      <Col xs={12} sm={3} md={6} xl={4} className="description center">
        <div className="content">
          <blockquote className="blockquote">
            <p className="mb-0">
              ”Hay dos reglas para el éxito.
              <br />
              1) Nunca le digas todo lo que sabes”
            </p>
            <footer className="blockquote-footer"> Roger H. Lincoln</footer>
          </blockquote>
        </div>
      </Col>
      <Col xs={12} sm={9} md={6} xl={8} className="loginSection center">
        <Form>
          <div className="logo">
            <Image src={logoBlack} rounded />
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleEmail}
              autoFocus
              type="email"
              placeholder="Enter email"
              required
              value={values.email}
            />
            <Form.Control.Feedback type="invalid">
              Proporciona un correo electronico correcto
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              autoFocus
              onChange={handlePassword}
              placeholder="Contraseña"
              required
              value={values.password}
            />
            <Form.Control.Feedback type="invalid">
              Contraseña obligatoria
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="switch"
              id="custom-switch"
              label="auto Login"
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit}> Enviar </Button>
          <Button variant="primary" onClick={getUserData}> user </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
