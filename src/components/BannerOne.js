import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BannerForm from './BannerForm';

const HomePage = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-start pt-5 justify-content-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./assets/img/home-background.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={7} className="text-white">
            <h1 className="display-4 fw-bold mb-4 text-white">
              Your Ultimate Solution
              <br />
              for Business Growth.
            </h1>
            <p className="lead mb-4 text-white">
              We provide tailored solutions to business challenges, ensuring
              seamless execution and driving success across all aspects of
              operations.
            </p>
            <div className="d-flex gap-3">
              <button
                type="submit"
                className="d-flex align-items-center bg-info rounded-pill text-white px-4 px-lg-5 py-2 py-lg-3"
                style={{ fontSize: '14px', fontWeight: 'bold' }}
              >
                Our Services
              </button>

              <button
                type="submit"
                className="d-flex align-items-center bg-danger rounded-pill text-white px-4 px-lg-5 py-2 py-lg-3"
                style={{ fontSize: '14px', fontWeight: 'bold' }}
              >
                CONNECT WITH US
              </button>
            </div>
          </Col>
          <Col lg={5}>
            <BannerForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
