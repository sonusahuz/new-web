import React from 'react';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';

const ThankYou = () => {
  return (
    <>
      <NavBar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg p-4 rounded text-center">
              <div>
                <img src="/assets/img/verified.gif" alt="thank-you-img" />
              </div>
              <div className="card-body">
                <h1 className="display-4 text-success">Thank You!</h1>
                <p className="lead text-muted">
                  Your submission has been received. We will get back to you
                  soon.
                </p>
                <a href="/" className="btn btn-primary mt-4">
                  Go Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
    </>
  );
};

export default ThankYou;
