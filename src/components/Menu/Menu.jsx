import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";
import logoWhite from '../../assets/img/logoIcon-blackBg.svg';
import menu from "./Menu.module.scss";

const Menu = () => {
  console.log(menu)
  return(
    <div className="menuLat">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Navbar.Brand as={Link} to="/" className={menu.link}>
          <img
            src={logoWhite}
            width="200"
            className={`d-inline-block align-top ${menu.logoMenu}`}
            alt="visiona logo"
          />
        </Navbar.Brand>
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </div>
  )
}


export default Menu;