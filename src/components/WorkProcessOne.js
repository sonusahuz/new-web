import React from 'react';

const WorkProcessOne = () => {
  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className="work-process-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">Our Streamlined Process</h6>
            <h2 className="title">
              The Best <span> Steps in Our</span> IT Approach
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3 mx-auto">
                  <img
                    src="assets/img/work1.jpeg"
                    alt="img"
                    style={{ width: '100px' }}
                  />
                </div>
                <div className="details">
                  <h5 className="mb-3">Initial Consultation</h5>
                  <p className="content text-black">
                    We begin with a thorough understanding of your needs and
                    objectives, discussing your vision and requirements in
                    detail.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img
                    src="assets/img//work2.jpeg"
                    alt="img"
                    style={{ width: '100px' }}
                  />
                </div>
                <div className="details">
                  <h5 className="mb-3">Strategic Development</h5>
                  <p className="content text-black">
                    Our team crafts a customized strategy, outlining the
                    approach and technologies that will best meet your business
                    goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img
                    src="assets/img//work3.jpeg"
                    alt="img"
                    style={{ width: '100px' }}
                  />
                </div>
                <div className="details">
                  <h5 className="mb-3">Implementation and Development</h5>
                  <p className="content text-black">
                    We execute the plan, focusing on quality coding, design, and
                    development to bring your project to life.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img
                    src="assets/img/work4.jpeg"
                    alt="img"
                    style={{ width: '100px' }}
                  />
                </div>
                <div className="details">
                  <h5 className="mb-3">Testing and Launch</h5>
                  <p className="content text-black">
                    After thorough testing to ensure functionality and
                    performance, we launch your solution, providing ongoing
                    support for a seamless transition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}
    </>
  );
};

export default WorkProcessOne;
