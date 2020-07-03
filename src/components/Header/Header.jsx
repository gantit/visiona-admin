import React, { useState, useRef, useEffect } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { AiOutlineUser } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useLocation, useHistory } from 'react-router-dom';

import useClickOutside from '../Hooks/useClickOutside';

import eng from '../../assets/flags/eng.svg';
import cat from '../../assets/flags/cat.svg';
import esp from '../../assets/flags/esp.svg';

import s from './Header.module.scss';

const Header = ({ user }) => {
  const ref = useRef();
  const baseRoute = '/';
  const [isOpen, setOpen] = useState(false);
  const [actualRoute, setRoute] = useState(baseRoute);
  useClickOutside(ref, () => setOpen(false));
  const { goBack } = useHistory();

  const usePageViews = () => {
    const location = useLocation();
    useEffect(() => {
      setRoute(location.pathname);
    }, [location]);
  };

  return (
    <Navbar expand="sm" className={s.header} ref={ref} expanded={isOpen}>
      {usePageViews()}
      {(actualRoute !== baseRoute && actualRoute !== '/dashboard') && (
        <Nav.Link className={s.back} onClick={goBack}>
          <IoMdArrowRoundBack color="black" />
        </Nav.Link>
      )}
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

export default Header;
