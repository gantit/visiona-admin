import React, { useState } from 'react';
import {
  Form, Row, Col, Button, Image,
} from 'react-bootstrap';

import logoBlack from '../../assets/img/logo-whiteBg.svg';
import './App.scss';

const App = () => {
  const [validated, setValidated] = useState(false);
  const [emailValid, setEmailValid] = useState(false);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleCheckEmail = (event) => {
    console.log('Server CheckEmail Is valid', event);
    const email = event.currentTarget;
    console.log(email.checkValidity());
    if (email.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setEmailValid(true);
  };

  return (
    <Row className="rowfull">
      <Col xs={12} sm={3} md={6} xl={4} className="description center">
        <div className="content">
          <blockquote className="blockquote">
            <p className="mb-0">”Hay dos reglas para el éxito. 1) Nunca le digas todo lo que sabes”</p>
            <footer className="blockquote-footer"> Roger H. Lincoln</footer>
          </blockquote>
        </div>
      </Col>
      <Col xs={12} sm={9} md={6} xl={8} className="loginSection center">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="logo">
            <Image src={logoBlack} rounded />
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleCheckEmail} type="email" isInvalid={emailValid} placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid">
              Proporciona un correo electronico correcto
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" required />
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
          <Button variant="primary" type="submit"> Enviar </Button>
        </Form>

      </Col>
    </Row>


  );
};

export default App;
