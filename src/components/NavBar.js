import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css';
import Drawer from './Drawer';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar bg-primary" style={{ zIndex: 1 }}>
        <div className="container d-flex align-items-center ">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img
                src="assets/img/logo4.png"
                alt="Logo"
                style={{ width: '100px' }}
              />
            </Link>
          </div>

          {/* Call to Action */}
          <div className="cta d-flex gap-3 align-items-center">
            {/* Menu */}
            <ul className="menu mt-3">
              <li className="menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item menu-item-has-children">
                <Link to="/about">About Us</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/history">Our History</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <Link to="/services">Our Services</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/mobile-app">
                      Digital App Development Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/cross-platfrom-development">
                      Cross Platform Apps Development
                    </Link>
                  </li>

                  <li>
                    <Link to="/digital-product-development">
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/project-management">
                      Operations Consultancy Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/meta-campaign">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="/legal-services">Legal Services</Link>
                  </li>

                  {/* <li>
                    <Link to="/pricing-2">Pricing 02</Link>
                  </li> */}
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/technologies">Technologies</Link>
                {/* <div className="sub-menu">
                  <div className="row">
                    <div className=" mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link to="/">IT / Softwer Agency</Link>
                        </li>
                        <li>
                          <Link to="/index-2">SaaS App Landing</Link>
                        </li>
                        <li>
                          <Link to="/index-3">Payments Solution</Link>
                        </li>
                        <li>
                          <Link to="/index-4"> Software Company</Link>
                        </li>
                        <li>
                          <Link to="/index-5">Artificial Intelligence</Link>
                        </li>
                        <li>
                          <Link to="/index-6">NFT Service</Link>
                        </li>
                        <li>
                          <Link to="/index-7">Cyber Security</Link>
                        </li>
                        <li>
                          <Link to="/index-8">Hardware Service</Link>
                        </li>
                        <li>
                          <Link to="/index-9">ICO Landing</Link>
                        </li>
                        <li>
                          <Link to="/index-10">Personal Portfolio</Link>
                        </li>
                        <li>
                          <Link to="/index-11">SEO Service</Link>
                        </li>
                      </ul>
                    </div>
                    <div className=" mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link to="/service">Service 01</Link>
                        </li>
                        <li>
                          <Link to="/service-2">Service 02</Link>
                        </li>
                        <li>
                          <Link to="/service-3">Service 03</Link>
                        </li>
                        <li>
                          <Link to="/service-4">Service 04</Link>
                        </li>
                        <li>
                          <Link to="/service-5">Service 05</Link>
                        </li>
                        <li>
                          <Link to="/service-details">Service Single</Link>
                        </li>
                      </ul>
                    </div>
                    <div className=" mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link to="/project">Project 01</Link>
                        </li>
                        <li>
                          <Link to="/project-2">Project 02</Link>
                        </li>
                        <li>
                          <Link to="/project-3">Project 03</Link>
                        </li>
                        <li>
                          <Link to="/project-details">Case Study Details</Link>
                        </li>
                        <li>
                          <Link to="/pricing">Pricing 01</Link>
                        </li>
                        <li>
                          <Link to="/pricing-2">Pricing 02</Link>
                        </li>
                      </ul>
                    </div>
                    <div className=" mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/team">Team 01</Link>
                        </li>
                        <li>
                          <Link to="/team-2">Team 02</Link>
                        </li>
                        <li>
                          <Link to="/team-3">Team 03</Link>
                        </li>
                        <li>
                          <Link to="/team-details">Team Details</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </li>
              <li className="menu-item">
                <Link to="/career">Career</Link>
                {/* <ul className="sub-menu">
                  <li>
                    <Link to="/blog">Blog 01</Link>
                  </li>
                  <li>
                    <Link to="/blog-2">Blog 02</Link>
                  </li>
                  <li>
                    <Link to="/blog-3">Blog 03</Link>
                  </li>
                  <li>
                    <Link to="/blog-4">Blog 04</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                </ul> */}
              </li>
              <li className="menu-item">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <i
              onClick={() => setOpen(true)}
              className="bi bi-search text-white mobile-nav-toggle fs-4"
            ></i>

            <i
              onClick={() => setOpen(true)}
              className="bi bi-list text-white mobile-nav-toggle fs-4"
            ></i>
            <button className="cta-button">
              Get Started
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <Drawer
          isOpen={open}
          setIsOpen={setOpen}
          content={
            <>
              <ul className="menu2 text-black">
                <li className="menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link to="/about">About Us</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/team">Our Team</Link>
                    </li>
                    <li>
                      <Link to="/history">Our History</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link to="/services">Services</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/mobile-app">Mobile App Development</Link>
                    </li>
                    <li>
                      <Link to="/web-development">Web Development</Link>
                    </li>
                    <li>
                      <Link to="/digital-marketing">Digital Marketing</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/technologies">Technologies</Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </>
          }
        />
      )}
    </>
  );
};

export default NavBar;
