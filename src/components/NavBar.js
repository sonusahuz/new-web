import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Menu, ArrowRight } from 'lucide-react';

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="fw-bold d-flex align-items-center gap-2"
        >
          <img src="assets/img/logo4.png" alt="img" style={{ width: '80px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <Menu />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className="fw-semibold">
              Home
            </Nav.Link>

            <Nav.Link href="/about" className="fw-semibold">
              About Us
            </Nav.Link>

            <NavDropdown
              title="Services"
              id="services-dropdown"
              className="fw-semibold"
            >
              <NavDropdown.Item href="/mobile-app">
                Digital App Development Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/cross-platfrom-development">
                Cross Platform Apps Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/digital-product-development">
                {' '}
                Software Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/project-management">
                {' '}
                Operations Consultancy Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/meta-campaign">
                Digital Marketing
              </NavDropdown.Item>
              <NavDropdown.Item href="/legal-services">
                Legal Services
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/technologies" className="fw-semibold">
              Technologies
            </Nav.Link>

            <Nav.Link href="/career" className="fw-semibold">
              Career
            </Nav.Link>

            <Nav.Link href="/contact" className="fw-semibold">
              Contact
            </Nav.Link>

            <button className="ms-3 d-flex align-items-center gap-2 border-1 bg-primary text-white rounded-pill px-3 py-2">
              <span>Get Started</span>
              <ArrowRight size={18} />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
