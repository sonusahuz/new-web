import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceAreaSeven = () => {
  return (
    <>
      {/*=================== service five start ===================*/}
      <div className="service-area ServiceAreaSeven bg-cover pd-top-120 pd-bottom-90 pd-top-110 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title text-center">
                <h6 className="color-base bg-none mb-3">Our Services</h6>
                <h2 className="title">
                  We Provide the best Technology Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="single-service-inner style-4 text-center">
                <div className="thumb mb-4">
                  <img src="assets/img/technology/2.png" alt="img" />
                </div>
                <div className="details">
                  {/* <Link className="btn btn-black" to="/service-details">
                    <FaAngleRight className="mt-0" />
                  </Link> */}
                  <h5 className="mb-3">React Js</h5>
                  <p className="content mb-0">
                  React.js enables the creation of dynamic, responsive interfaces using reusable components, simplifying development and providing a seamless user experience for modern, single-page, and interactive applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-service-inner style-4 text-center">
                <div className="thumb mb-4">
                  <img src="assets/img/technology/3.png" alt="img" />
                </div>
                <div className="details">
                  {/* <Link className="btn btn-black" to="/service-details">
                    <FaAngleRight className="mt-0" />
                  </Link> */}
                  <h5 className="mb-3">Node Js</h5>
                  <p className="content mb-0">
                  Node.js simplifies server-side development by leveraging JavaScript for backend functionality, allowing developers to build scalable, fast applications with real-time communication and efficient resource management
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-service-inner style-4 text-center">
                <div className="thumb mb-4">
                  <img src="assets/img/technology/1.png" alt="img" />
                </div>
                <div className="details">
                  {/* <Link className="btn btn-black" to="/service-details">
                    <FaAngleRight className="mt-0" />
                  </Link> */}
                  <h5 className="mb-3">App Development</h5>
                  <p className="content mb-0">
                    Develop visually stunning and high-performing apps across
                    iOS, Android, and web platforms efficiently with Flutter’s
                    robust toolkit, ensuring a consistent UI and streamlined
                    user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaSeven;
