import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
} from 'react-bootstrap';
import { AiOutlineUser } from "react-icons/ai";

import "./Header.scss";
import eng from '../../assets/flags/eng.svg';
import cat from '../../assets/flags/cat.svg';
import esp from '../../assets/flags/esp.svg';


const Header = ({user, changeDistribution, distribution}) => {
  return(
    <Navbar bg="dark" expand="sm" variant="dark">
      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav" className="justify-content-end">
        <Nav >
          <Navbar.Collapse>
            <NavDropdown className="dropDown" title={<><AiOutlineUser color={'white'}/> <p className="user">{user.username}</p></>} id="user-dropdown">
              <NavDropdown.Item onClick={()=>changeDistribution(!distribution)}> {distribution ? 'Header OFF' : 'Header ON'}</NavDropdown.Item>
              <NavDropdown.Item> 
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
          <Navbar.Collapse className="navBar">
            <NavDropdown className="dropDown" title={<p className="user" >Idioma</p>} id="Lang-dropdown">
              <NavDropdown.Item> <img className="flag" src={eng} alt="united kindon Flag"/> English </NavDropdown.Item>
              <NavDropdown.Item> <img className="flag" src={cat} alt="catalonia Flag"/> Catalan </NavDropdown.Item>
              <NavDropdown.Item> <img className="flag" src={esp} alt="spain Flag"/> Español </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


export default Header;