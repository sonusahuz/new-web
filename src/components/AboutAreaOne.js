import React from 'react';
import { Link } from 'react-router-dom';

const AboutAreaOne = () => {
  return (
    <>
      <div
        className="about-area py-5 d-flex align-items-center"
        style={{
          backgroundImage: `url('./assets/img/background-website1.jpg')`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div
                className="about-thumb-inner pe-xl-5 me-xl-5"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <img
                  className="rounded who-we-are"
                  src="assets/img/who-we-are.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 text-black"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title" style={{ margin: 0, padding: 0 }}>
                <h6
                  className="sub-title pt-3"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  About Us
                </h6>
                <h2
                  className="title mb-2"
                  style={{
                    fontWeight: 900,
                    fontSize: '38px',
                  }}
                >
                  Who We Are
                </h2>
                <p className="mt-0 mb-0 text-black">
                  Nyas Consultants is dedicated to helping businesses streamline
                  their operations and achieve sustainable growth. Our team is a
                  blend of seasoned consultants and virtual assistants with
                  expertise across various industries. We focus on providing
                  solutions that are not only efficient but also adaptable to
                  your evolving needs. From improving day-to-day operations to
                  supporting strategic initiatives, we empower you to focus on
                  what truly matters: growing your business.
                </p>
              </div>
              <div className="section-title" style={{ margin: 0, padding: 0 }}>
                <h2
                  className="title mb-2 mt-4"
                  style={{
                    fontWeight: 900,
                    fontSize: '38px',
                  }}
                >
                  Our Mission
                </h2>
                <p className="mt-0 mb-0 text-black">
                  To empower businesses through streamlined, data-driven
                  operations solutions that are supported by skilled virtual
                  assistants. We believe that every business deserves to operate
                  efficiently and effectively, no matter the size.
                </p>
              </div>
              <div className="mt-4">
                <Link to={'/about'}>
                  <button className="text-white rounded-pill py-2 px-3">
                    Read More <i className="bi bi-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End ================== */}
    </>
  );
};

export default AboutAreaOne;
