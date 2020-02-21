import React, { useState } from 'react';
import { Router, Route, Switch } from "react-router";
import {
  Button,
  Col,
  Form,
  Image,
  Row,
  Spinner,
} from 'react-bootstrap';
import axios from 'axios';

import logoBlack from '../../assets/img/logo-whiteBg.svg';
import { frases, randrange, imgs } from "./frases";
import './Login.scss';

const instance = axios.create({
  mode: 'no-cors',
  timeout: 5000,
});

const cita = frases[randrange(0, frases.length - 1)]
const bg = imgs[randrange(0, imgs.length - 1)]

const Login = () => {

  const [values, setValue] = useState({
    email: '',
    password: '',
  });
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false)


  const API_URL = window.location.hostname !== 'localhost' ? 'https://api.visiona.cat' : 'http://localhost:4000';

  const sendForm = async (data) => {
    setLoading(true);
    const url = `${API_URL}/api/user/login`;
    const response = await instance.post(url, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    setLoading(false);
    return response;
  };

  const getUserData = async () => {
    const url = `${API_URL}/api/user/profile`;
    const response = await instance.get(url, {
      headers: { Authorization: token },
    });

    return response;
  };

  const handleSubmit = async () => {
    const response = await sendForm(values);
    setToken(response.data.token);
  };

  const handleEmail = (e) => setValue({ ...values, email: e.target.value });

  const handlePassword = (e) => setValue({ ...values, password: e.target.value });

  const loader = <>{loading && <Spinner className="loader" animation="border" size="sm" />}</>

  return (
    <Row className="rowfull">
         <Col xs={12} sm={3} md={6} xl={4}
        className="description center"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className="content">
          <blockquote className="blockquote">
            <p className="mb-0">
              {cita.frase}
            </p>
            <footer className="blockquote-footer"> {cita.autor} </footer>
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

          <Button className="sendbtn" variant="primary" disabled={loading} onClick={handleSubmit}> Enviar {loader} </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
