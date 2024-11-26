import React, { useState } from 'react';

const GetStartedForm = ({
  openChat,
  setOpenChat,
  width = '400px',
  height = 'auto',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: null,
  });

  if (!openChat) return null;

  // Handle form data change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // Check if required fields are filled
    if (!name || !email || !phone || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Phone number must be 10 digits.');
      return;
    }

    setOpenChat(false); // Close the form modal after submission (optional)
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ width }}>
        <div className="banner">
          <div className="modal-header mb-2">
            <h1 className="fs-3">Get In Touch</h1>
            <i
              className="bi bi-x-lg modal-close"
              onClick={() => setOpenChat(false)}
            ></i>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-children">
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="form-control"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setFormData((prevData) => ({ ...prevData, phone: value }));
                  }}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Messsage
                </label>
                <textarea
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder='Enter Your Message'
                  class="form-control"
                  type="file"
                  id="formFile"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="btn rounded-1 btn-primary mt-0 w-100 border-radius-5"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedForm;
