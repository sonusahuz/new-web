import React from 'react';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterOne = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className="footer-area bg-black bg-cover">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img
                    src="assets/img/logo4.png"
                    alt="img"
                    style={{ width: '100px' }}
                  />
                </div>
                <div className="details">
                  <p>
                    transforming Business challenges into growth
                    opportunities,we leverage our 3T Pillar -
                    Talent,Tailored,trust- to deliver effective and customized
                    solutionsfor your success.
                  </p>
                  <p className="mt-3">
                    <FaPhoneAlt /> (+888) 123 456 765
                  </p>
                  <p className="mt-2">
                    <FaEnvelope /> (+888) 123 456 765
                  </p>
                  <ul className="social-media">
                    <li>
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul>
                  <li>
                    <Link to="/mobile-app">
                      <FaArrowRight /> Digital App Development Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/cross-platfrom-development">
                      <FaArrowRight /> Cross Platform Apps Development
                    </Link>
                  </li>

                  <li>
                    <Link to="/digital-product-development">
                      <FaArrowRight />
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/project-management">
                      <FaArrowRight /> Operations Consultancy Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/meta-campaign">
                      <FaArrowRight /> Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal-services">
                      <FaArrowRight /> Legal Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Quick links</h4>
                <ul>
                  <li>
                    <Link to="/">
                      <FaArrowRight /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <FaArrowRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/technologies">
                      <FaArrowRight /> Technologies
                    </Link>
                  </li>
                  <li>
                    <Link to="/career">
                      <FaArrowRight /> Career
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <FaArrowRight /> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Contact us</h4>
                <div className="details">
                  <p className="mt-3">
                    <FaPhoneAlt className="text-primary" /> +353 85 161 3637
                  </p>

                  <p className="mt-2">
                    <FaEnvelope className="text-primary" />{' '}
                    info@nyasconsultants.com
                  </p>

                  <p className="mt-2">
                    <FaHome className="text-primary" /> Mountjoy, Dublin1,{' '}
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D01 XY58, IRELAND
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <p>© Nyas Consultants 2024 | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
