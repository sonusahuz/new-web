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
            <Nav.Link href="#home" className="fw-semibold">
              Home
            </Nav.Link>

            <NavDropdown
              title="About Us"
              id="about-dropdown"
              className="fw-semibold"
            >
              <NavDropdown.Item href="/">Our Company</NavDropdown.Item>
              <NavDropdown.Item href="/">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/">Mission & Vision</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Testimonials</NavDropdown.Item>
            </NavDropdown>

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
              <NavDropdown.Divider />
              <NavDropdown.Item href="/meta-campaign">
                Digital Marketing
              </NavDropdown.Item>
              <NavDropdown.Item href="/legal-services">
                Legal Services
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Technologies"
              id="tech-dropdown"
              className="fw-semibold"
            >
              <NavDropdown.Item href="#frontend">Frontend</NavDropdown.Item>
              <NavDropdown.Item href="#backend">Backend</NavDropdown.Item>
              <NavDropdown.Item href="#mobile">Mobile</NavDropdown.Item>
              <NavDropdown.Item href="#database">Database</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#devops">DevOps</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Career"
              id="career-dropdown"
              className="fw-semibold"
            >
              <NavDropdown.Item href="#openings">
                Current Openings
              </NavDropdown.Item>
              <NavDropdown.Item href="#internships">
                Internships
              </NavDropdown.Item>
              <NavDropdown.Item href="#culture">
                Company Culture
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#apply">Apply Now</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact" className="fw-semibold">
              Contact
            </Nav.Link>

            <button className="ms-3 d-flex align-items-center gap-2 border-1 bg-white rounded-pill px-3 py-2">
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
