import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
} from 'mdbreact';
import React, { useState, FC } from 'react';
import { navAbout, navHome, navSkills, navCredits } from './content';
import Intro from './Intro';
import { useLanguage } from '../contexts/Language';
import NavLink from './NavLink';

const NavRoutes: FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { language } = useLanguage();

  const handleTogglerClick = () => setCollapsed(!collapsed);

  const overlay = <div id="sidenav-overlay" onClick={handleTogglerClick} />;

  return (
    <div>
      <div>
        <MDBNavbar
          color="primary-color"
          dark
          expand="md"
          fixed="top"
          scrolling
          transparent
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <MDBIcon
                className="light-steel-text"
                size="2x"
                fab
                icon="react"
              />
            </MDBNavbarBrand>
            <MDBNavbarBrand>
              <strong className="white-text">Thiago Santana</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={handleTogglerClick} />
            <MDBCollapse isOpen={collapsed} navbar>
              <MDBNavbarNav left>
                <NavLink to="/home" label={navHome[language]} />
                <NavLink to="/about" label={navAbout[language]} />
                <NavLink to="/skills" label={navSkills[language]} />
                <NavLink to="/portfolio" label="Portfolio" />

                <NavLink to="/credits" label={navCredits[language]} />
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {collapsed && overlay}
      </div>
      <Intro />
      <main>{children}</main>
    </div>
  );
};

export default NavRoutes;
