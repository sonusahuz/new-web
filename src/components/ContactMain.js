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
            <h1 className="text-white fw-bold contact"> CONTACT US</h1>
            <p className="mt-3 text-white fs-3 description">
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
                  style={{ width: '130px', height: '120px' }}
                />
              </div>

              <div>
                <img
                  src="/assets/img/internet.png" // Replace with your Phone icon
                  alt="Phone"
                  className="rounded-circle"
                  style={{ width: '130px', height: '120px' }}
                />
              </div>
            </div>

            {/* Right Section - Single icon */}
            <div>
              <img
                src="/assets/img/phone.png" // Replace with your Globe icon
                alt="Globe"
                className="rounded-circle"
                style={{ width: '130px', height: '120px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Request a Consultation Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold request">
          Request a Consultation
        </h2>
        <div className="row contact-img-form">
          {/* Left Side */}
          <div className="col-lg-6 text-center">
            <img
              src="/assets/img/contact-form.png" // Replace with your image URL
              alt="Consultation illustration"
              className="img-fluid contact-img"
            />
          </div>

          {/* Right Side - Form */}
          <div
            className="col-lg-6 border-1 p-6 rounded-2"
            style={{ width: '400px', height: 'auto' }}
          >
            <form>
              {/* Form fields */}
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  id="name"
                  required
                  aria-describedby="nameHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                  id="Email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="form-control"
                  requireds
                  id="number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Select Service
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  required
                >
                  <option selected>Select - </option>
                  <option value="Custom Website Design & Development">
                    Custom Website Design & Development
                  </option>
                  <option value="MVP Development & Testing">
                    MVP Development & Testing
                  </option>
                  <option value="UI/UX Design & Prototyping">
                    UI/UX Design & Prototyping
                  </option>
                  <option value="Ongoing Software & Website Maintenance">
                    Ongoing Software & Website Maintenance
                  </option>
                  <option value="Blockchain Solutions & Decentralized Applications">
                    Blockchain Solutions & Decentralized Applications
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Enter Your Message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn rounded-1 btn-primary mt-0 w-100 border-radius-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
