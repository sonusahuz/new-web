import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CaseStudyAreaOne = () => {
  return (
    <>
      {/*================== case-study area start ==================*/}
      <div
        className="case-study-area bg-relative py-5"
        style={{
          backgroundImage: 'url("./assets/img/background-website1.jpg")',
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Why <span>Choose </span> Us?
            </h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about- "
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  <img
                    className="rounded"
                    src="assets/img/why-choose-background1.png"
                    alt="img"
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
              <div
                className="col-lg-6 text-black"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <div className="pt-3">
                  <li className="mb-3">
                    Tailored Solutions for Every Business We understand that
                    every business is unique. Our approach is personalized, with
                    solutions crafted to meet your specific operational needs
                    and growth objectives.
                  </li>
                  <li className="mb-3">
                    Experienced Professionals Our team of operations consultants
                    and virtual assistants brings extensive experience across
                    various industries, ensuring top-quality service and
                    effective problem-solving.
                  </li>{' '}
                  <li className="mb-3">
                    Focus on Efficiency and Cost-Savings Our strategies focus on
                    eliminating waste, improving productivity, and reducing
                    costs, helping your business achieve more with less.
                  </li>{' '}
                  <li className="mb-3">
                    Data-Driven and Results-Oriented With a strong focus on
                    performance metrics and data-driven decision-making, we
                    provide insights that align with your long-term goals,
                    allowing for sustained improvements.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== case-study area end ==================*/}
    </>
  );
};

export default CaseStudyAreaOne;
