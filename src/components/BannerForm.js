import React from 'react';
import { Form, Button } from 'react-bootstrap';

const BannerForm = () => {
  return (
    <div className="bg-dark text-light p-4 rounded-3 mt-5 mt-lg-0">
      <h2 className="mb-4 text-white">Get Connect</h2>
      <p className="mb-4 text-white">
        Got a project that you would like to discuss
      </p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your name"
            className="py-2"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            className="py-2"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            className="py-2"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select className="py-2">
            <option>Select a service</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>UI/UX Design</option>
            <option>Digital Marketing</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 py-2">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BannerForm;
