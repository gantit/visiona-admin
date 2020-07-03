import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import CardButton from '../CardButton/CardButton';

import scanner from '../../assets/img/icons/scanner.svg';
import inventory from '../../assets/img/icons/inventory.svg';
import importar from '../../assets/img/icons/import.svg';
import exportar from '../../assets/img/icons/export.svg';

import s from './MenuOptions.module.scss';

const MenuOptions = () => {
  const { url } = useRouteMatch();
  console.log(url);

  return (
    <div className={s.menuButtons}>
      <Link to="/addProduct">
        <CardButton img={scanner} text="Agregar Producto" />
      </Link>
      <Link to="/inventory">
        <CardButton img={inventory} text="Inventario" />
      </Link>
      <Link to="/add">
        <CardButton img={importar} text="Instalar" />
      </Link>
      <Link to="/remove">
        <CardButton img={exportar} text="Retirar" />
      </Link>
    </div>
  );
};


export default MenuOptions;
