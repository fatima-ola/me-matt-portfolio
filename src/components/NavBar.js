import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar variant='dark' className="navbar pt-5 pb-5">
      <Container>
        <div className="navbar-brand">MatthewAbikoye</div>
        <div>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li class='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
            <li class='nav-item'>
              <Link className='nav-link'>Skills</Link>
            </li>
            <li class='nav-item'>
              <Link className='nav-link'>Experience</Link>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
