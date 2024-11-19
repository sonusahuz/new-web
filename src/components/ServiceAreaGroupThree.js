import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceAreaGroupThree = () => {
  return (
    <>
      {/* service area start */}
      <div className="service-area bg-relative pd-top-120">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title text-center">
                {/* <h6 className="color-base bg-none mb-3">Our Services</h6> */}
                <h2 className="title">
                  We Provide the best Technology Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-4">
                  <img src="assets/img/icon/18.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Digital App Development Services</h5>
                  <p className="content mb-3">
                  Our Digital App Development Services deliver scalable mobile, enterprise, SaaS, and IoT solutions, enhanced by expert strategy and consulting to align seamlessly with your unique business objectives.
                  </p>
                  {/* <Link className="read-more-text" to="/service-details">
                    Read More <FaArrowRight />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/16.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Cross Platform Apps Development
                  </h5>
                  <p className="content mb-3">
                  Cross-platform mobile development enables businesses
to create apps for Android and iOS efficiently, sharing code to reduce costs and time, while
reaching a broader audience effectively.

                  </p>
                  {/* <Link className="read-more-text" to="/service-details">
                    Read More <FaArrowRight />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/17.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Software Development</h5>
                  <p className="content mb-3">
                  We provide custom software solutions, including website
development, MVP testing, UI/UX design, maintenance, and blockchain expertise, ensuring
secure, engaging, and up-to-date digital experiences for businesses

                  </p>
                  {/* <Link className="read-more-text" to="/service-details">
                    Read More <FaArrowRight />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/20.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Operations Consultancy Services</h5>
                  <p className="content mb-3">
                  Nyas Consultants optimize business operations with
process improvement, technology implementation, virtual assistant support, continuous
monitoring, and business development strategies for enhanced efficiency, growth, and brand
recognition.

                  </p>
                  {/* <Link className="read-more-text" to="/service-details">
                    Read More <FaArrowRight />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-4">
                  <img src="assets/img/icon/18.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Digital Marketing
                  </h5>
                  <p className="content mb-3">
                  Nyas Consultants offers tailored digital marketing services, including SEO,
Google Ads, and Meta campaigns, to enhance online visibility, drive traffic, generate leads, and
boost business growth.

                  </p>
                  {/* <Link className="read-more-text" to="/service-details">
                    Read More <FaArrowRight />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/16.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Legal Service</h5>
                  <p className="content mb-3">
                  - Nyas provides expert paralegal support, assisting attorneys, law firms, and
businesses with legal requirements, ensuring compliance, and delivering efficient, thorough
preparation for all legal matters.
                  </p>
                  {/* <Link className="read-more-text" to="/service-details">
                    Read More <FaArrowRight />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceAreaGroupThree;
