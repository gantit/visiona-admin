import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

import useAsync from '../Hooks/useAsync';

import s from './RecentsProductsAdded.module.scss';

const API_URL = window.location.hostname !== 'localhost' ? 'https://api.visiona.cat' : 'http://localhost:4000';
// eslint-disable-next-line no-unused-vars
const ITEMS_MOCK = [
  { id: 'vs1', name: 'Foodetector Perimetral', providerPrice: 69 },
  { id: 'vs2', name: 'Perimetral Optex', providerPrice: 79 },
  { id: 'vs3', name: 'Detector Shock Sensor', providerPrice: 19 },
  { id: 'vs4', name: 'Magnético', providerPrice: 19 },
  { id: 'vs5', name: 'Fotodetector', providerPrice: 39 },
  { id: 'vs6', name: 'Fotodetector IPDE', providerPrice: 39 },
  { id: 'vs7', name: 'Volumétrico', providerPrice: 35 },
  { id: 'vs8', name: 'Sirena', providerPrice: 19 },
];

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
      {items.map((item, index) => (
        <tr key={item.id}>
          <td>{index}</td>
          <td>{item.name}</td>
          <td>{`${item.providerPrice}€`}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const RecentsProductsAdded = () => {
  const getProducts = async () => {
    const url = `${API_URL}/api/products/`;
    const response = await axios.get(url);
    return response;
  };

  /* const { pending, value, error } = useAsync(getProducts, false); */
  const { pending, error } = useAsync(getProducts, false);

  return (
    <div className={s.recentsProductsAdded}>
      <ItemTable items={ITEMS_MOCK} />
      {error && <div>{error}</div>}
      {pending && <div>pending</div>}
    </div>
  );
};


export default RecentsProductsAdded;
