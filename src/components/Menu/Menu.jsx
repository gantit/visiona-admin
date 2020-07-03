import React, { useState, useRef } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

import useClickOutside from '../Hooks/useClickOutside';

import logoWhite from '../../assets/img/logoIcon-blackBg.svg';

import s from './Menu.module.scss';

const Menu = () => {
  const ref = useRef();
  const [isOpen, setOpen] = useState(false);
  useClickOutside(ref, () => setOpen(false));

  const menu = () => (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Navbar.Brand as={Link} to="/" className={s.link}>
        <img
          src={logoWhite}
          width="200"
          className={`d-inline-block align-top ${s.logoMenu}`}
          alt="visiona logo"
        />
      </Navbar.Brand>
      <Nav.Link eventKey="disabled" disabled href="/inventory">inventario</Nav.Link>
    </Nav>
  );

  return (

    <div className="menuLat">
      <Navbar expand="sm" className={`${s.onlyMobile}`} ref={ref} expanded={isOpen}>
        <Navbar.Toggle aria-controls="nav" className={`${s.button}`} onClick={() => setOpen(!isOpen)}>
          <MdMenu color="black" />
        </Navbar.Toggle>
        <Navbar.Collapse id="nav" className="justify-content-end">
          <Nav>
            {menu()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={s.onlyTablet}>
        {menu()}
      </div>
    </div>
  );
};


export default Menu;
