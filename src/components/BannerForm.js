import React, { useState } from 'react';

const BannerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  // Handle form data change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, service } = formData;

    // Check if required fields are filled
    if (!name || !email || !phone || !service) {
      alert('Please fill out all required fields.');
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Phone number must be 10 digits.');
      return;
    }
  };

  return (
    <div className="d-flex justify-content-end">
      <div
        className="modal-content2 justify-content-between bg-black text-white"
        style={{ width: '400px', height: '430px' }}
      >
        <div className="banner">
          <div className="modal-header mb-2 d-flex text-start flex-column">
            <h1 className="fs-3 text-white">Get Connect</h1>
            <p className="text-white">
              Got a project that you would like to discuss
            </p>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-children">
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div className="mb-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-telephone"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    aria-label="Phone"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-check2-circle"></i>
                  </span>
                  <select
                    className="form-select"
                    id="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a service</option>
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
              </div>
              <div>
                <button
                  type="submit"
                  className="btn rounded-pill btn-danger mx-auto mt-0 w-40 "
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
