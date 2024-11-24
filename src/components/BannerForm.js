import React from 'react';
import { Form, Button } from 'react-bootstrap';

const BannerForm = () => {
  return (
    <div className="bg-black text-light p-4 rounded-3 mt-5 mt-lg-0 contact-form">
      <h2 className="mb-4 text-white">Let's Connect</h2>
      <p className="mb-4 text-white">
        Got A Project That You Would Like To Discuss
      </p>
      <Form>
        <div className="input-group mb-3 input-group-lg">
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-person text-primary-emphasis"></i>
          </span>
          <input
            type="text"
            className="form-control fs-6"
            placeholder="Full Name*"
            aria-label="fullname"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 input-group-lg">
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-telephone text-primary-emphasis"></i>
          </span>
          <input
            type="text"
            className="form-control fs-6"
            placeholder="Phone*"
            aria-label="Phone"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 input-group-lg">
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-envelope text-primary-emphasis"></i>
          </span>
          <input
            type="text"
            className="form-control fs-6"
            placeholder="Email*"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3 input-group-lg">
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-check2-circle text-primary-emphasis"></i>
          </span>
          <select className="form-select fs-6">
            <option>Custom Website Design & Development</option>
            <option>MVP Development & Testing </option>
            <option>UI/UX Design & Prototyping</option>
            <option>Ongoing Software & Website Maintenance</option>
            <option>BlockChain Solution & Decentralized Applications</option>
          </select>
        </div>
        <button
          type="submit"
          className="mx-auto d-flex align-items-center bg-danger rounded-pill text-white px-4 py-2"
          style={{ fontSize: '14px' , fontWeight:"bold"}}
        >
          SEND REQUEST
        </button>
      </Form>
    </div>
  );
};

export default BannerForm;
