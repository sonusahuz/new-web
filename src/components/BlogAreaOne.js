import React from 'react';
import { FaCalendarAlt, FaRegComments, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BlogAreaOne = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {/*===================== Blog Area One start =====================*/}
      <div className="blog-area pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">New Blog</h6>
            <h2 className="title">
              Best new to get our <span>Blog</span>
            </h2>
          </div>
          <Slider {...settings}>
            <div className="single-blog-list">
              <div className="thumb">
                <img src="https://via.placeholder.com/300x200" alt="blog 1" />
              </div>
              <div className="details">
                <p className="date mb-3">
                  <FaCalendarAlt /> October 19, 2023
                </p>
                <h5>
                  <Link to="/blog-details">
                    Transforming businesses, one pixel at a time
                  </Link>
                </h5>
                <div className="meta">
                  <div className="row">
                    <div className="col-6">
                      <p>
                        <FaRegUser /> Sam Curren
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p>
                        <FaRegComments /> 10 Comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-blog-list">
              <div className="thumb">
                <img src="https://via.placeholder.com/300x200" alt="blog 2" />
              </div>
              <div className="details">
                <p className="date mb-3">
                  <FaCalendarAlt /> June 19, 2023
                </p>
                <h5>
                  <Link to="/blog-details">
                    The Importance of a Strong Digital Strategy
                  </Link>
                </h5>
                <div className="meta">
                  <div className="row">
                    <div className="col-6">
                      <p>
                        <FaRegUser /> Sam Curren
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p>
                        <FaRegComments /> 8 Comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-blog-list">
              <div className="thumb">
                <img src="https://via.placeholder.com/300x200" alt="blog 3" />
              </div>
              <div className="details">
                <p className="date mb-3">
                  <FaCalendarAlt /> October 19, 2023
                </p>
                <h5>
                  <Link to="/blog-details">
                    Creating Engaging Content: A Guide for Digital
                  </Link>
                </h5>
                <div className="meta">
                  <div className="row">
                    <div className="col-6">
                      <p>
                        <FaRegUser /> Sam Curren
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p>
                        <FaRegComments /> 5 Comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* ===================== BlogAreaOne End =====================*/}
    </>
  );
};

export default BlogAreaOne;
