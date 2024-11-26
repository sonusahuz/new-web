import React from 'react';
import { FaCheckCircle, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutAreaTwo = () => {
  return (
    <>
      {/* =============== About Area Two End ===============*/}
      <div
        style={{
          backgroundImage: 'url("./assets/img/about-background.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
        }}
      >
        <div className="container py-5 d-flex align-items-center justify-content-start">
          <h1
            className="text-white"
            data-aos="fade-up"
            data-aos-delay={100}
            style={{ fontSize: '60px', paddingTop: '45px' }}
          >
            About Us{' '}
          </h1>
        </div>
      </div>
      <div className="about-area pt-lg-5">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner">
                <img
                  className="main-img about-image animated-image"
                  src="assets/img/about-image.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0">
                <h2 className="title fs-3">
                  Nyas Consultants: Transforming Challenges into Opportunities
                  for Sustainable Growth.
                </h2>
                <p className="content mb-4 text-black">
                  Nyas Consultants is your trusted partner in transforming
                  business challenges into growth opportunities through our 3T
                  Pillar—Talent, Tailored, Trust. We deliver innovative,
                  customized solutions that drive tangible results and long-term
                  success. Backed by a team of seasoned professionals with deep
                  expertise across industries, we empower businesses to achieve
                  more with less by creating personalized strategies that
                  eliminate inefficiencies, enhance productivity, and reduce
                  costs— ensuring maximum value at every step. With a sharp
                  focus on data-driven insights and measurable outcomes, we
                  deliver tailored IT solutions, operations consulting, and
                  virtual assistance services designed to align seamlessly with
                  your unique goals. At Nyas Consultants, every solution is
                  meticulously crafted to optimize performance, unlock
                  potential, and fuel sustainable growth. Our approach combines
                  cutting-edge technologies with proven methodologies to ensure
                  seamless execution from consultation to launch. We are
                  committed to providing cost-effective, high-quality solutions
                  that prioritize efficiency, trust, and exceptional results.
                  Choose Nyas Consultants for more than just solutions—choose us
                  to unlock new possibilities, elevate your business, and turn
                  every challenge into an opportunity for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== About Area Two End ===============*/}
    </>
  );
};

export default AboutAreaTwo;
