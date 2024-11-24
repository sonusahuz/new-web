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
              <Button
                variant="info"
                size="lg"
                className="text-white fw-semibold rounded-pill px-4"
                style={{ fontSize: '16px' }}
              >
                Our Services
              </Button>
              <Button
                variant="danger"
                size="lg"
                className="fw-semibold rounded-pill px-4"
                style={{ fontSize: '16px' }}
              >
                CONNECT WITH US
              </Button>
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
