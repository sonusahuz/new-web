import React from 'react';

const WorkProcessTwo = () => {
  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className="work-process-area py-5 mt-4">
        <div className="container ">
          <div className="section-title text-center">
            <h2 className="title">Why Work with Us?</h2>
          </div>
          <div className="row mx-auto d-flex align-items-center justify-content-between">
            <div className="col-xl-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3 mx-auto">
                  <img
                    src="assets/img/work1.jpeg"
                    alt="img"
                    style={{ width: '100px' }}
                  />
                </div>
                <div className="details">
                  <h5 className="mb-3">Innovative Environment</h5>
                  <p className="content text-black">
                    Work alongside talented professionals who are committed to
                    challenging the status quo. We encourage creative thinking
                    and the pursuit of innovative solutions that drive success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img
                    src="assets/img//work2.jpeg"
                    alt="img"
                    style={{ width: '100px' }}
                  />
                </div>
                <div className="details">
                  <h5 className="mb-3">Growth Opportunities</h5>
                  <p className="content text-black">
                    We invest in our employees’ development through ongoing
                    training, mentorship programs, and opportunities for
                    advancement. At NYAS, your growth is our priority.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img
                    src="assets/img//work3.jpeg"
                    alt="img"
                    style={{ width: '100px' }}
                  />
                </div>
                <div className="details">
                  <h5 className="mb-3">Collaborative Culture</h5>
                  <p className="content text-black">
                    Join a supportive team that values collaboration and
                    teamwork. We believe that the best ideas come from working
                    together and sharing diverse perspectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./assets/img/business.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
        }}
      >
        <div className="container d-flex align-items-center justify-content-start">
          <div>
            <h1 className="text-white" style={{ fontSize: '40px' }}>
              How to Apply?
            </h1>
            <p className="text-white white-space-nowrap career-description">
              Ready to take the next step in your career? Click the button below
              or mail us to get started with Nyas Career!
            </p>
            <button
              type="submit"
              className="d-flex align-items-center bg-danger rounded-pill text-white px-4 py-2"
              style={{ fontSize: '14px', fontWeight: 'bold' }}
            >
              APPLY NOW{' '}
              <i
                className="bi bi-arrow-right"
                style={{ marginLeft: '10px' }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkProcessTwo;
