import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
  Form, Col, InputGroup, Button, Table,
} from 'react-bootstrap';

import useAsync from '../Hooks/useAsync';

import s from './Inventory.module.scss';

const API_URL = window.location.hostname !== 'localhost' ? 'https://api.visiona.cat' : 'http://localhost:4000';

const Inventory = () => {
  const getProducts = async () => {
    const url = `${API_URL}/api/products/`;
    const response = await axios.get(url);
    return response;
  };

  const {
    execute, pending, value, error,
  } = useAsync(getProducts, false);


  return (
    <>
      <div className={s.menuButton} />
      <div className={s.inventory}>
        <FormExample execute={execute} />
        {value && <ItemTable items={value} />}
        {error && <div>{error}</div>}
        {pending && <div>pending</div>}
      </div>
    </>
  );
};

const schema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  username: Yup.string().required(),
  email: Yup.string()
    .required('Email address is required')
    .email('Must be an email address'),
  city: Yup.string().required(),
  state: Yup.string().required(),
  zip: Yup.string().required(),
  terms: Yup.bool().required(),
});

const FormExample = ({ execute }) => (
  <Formik
    validationSchema={schema}
    onSubmit={console.log}
    initialValues={{
      firstName: 'Mark',
      lastName: 'Otto',
    }}
  >
    {({
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      touched,
      isValid,
      errors,
    }) => (

      <Form noValidate onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationFormik01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              isValid={touched.firstName && !errors.firstName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormik02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              isValid={touched.lastName && !errors.lastName}
            />

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormikUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationFormik03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              value={values.city}
              onChange={handleChange}
              isInvalid={!!errors.city}
            />

            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationFormik04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              name="state"
              value={values.state}
              onChange={handleChange}
              isInvalid={!!errors.state}
            />
            <Form.Control.Feedback type="invalid">
              {errors.state}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationFormik05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              name="zip"
              value={values.zip}
              onChange={handleChange}
              isInvalid={!!errors.zip}
            />

            <Form.Control.Feedback type="invalid">
              {errors.zip}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            name="terms"
            label="Agree to terms and conditions"
            onChange={handleChange}
            isInvalid={!!errors.terms}
            feedback={errors.terms}
            id="validationFormik0"
          />
        </Form.Group>
        <Button type="submit" onClick={execute}>Submit form</Button>
      </Form>
    )}
  </Formik>
);

const ItemTable = ({ items }) => (
  <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      {ITEMS_MOCK.map((item, index) => (
        <tr>
          <td>{index}</td>
          <td>{item.name}</td>
          <td>{item.providerPrice}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

// eslint-disable-next-line no-unused-vars
const ITEMS_MOCK = [
  { name: 'Foodetector Perimetral', providerPrice: 69 },
  { name: 'Perimetral Optex', providerPrice: 79 },
  { name: 'Detector Shock Sensor', providerPrice: 19 },
  { name: 'Magnético', providerPrice: 19 },
  { name: 'Fotodetector', providerPrice: 39 },
  { name: 'Fotodetector IPDE', providerPrice: 39 },
  { name: 'Volumétrico', providerPrice: 35 },
  { name: 'Sirena', providerPrice: 19 },
];

export default Inventory;
