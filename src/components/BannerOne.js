import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BannerOne = () => {
  return (
    <>
      {/* ================== BannerOne Start ==================*/} 
      <div
        className="banner-area bg-relative banner-area-1 pd-bottom-100 bg-cover"
        style={{ backgroundImage: 'url("./assets/img/banner/0.png")' }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 col-md-12 text-left text-lg-start">
              <div className="banner-inner pe-xl-5">
                <h6
                  className="subtitle fw-bold"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  Your all-in-One Solution for every Business Need.
                </h6>
                <h2
                  className="title"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  Welcome to<span> NYAS!</span>
                </h2>
                <p
                  className="content pe-xl-5"
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500"
                >
                  We offer customized solutions to business challenges,
                  guaranteeing smooth execution and driving success in every
                  aspect of your operations.
                </p>
                <Link
                  className="btn btn-border-base"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  to="/about"
                >
                  Consult Now <FaPlus />
                </Link>
              </div>
            </div>
            {/* Right Content */}
            <div className="col-lg-6 col-md-12 text-center">
              <img
                src="assets/img/banner.jpeg"
                alt="img"
                width={400}
                className="img-fluid rounded pt-5"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ================== BannerOne End ==================*/} 
    </>
  );
};

export default BannerOne;