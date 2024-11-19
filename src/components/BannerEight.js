import React, { useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

const BannerEight = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== Banner Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 bg-cover mt-0"
        style={{ backgroundImage: 'url("./assets/img/technology/technology.jpeg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pb-xl-5 align-self-center">
              <div className="banner-inner pe-xl-4 pb-5">
                <h6
                  className="bg-none text-white wow animated fadeInLeft mb-4"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  Technology 
                </h6>
                <h2
                  className="title text-white wow animated fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  Build fast, user-friendly platforms innovatively
                </h2>
                <p
                  className="content text-white pe-xl-4 wow animated fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  Elevate web and app development by creating dynamic, responsive platforms that harness modern frameworks, ensuring fast performance, intuitive user experiences, and seamless functionality across devices.

                </p>
                <Link
                  className="btn btn-base  border-radius-0 wow animated fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                  to="/contact"
                >
                  Free Consulting <FaArrowAltCircleRight className="mt-4" />
                </Link>
                <div
                  className="d-inline-block align-self-center wow animated fadeInLeft mt-4 mt-md-0"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.7s"
                >
                  {/* <Link
                    onClick={() => setOpen(true)}
                    className="video-play-btn-hover"
                    to="#"
                  >
                    <img src="assets/img/video.svg" alt="img" />{' '}
                    <h6 className="d-inline-block text-white">Watch Video</h6>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== Banner End ==================*/}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="XM6kTQPzzpQ"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default BannerEight;
