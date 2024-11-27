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
import { a } from 'react-router-dom';

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
                      <a t="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a t="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a t="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a t="#">
                        <FaYoutube />
                      </a>
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
                    <a href="/mobile-app">
                      <FaArrowRight /> Digital App Development Services
                    </a>
                  </li>
                  <li>
                    <a href="/cross-platfrom-development">
                      <FaArrowRight /> Cross Platform Apps Development
                    </a>
                  </li>

                  <li>
                    <a href="/digital-product-development">
                      <FaArrowRight />
                      Software Development
                    </a>
                  </li>
                  <li>
                    <a href="/project-management">
                      <FaArrowRight /> Operations Consultancy Services
                    </a>
                  </li>
                  <li>
                    <a href="/meta-campaign">
                      <FaArrowRight /> Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="/legal-services">
                      <FaArrowRight /> Legal Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Quick links</h4>
                <ul>
                  <li>
                    <a href="/">
                      <FaArrowRight /> Home
                    </a>
                  </li>
                  <li>
                    <a href="/about">
                      <FaArrowRight /> About Us
                    </a>
                  </li>
                  <li>
                    <a href="/service">
                      <FaArrowRight /> Our Services
                    </a>
                  </li>
                  <li>
                    <a href="/technologies">
                      <FaArrowRight /> Technologies
                    </a>
                  </li>
                  <li>
                    <a href="/career">
                      <FaArrowRight /> Career
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <FaArrowRight /> Contact Us
                    </a>
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
                    <FaEnvelope className="text-primary" /> info@nyas
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
