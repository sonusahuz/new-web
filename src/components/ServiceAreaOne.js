import React from 'react';
import { GoLaw } from 'react-icons/go';

const ServiceAreaOne = () => {
  return (
    <>
      {/* <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"></link> */}
      {/*=================== service area start ===================*/}

      <div
        className="service-area bg-relative pd-top-60 pd-bottom-60 pd-top-120 pd-bottom-120"
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">COPREHENSIVE DIGITAL SOLUTIONS</h6>
            <h2 className="title">
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          {/* <div className='row'>
            {serviceList.slice(0, 3).map((data, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img src={data.img} alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to='/service-details'>{data.title}</Link>
                    </h5>
                    <p>{data.des}</p>
                    <Link className='btn btn-border-base' to='/service-details'>
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <section id="features" className="features section">
            <div className="container">
              <div className="row gy-4">
                <div
                  className="col-lg-3 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="features-item" style={{ height: 80 }}>
                    <i className="bi bi-laptop" style={{ color: '#ffbb2c' }} />
                    <h3>
                      <a
                        href="/custom-website-design-development"
                        className="stretched-link"
                      >
                        Custom Website Design &amp; Development
                      </a>
                    </h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div
                  className="col-lg-3 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="features-item" style={{ height: 80 }}>
                    <i className="bi bi-box" style={{ color: '#5578ff' }} />
                    <h3>
                      <a
                        href="/mvp-development-testing"
                        className="stretched-link"
                      >
                        MVP Development &amp; Testing
                      </a>
                    </h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div
                  className="col-lg-3 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="features-item" style={{ height: 80 }}>
                    <i className="bi bi-palette" style={{ color: '#e80368' }} />
                    <h3>
                      <a
                        href="/ui-ux-design-prototyping"
                        className="stretched-link"
                      >
                        UI/UX Design &amp; Prototyping
                      </a>
                    </h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div
                  className="col-lg-3 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="features-item" style={{ height: 80 }}>
                    <i className="bi bi-tools" style={{ color: '#e361ff' }} />
                    <h3>
                      <a
                        href="/digital-product-development"
                        className="stretched-link"
                      >
                        Ongoing Software &amp; Website Maintenance
                      </a>
                    </h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div
                  className="col-lg-3 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div className="features-item" style={{ height: 80 }}>
                    <i
                      className="bi bi-diagram-3"
                      style={{ color: '#47aeff' }}
                    />
                    <h3>
                      <a
                        href="/blockchain-solutions"
                        className="stretched-link"
                      >
                        Blockchain Solutions &amp; Decentralized Applications
                      </a>
                    </h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div
                  className="col-lg-3 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <div className="features-item" style={{ height: 80 }}>
                    <i className="bi bi-phone" style={{ color: '#ffa76e' }} />
                    <h3>
                      <a href="/mobile-app" className="stretched-link">
                        Digital App Development Services
                      </a>
                    </h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div
                  className="col-lg-3 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={700}
                >
                  <div className="features-item" style={{ height: 80 }}>
                    <GoLaw
                      className="bi bi-law"
                      style={{ color: '#11dbcf' }}
                      size={35}
                    />
                    <h3>
                      <a href="/legal-services" className="stretched-link p-2">
                        Legal Services
                      </a>
                    </h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div
                  className="col-lg-3 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={800}
                >
                  <div className="features-item" style={{ height: 80 }}>
                    <i
                      className="bi bi-graph-up"
                      style={{ color: '#4233ff' }}
                    />
                    <h3>
                      <a href="/project-management" className="stretched-link">
                        Operations Consultancy Services
                      </a>
                    </h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div
                  className="col-lg-3 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={900}
                >
                  <div className="features-item" style={{ height: 80 }}>
                    <i
                      className="bi bi-person-circle"
                      style={{ color: '#b2904f' }}
                    />
                    <h3>
                      <a href="/virtual-assistant" className="stretched-link">
                        Virtual Assistant &amp; Administrative Support
                      </a>
                    </h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div
                  className="col-lg-3 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={1000}
                >
                  <div className="features-item" style={{ height: 80 }}>
                    <i
                      className="bi bi-diagram-2"
                      style={{ color: '#3aaf4e' }}
                    />
                    <h3>
                      <a
                        href="/project-management-1"
                        className="stretched-link"
                      >
                        Project Management
                      </a>
                    </h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div
                  className="col-lg-3 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={1100}
                >
                  <div className="features-item" style={{ height: 80 }}>
                    <i
                      className="bi bi-bullseye"
                      style={{ color: '#ff5828' }}
                    />
                    <h3>
                      <a href="/meta-campaign" className="stretched-link">
                        Digital Marketing
                      </a>
                    </h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div
                  className="col-lg-3 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={1200}
                >
                  <div className="features-item" style={{ height: 80 }}>
                    <i
                      className="bi bi-arrow-left-right"
                      style={{ color: '#29cc61' }}
                    />
                    <h3>
                      <a
                        href="/cross-platfrom-development"
                        className="stretched-link"
                      >
                        Cross Platform
                      </a>
                    </h3>
                  </div>
                </div>
                {/* End Feature Item */}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaOne;
