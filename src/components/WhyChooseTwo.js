import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WhyChooseTwo = () => {
  return (
    <>
      {/* start why choose us */}
      <div className="why-choose-us-area why-choose-us-area_2 pd-top-120">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="section-title mb-0 text-center">
                <h6 className="sub-title">Career</h6>
                <h2 className="title">Why Work with Us?
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className=" bg-relative border-radius-5 mb-4 p-4 pb-0 text-center">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/home-11/why-1.png"
                    alt="img"
                  />
                </div>
                <div className="details p-3">
                  <h5 className="mb-2">Innovative Environment</h5>
                  <p className="mb-0 ">
                  Work alongside talented professionals who are committed to challenging the status quo. We encourage creative thinking and the pursuit of innovative solutions that drive success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className=" bg-relative border-radius-5 mb-4 p-4 pb-0 text-center">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/home-11/why-2.png"
                    alt="img"
                  />
                </div>
                <div className="details p-3">
                  <h5 className="mb-2">Growth Opportunities</h5>
                  <p className="mb-0">
                  We invest in our employees’ development through ongoing training, mentorship programs, and opportunities for advancement. At NYAS, your growth is our priority.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className=" bg-relative border-radius-5 mb-4 p-4 pb-0 text-center">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/home-11/why-3.png"
                    alt="img"
                  />
                </div>
                <div className="details p-3">
                  <h5 className="mb-2">Collaborative Culture</h5>
                  <p className="mb-0">
                  Join a supportive team that values collaboration and teamwork. We believe that the best ideas come from working together and sharing diverse perspectives.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className=" bg-relative border-radius-5 mb-4 p-4 pb-0 text-center">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/home-11/why-3.png"
                    alt="img"
                  />
                </div>
                <div className="details p-3">
                  <h5 className="mb-2">Flexible Work Arrangements</h5>
                  <p className="mb-0">
                  We understand the importance of work-life balance. Our flexible work arrangements allow you to tailor your work environment to suit your lifestyle. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/img/career/career.jpeg" alt="" />
            </div>
            <div className="col-lg-6">
              <h2>
                Apply Now
              </h2>
              <p className="pt-4">
              Ready to take the next step in your career?
Click the button below or mail us to get started
with Nyas Career!

              </p>
              {/* <p className="pt-2">
                Psum dolor sit amet, consectetur adipiscing elit. Pellentesque
                viverra purus imperdiet a. Ut nisl est at ultricies neque ornare
                tellus tellus enim.
              </p> */}
              <Link
                className="btn btn-border-base wow  fadeInLeft animated mt-4"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
                to="/about"
                style={{
                  visibility: 'visible',
                  animationDuration: '1.5s',
                  animationDelay: '0.6s',
                  animationName: 'fadeInLeft',
                }}
              >
                Apply Now <FaPlus />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end why choose us */}
    </>
  );
};

export default WhyChooseTwo;
