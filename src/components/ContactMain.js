import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the swipe-up animation after a small delay
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, service } = formData;

    // Check if required fields are filled
    if (!name || !email || !phone || !service) {
      alert('Please fill out all required fields.');
      return;
    }

    // Validate phone number (should be exactly 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Phone number must be 10 digits.');
      return;
    }

    // Redirect to the Thank You page
    navigate('/thank-you');
  };

  return (
    <div>
      {/* Header Section */}
      <div className="bg-primary text-white" style={{ padding: '20px 0' }}>
        <div className="container d-flex flex-wrap align-items-center justify-content-between p-lg-0">
          {/* Left Section */}
          <div>
            <h1 className="text-white fw-bold contact"> CONTACT US</h1>
            <p className="mt-3 text-white fs-3 description">
              Connect with Nyas Consultants for innovative tech <br />{' '}
              solutions—your partner in driving digital transformation!
            </p>
          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center justify-content-between">
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
      <div
        className={`app-container container py-5 ${
          animate ? 'animate-swipe-up' : ''
        }`}
      >
        <div className="row contact-img-form">
          {/* Left Side */}
          <div className="col-lg-6 text-center">
            <h2 className="text-center mb-4 fw-bold request">
              Request a Consultation
            </h2>
            <img
              src="/assets/img/contact-form.png" // Replace with your image URL
              alt="Consultation illustration"
              className="img-fluid contact-img"
            />
          </div>

          {/* Right Side - Form */}
          <div
            className="col-lg-6 border-1 rounded-2 animate"
            style={{ width: 'auto', height: 'auto', padding: '20px' }}
          >
            <h1 className="fs-3 mb-4 fw-bold">Get in Touch</h1>
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
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
                  className="form-control form-control-lg"
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
                  className="form-control form-control-lg"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setFormData((prevData) => ({ ...prevData, phone: value }));
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="service" className="form-label">
                  Select Service
                </label>
                <select
                  className="form-select form-select-lg"
                  id="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select -</option>
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
                  className="form-control form-control-lg"
                  id="message"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
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
