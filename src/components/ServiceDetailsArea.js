import React from 'react';
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceDetailsArea = () => {
  return (
    <>
      {/* ===================== Service Details Area start ===================== */}
      <div className="service-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="td-sidebar service-sidebar">
                <div className="widget widget_catagory">
                  <h5 className="widget-title">
                    <FaArrowRight /> Mobile Development Solutions
                  </h5>
                  <ul className="catagory-items">
                    <li>
                      <Link to="/service-details"> User-Centric Design</Link>
                    </li>
                    <li>
                      <Link to="/service-details"> Seamless User Experience</Link>
                    </li>
                    <li>
                      <Link to="/service-details"> Cross-Platform Compatibility</Link>
                    </li>
                    <li>
                      <Link to="/service-details"> Agile Development Process</Link>
                    </li>
                    <li>
                      <Link to="/service-details">Robust Security Features</Link>
                    </li>
                    <li>
                      <Link to="/service-details">Continuous Performance Optimization</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_author text-center">
                  <div className="thumb">
                    <img src="assets/img/2.jpeg" alt="img" />
                  </div>
                 
                </div>
              
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog-details-page-content">
                <div className="single-blog-inner mb-0">
                  <div className="thumb">
                    <img src="assets/img/1.jpeg" alt="img" />
                  </div>
                  <div className="details">
                    <h4>
                    Transforming Businesses with Expert Mobile Development Solutions
                    </h4>
                    <p>
                    Mobile development focuses on creating applications specifically for mobile devices, ensuring a seamless user experience. With the rise of smartphones, businesses are increasingly investing in mobile solutions to engage customers effectively. Our expertise in mobile app development includes design, coding, testing, and deployment, driving digital transformation for your brand.
                    </p>
                    <p>
                    Our mobile development services create user-friendly applications tailored to your business needs. We leverage the latest technologies to build efficient, high-performance mobile solutions, enhancing customer engagement and ensuring a smooth user experience across various platforms for optimal business growth.
                    </p>
                    <h4>Mobile Development Solutions</h4>
                    <p>
                    Mobile development builds user-friendly apps, boosting customer engagement and streamlining operations through a structured process.
                    </p>
                    <div
                      className="accordion accordion-inner accordion-icon-left mt-3 mb-4"
                      id="accordionExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            What is mobile development?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          Mobile development involves creating applications specifically designed for mobile devices, focusing on user experience and functionality to engage customers effectively.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How does mobile app development benefit my business?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          By investing in mobile app development, businesses can enhance customer engagement, streamline operations, and drive digital transformation, ultimately leading to increased growth and success.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What steps are involved in the mobile app development process?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          The mobile app development process includes several key steps: initial consultation, strategy development, design and coding, thorough testing, and final deployment to ensure a high-quality user experience.
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>Unlocking Innovation</h4>
                    <p>
                    Our mobile app development services empower businesses to create user-centric applications that enhance customer engagement, streamline operations, and drive digital transformation in an increasingly mobile-driven world.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="single-list-inner style-check style-check mb-3">
                          <li>
                            <FaCheckCircle /> User-Centric Design
                          </li>
                          <li>
                            <FaCheckCircle /> Seamless User Experience
                          </li>
                          <li>
                            <FaCheckCircle /> Cross-Platform Compatibility
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="single-list-inner style-check style-check mb-3">
                          <li>
                            <FaCheckCircle />Agile Development Process
                          </li>
                          <li>
                            <FaCheckCircle /> Robust Security Features
                          </li>
                          <li>
                            <FaCheckCircle />Continuous Performance Optimization
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Service Details Area End ===================== */}
    </>
  );
};

export default ServiceDetailsArea;
