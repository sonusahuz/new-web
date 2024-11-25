import React from 'react';

const CareerAreaOne = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("./assets/img/about-background.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
        }}
      >
        <div className="container d-flex align-items-center justify-content-start">
          <h1 className="text-white" style={{ fontSize: '60px' }}>
            CAREER{' '}
          </h1>
        </div>
      </div>
      <div className="about-area pt-5">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0">
                <h2 className="title fs-1">
                  Join Our Team at NYAS Consultants
                </h2>
                <p className="content mb-4 text-black">
                  At NYAS, we believe that our people are our greatest asset.
                  We're dedicated to creating a workplace that fosters
                  innovation, collaboration, and personal growth. If you're
                  passionate about making a difference and want to be part of a
                  dynamic team, explore our current opportunities!
                </p>
                <div>
                  <p className="text-black">
                    <i className="bi bi-check2-all text-success fs-5"></i>
                    <span style={{ paddingLeft: '10px' }} className="fw-bold">
                      Talent:
                    </span>{' '}
                    Industry experts blending knowledge and innovation.
                  </p>
                  <p className="text-black">
                    <i className="bi bi-check2-all text-success fs-5"></i>
                    <span style={{ paddingLeft: '10px' }} className="fw-bold">
                      Tailored:{' '}
                    </span>
                    Customized services for your unique business needs.
                  </p>
                  <p className="text-black">
                    <i className="bi bi-check2-all text-success fs-5"></i>
                    <span style={{ paddingLeft: '10px' }} className="fw-bold">
                      {' '}
                      Trust:{' '}
                    </span>
                    Committed to quality and exceeding your expectations.
                  </p>
                  <p className="text-black">
                    <i className="bi bi-check2-all text-success fs-5"></i>
                    <span style={{ paddingLeft: '10px' }} className="fw-bold">
                      {' '}
                      Services:{' '}
                    </span>
                    Leveraging data and technology for optimal operations.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner">
                <img
                  className="main-img about-image"
                  src="assets/img/career-image.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerAreaOne;
