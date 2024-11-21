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
        {/* <div className="footer-subscribe">
          <div className="container">
            <div
              className="footer-subscribe-inner bg-cover"
              style={{ backgroundImage: 'url("./assets/img/logo4.png")' }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="mb-lg-0 mb-3">Subscribe To Our Newsletter</h2>
                </div>
                <div className="col-lg-6 align-self-center text-lg-end">
                  <input type="text" placeholder="Your e-mail address" />
                  <Link className="btn btn-black border-radius-0" to="#">
                    Submit now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src="assets/img/logo4.png" alt="img" />
                </div>
                <div className="details">
                  <p>
                    transforming Business challenges into growth opportunities,we leverage our 3T Pillar - Talent,Tailored,trust- to deliver effective and customized solutionsfor your success.
                  </p>
                  {/* <p className="mt-3">
                    <FaPhoneAlt /> (+888) 123 456 765
                  </p>
                  <p className="mt-2">
                    <FaEnvelope /> (+888) 123 456 765
                  </p> */}
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
                    <Link to="/service">
                      <FaArrowRight /> Digital App Development Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Cross Platform Apps Development 
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/service">
                      <FaArrowRight />Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Operations Consultancy Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
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
                {/* <ul>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/widget/1.png" alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>january 11, 2023</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link to="/blog-details">
                            Social Media For Promote Business.
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/widget/2.png" alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>january 11, 2023</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link to="/blog-details">
                            Marketing For Base market watch
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul> */}
                <div className="details">

                <p className="mt-3">
                    <FaPhoneAlt />  +353 85 161 3637
                  </p>

                  <p className="mt-2">
                    <FaEnvelope />  info@nyasconsultants.com
                  </p>

                  <p className="mt-2">
                    <FaHome />  Mountjoy, Dublin1, <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D01 XY58, IRELAND
                  </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            {/* <div className="row"> */}
              <div className="text-center">
                <p>© Nyas Consultants 2024 | All Rights Reserved</p>
              </div>
              
            {/* </div> */}
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
