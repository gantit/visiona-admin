import React, { useState } from 'react';
import {useHistory} from "react-router-dom";

import {
  Button,
  Col,
  Form,
  Image,
  Row,
  Spinner,
} from 'react-bootstrap';
import * as userService from "../../services/user";
import logoBlack from '../../assets/img/logo-whiteBg.svg';
import logoWhite from '../../assets/img/logo-blackBg.svg';
import { frases, randrange, imgs } from "./frases";
import './Login.scss';


const cita = frases[randrange(0, frases.length - 1)]
const bg = imgs[randrange(0, imgs.length - 1)]

const Login = ({setBearer, setUser}) => {
  const history =useHistory();
  const [values, setValue] = useState({
    email: 'correo@user.es', 
    password: '1234',
    isInvalid: false
  });
  const [loading, setLoading] = useState(false)


  const sendForm = async (data) => {
    setLoading(true);
    const user = await userService.login(data);
    if(user){
      const {token,username, role, email} = user;
      setUser({ email, role, username })
      setBearer(token)
      history.push("/user")
    }
    setValue({ ...values, password: '', isInvalid: true });
    setLoading(false);
  };

  const handleSubmit = async () => await sendForm(values);
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
          <div className="logo onlyMobile">
            <Image src={logoWhite} rounded />
          </div>
            <p className="mb-0"> {cita.frase} </p>
            <footer className="blockquote-footer"> {cita.autor} </footer>
          </blockquote>
        </div>
      </Col>
      <Col xs={12} sm={9} md={6} xl={8} className="loginSection center">
        <Form>
          <div className="logo onlyTablet">
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

          <Button className="sendbtn" variant="primary" disabled={loading || !values.password || !values.email } onClick={handleSubmit}> Enviar {loader} </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
