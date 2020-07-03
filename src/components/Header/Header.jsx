import React, { useState, useRef } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';

import useClickOutside from '../Hooks/useClickOutside';

import eng from '../../assets/flags/eng.svg';
import cat from '../../assets/flags/cat.svg';
import esp from '../../assets/flags/esp.svg';

import s from './Header.module.scss';

const Header = ({ user }) => {
  const ref = useRef();
  const [isOpen, setOpen] = useState(false);
  useClickOutside(ref, () => setOpen(false));

  return (
    <Navbar expand="sm" className={s.header} ref={ref} expanded={isOpen}>
      <Navbar.Toggle aria-controls="nav" className={s.button} onClick={() => setOpen(!isOpen)}>
        <FaHome color="black" />
      </Navbar.Toggle>
      <Navbar.Collapse id="nav" className="justify-content-end">
        <Nav>
          <Navbar.Collapse>
            <NavDropdown
              className={s.dropDown}
              title={(
                <>
                  <AiOutlineUser color="black" />
                  <p className={s.user}>{user.username}</p>
                </>
            )}
              id="user-dropdown"
            >
              <NavDropdown.Item> Perfil </NavDropdown.Item>
              <NavDropdown.Item>
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
          <Navbar.Collapse className={s.navBar}>
            <NavDropdown className={s.dropDown} title={<p className={s.user}>Idioma</p>} id="Lang-dropdown">
              <NavDropdown.Item>
                <img className={s.flag} src={eng} alt="united kindon Flag" />
                English
              </NavDropdown.Item>
              <NavDropdown.Item>
                <img className={s.flag} src={cat} alt="catalonia Flag" />
                Catalan
              </NavDropdown.Item>
              <NavDropdown.Item>
                <img className={s.flag} src={esp} alt="spain Flag" />
                Español
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
};

Header.defaultProps = {
  user: {},
};

export default Header;
