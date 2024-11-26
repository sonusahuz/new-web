import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ContactMain = () => {
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
      <div
        style={{
          backgroundImage: 'url("./assets/img/about-background.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
        }}
      >
        <div className="container py-5 d-flex align-items-center justify-content-start">
          <h1
            data-aos="fade-up"
            data-aos-delay={100}
            className="text-white fw-bold"
            style={{ fontSize: '60px', paddingTop: '45px' }}
          >
            CONTACT US{' '}
          </h1>
        </div>
      </div>

      <div
        className="py-5"
        style={{
          backgroundImage: 'url("./assets/img/contact-background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1
          className="fs-1 fw-bold text-center mb-5"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          REQUEST A CONSULTATION
        </h1>
        {/* Main Content Section */}
        <div
          className="row g-4 align-items-start mx-auto gap-4 justify-content-center container"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {/* Left Side: Contact Info */}
          <div className="col-lg-6">
            <div
              className="border-1 p-4 rounded-4 shadow-sm bg-white"
              style={{ height: '692px' }}
            >
              <div className="card-body text-left">
                <h3 className="card-title text-primary fw-bold mb-3">
                  CONTACT INFORMATION
                </h3>
                <p className="fs-4 text-black">
                  Connect with Nyas today for tailored solutions that drive
                  growth, streamline operations, and elevate your success—let’s
                  achieve your goals together!
                </p>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-geo-alt-fill text-danger fs-2 me-2"></i>
                  <span className="text-black">
                    60 East 65th Street NY 10065
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope-fill text-danger fs-2 me-2"></i>
                  <span className="text-black">info@nyasconsultants.com</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-telephone-fill text-danger fs-2 me-2"></i>
                  <span className="text-black">+447492884455</span>
                </div>
                <div className="d-flex justify-content-start">
                  <a href="#" className="text-primary fs-2 me-3">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-primary fs-2 me-3">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="text-primary fs-2">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div
            className="col-lg-6 border-1 p-4 rounded-4 shadow-sm bg-white"
            style={{ width: '600px' }}
          >
            <h2 className="fw-bold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter Your Name"
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
                  id="email"
                  className="form-control"
                  placeholder="Enter Your Email"
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
                  id="phone"
                  className="form-control"
                  placeholder="Enter Your Phone Number"
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
                  id="service"
                  className="form-select"
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
                  id="message"
                  className="form-control"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', height: '500px' }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509612!2d-122.42177868468143!3d37.77492927975908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c497b850f%3A0x3e645f3e27bdf0e3!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1694537087334!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMain;
