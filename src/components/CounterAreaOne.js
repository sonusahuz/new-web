import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

const CounterAreaOne = () => {
  return (
    <>
      {/* counter area start */}
      <div
        className="bg-cover"
        style={{
          backgroundImage: 'url("./assets/img/bg/5.png")',
          paddingTop: '30px',
        }}
      >
        <div className="container">
          <div className="d-flex flex-wrap mx-auto gap-5 gap-sm-0">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="single-counter-inner text-center text-lg-start mx-auto d-flex flex-column flex-lg-row align-items-center gap-lg-4 gap-1">
                <div className="thumb">
                  <img
                    src="assets/img/briefing2.png"
                    alt="img"
                    style={{ width: '80px' }}
                  />
                </div>
                <div>
                  <h2 className="text-white mb-2">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter fs-1 fw-bold">
                            <CountUp
                              duration={1}
                              delay={0}
                              start={0}
                              end={10}
                            />
                            K+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-white fs-bold">Projects Completed</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1500"
            >
              <div className="single-counter-inner text-center text-lg-start mx-auto d-flex flex-column flex-lg-row align-items-center gap-lg-4 gap-1">
                <div className="thumb">
                  <img
                    src="assets/img/approve.png"
                    alt="img"
                    style={{ width: '80px' }}
                  />
                </div>
                <div>
                  <h2 className="text-white mb-2">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter fs-1 fw-bold">
                            <CountUp
                              duration={1}
                              delay={0}
                              start={0}
                              end={90}
                            />{' '}
                            %
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-white fs-bold">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="single-counter-inner text-center text-lg-start mx-auto d-flex flex-column flex-lg-row align-items-center gap-lg-4 gap-1">
                <div className="thumb">
                  <img
                    src="assets/img/rocket2.png"
                    alt="img"
                    style={{ width: '80px' }}
                  />
                </div>
                <div>
                  <h2 className="text-white mb-2">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter fs-1 fw-bold">
                            <CountUp
                              duration={3}
                              delay={0}
                              start={0}
                              end={10}
                            />{' '}
                            +
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-white fs-bold">Years of Experience</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 "
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1500"
            >
              <div className="single-counter-inner text-center text-lg-start mx-auto d-flex flex-column flex-lg-row align-items-center gap-lg-4 gap-1">
                <div className="thumb">
                  <img
                    src="assets/img/rating.png"
                    alt="img"
                    style={{ width: '80px' }}
                  />
                </div>
                <div>
                  <h2 className="text-white mb-2">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter fs-1 fw-bold">
                            <CountUp
                              duration={3}
                              delay={0}
                              start={0}
                              end={100}
                            />{' '}
                            +
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-white fs-bold">Talented Members </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter area end */}
    </>
  );
};

export default CounterAreaOne;
