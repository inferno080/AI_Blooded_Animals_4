import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElement';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>HelloGroccers</NavLink>
        <NavIcon onClick={toggle}>
          <p>Contact Us</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
