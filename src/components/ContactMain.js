import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-primary text-white">
        <div className="container d-flex flex-wrap align-items-center justify-content-between py-5 p-lg-0">
          {/* Left Section */}
          <div>
            <h1 className="text-white fs-1 fw-bold"> CONTACT US</h1>
            <p className="mt-3 text-white fs-3">
              Connect with Nyas Consultants for innovative tech <br />{' '}
              solutions—your partner in driving digital transformation!
            </p>
          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center justify-content-between py-4">
            {/* Left Section - Two icons stacked */}
            <div className="d-flex flex-column align-items-center">
              <div className="mb-3">
                <img
                  src="/assets/img/email.png" // Replace with your Gmail icon
                  alt="Gmail"
                  className="rounded-circle"
                  style={{ width: '180px', height: '150px' }}
                />
              </div>

              <div>
                <img
                  src="/assets/img/internet.png" // Replace with your Phone icon
                  alt="Phone"
                  className="rounded-circle"
                  style={{ width: '180px', height: '150px' }}
                />
              </div>
            </div>

            {/* Right Section - Single icon */}
            <div>
              <img
                src="/assets/img/phone.png" // Replace with your Globe icon
                alt="Globe"
                className="rounded-circle"
                style={{ width: '180px', height: '150px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Request a Consultation Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fs-1 fw-bold">
          Request a Consultation
        </h2>
        <div className="row align-items-center justify-content-between">
          {/* Left Side */}
          <div className="col-lg-6 text-center">
            <img
              src="/assets/img/contact-form.png" // Replace with your image URL
              alt="Consultation illustration"
              className="img-fluid"
            />
          </div>

          {/* Right Side - Form */}
          <div
            className="col-lg-6 border-1 p-6 rounded-2"
            style={{ width: '400px', height: 'auto' }}
          >
            <form className="mx-auto">
              <div className="mb-3 mt-4">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="surname" className="form-label">
                  Surname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  placeholder="Enter your surname"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 rounded-2 mb-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
