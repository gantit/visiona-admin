import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Col, Form,
  Image, Row, Spinner,
} from 'react-bootstrap';

import useUser from '../../components/Hooks/useUser';
import { cita, bg } from './frases';

import logoBlack from '../../assets/img/logo-whiteBg.svg';
import logoWhite from '../../assets/img/logo-blackBg.svg';

import s from './Login.module.scss';

const Login = ({ setUser }) => {
  const history = useHistory();
  const {
    login, isLoginLoading, isLogged, user,
  } = useUser();
  const [values, setValue] = useState({
    email: 'correo@user.es',
    password: '',
    isInvalid: false,
  });

  useEffect(() => {
    if (isLogged) {
      history.push('/dashboard');
    }
  }, [isLogged, history]);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user, setUser]);


  const handleSubmit = () => { login(values); };
  const handleEmail = (e) => setValue({ ...values, email: e.target.value });
  const handlePassword = (e) => setValue({ ...values, password: e.target.value });

  const loader = <>{isLoginLoading && <Spinner className="loader" animation="border" size="sm" />}</>;

  return (
    <Row className={s.rowfull}>
      <Col
        xs={12}
        sm={3}
        md={6}
        xl={4}
        className={`${s.description} ${s.center}`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={s.content}>
          <blockquote className={s.blockquote}>
            <div className={`${s.logo} ${s.onlyMobile}`}>
              <Image src={logoWhite} rounded />
            </div>
            <p className="mb-0">
              {cita.frase}
            </p>
            <footer className={s.blockquoteFooter}>
              {cita.autor}
            </footer>
          </blockquote>
        </div>
      </Col>
      <Col xs={12} sm={9} md={6} xl={8} className={`${s.center}`}>
        <Form>
          <div className={`${s.logo} ${s.onlyTablet}`}>
            <Image src={logoBlack} rounded />
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleEmail}
              type="email"
              placeholder="Enter email"
              required
              value={values.email}
              isInvalid={values.isInvalid}
            />
            <Form.Control.Feedback type="invalid"> Error en el Email </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              onChange={handlePassword}
              placeholder="Contraseña"
              required
              value={values.password}
              isInvalid={values.isInvalid}
            />
            <Form.Control.Feedback type="invalid"> Hay un error en la contraseña </Form.Control.Feedback>
          </Form.Group>

          <Button className={s.sendbtn} variant="primary" disabled={isLoginLoading || !values.password || !values.email} onClick={handleSubmit}>
            Enviar
            {loader}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
