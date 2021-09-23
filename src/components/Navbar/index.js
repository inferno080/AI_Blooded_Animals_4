import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElement';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>HelloGroccers</NavLink>
        <NavIcon onClick={toggle}>
          <p>Store</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
