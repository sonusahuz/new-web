import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

  const menuActive = () => {
    setActive(!active);
  };

  const searchActive = () => {
    setSearchShow(!searchShow);
  };

  // Control sidebar navigation
  let items = document.querySelectorAll('.menu-item-has-children > a');
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector('.sub-menu')
          .classList.toggle('active');
        this.classList.toggle('open');
      };
    }
  }

  return (
    <>
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? 'body-overlay active' : 'body-overlay'}
        id="body-overlay"
      ></div>
      {/* navbar start */}
      <nav className="navbar navbar-area navbar-area_1 navbar-expand-lg">
        <div className="container nav-container navbar-bg">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="logo">
              <Link to="/">
                <img
                  src="assets/img/logo4.png"
                  alt="img"
                  style={{ width: '100px' }}
                />
              </Link>
            </div>
            <div className="responsive-mobile-menu">
              <button
                onClick={menuActive}
                className={
                  active
                    ? 'menu toggle-btn d-block d-lg-none open'
                    : 'menu toggle-btn d-block d-lg-none'
                }
                data-target="#itech_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
          </div>
          <div
            className={
              active
                ? 'collapse navbar-collapse sopen'
                : 'collapse navbar-collapse'
            }
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-end">
              <li className="menu-item-has-children">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/about">About Us</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/service">Our Services</Link>
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
                </ul>
              </li>
              <li className="menu-item-has-children mega-menu">
                <Link to="/technologies">Technologies</Link>
              </li>

              <li className="menu-item-has-children">
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={`d-flex ${active ? 'd-block' : 'd-none d-lg-flex'}`}>
            <Link to={'/contact'}>
              <button className="d-flex align-items-center gap-2 border-0 bg-primary text-white rounded-pill px-3 py-2">
                <span>Get Started</span>
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavBar;
