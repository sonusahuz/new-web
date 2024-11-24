import React from 'react';

const AboutAreaOne = () => {
  return (
    <>
      <div
        className="about-area pd-top-120"
        style={{
          backgroundImage: `url('./assets/img/background-website1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-thumb-inner pe-xl-5 me-xl-5 "
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <img
                  className="rounded"
                  src="assets/img/who-we-are.jpg"
                  alt="img"
                  style={{ width: '100%', height: '400px' , objectFit: 'cover' }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mt-5 mt-lg-0">
                <h6 className="sub-title">About Us</h6>
                <h2 className="title">Who We Are</h2>
                <p className="content mb-4 mb-xl-5">
                  Nyas Consultants is dedicated to helping businesses streamline
                  their operations and achieve sustainable growth. Our team is a
                  blend of seasoned consultants and virtual assistants with
                  expertise across various industries. We focus on providing
                  solutions that are not only efficient but also adaptable to
                  your evolving needs. From improving day-to-day operations to
                  supporting strategic initiatives, we empower you to focus on
                  what truly matters: growing your business
                </p>
              </div>
              <div>
                <button className="text-white rounded-pill py-2 px-3">
                  Read More <i className="bi bi-arrow-right"></i>{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
