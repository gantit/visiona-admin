import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { AiOutlineUser } from "react-icons/ai";

import "./Header.scss";
import logoWhite from '../../assets/img/logo-blackBg.svg';

const Header = ({user}) => {
  console.log(user)
  return(
    <Navbar bg="dark" expand="sm" fixed="top" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src={logoWhite}
          width="200"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navBar justify-content-end">
        <NavDropdown className="dropDown" title={<><AiOutlineUser color={'white'}/> <p className="user">{user.username}</p></>} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}


export default Header;