import React from 'react';

const BlockChainArea = () => {
  return (
    <>
      {/* External Links and Stylesheets */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      <link
        href="assestsblockchainsolutions/lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link
        href="assestsblockchainsolutions/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link href="assestsblockchainsolutions/css/style.css" rel="stylesheet" />

      {/* Spinner */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status"></div>
      </div>

      {/* Hero Header */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">
                Blockchain Solutions & Decentralized Applications
              </h1>
              <p className="animated slideInDown">
                Blockchain technology offers groundbreaking opportunities for
                secure, transparent, and efficient digital operations. Nyas’s
                blockchain development solutions empower businesses to harness
                the power of decentralization, build secure applications, and
                streamline transactions.
              </p>
              <a
                href="#"
                className="btn btn-primary py-3 px-4 animated slideInDown"
              >
                Explore More
              </a>
            </div>
            <div className="col-lg-6 animated fadeIn">
              <img
                className="img-fluid animated pulse infinite"
                style={{ animationDuration: '3s' }}
                src="assets/img/hero-1.png"
                alt="Blockchain Solutions"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="assets/img/about.png"
                alt="About"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-6">Service Overview</h1>
              <p>
                Blockchain solutions include developing applications and systems
                using decentralized, secure ledger technology. Applications
                range from secure transaction systems to smart contracts and
                fully decentralized applications (dApps), enabling businesses to
                operate transparently and securely.
              </p>
              <h1 className="display-6">Why Blockchain Matters</h1>
              <p>
                For industries where data security, transparency, and integrity
                are crucial, blockchain is a game-changer. By implementing
                blockchain, businesses can reduce fraud, enhance operational
                efficiency, and offer customers greater transparency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
            <h1 className="display-6">Steps in Blockchain Development</h1>
            <p className="text-primary fs-5 mb-5">Development Process</p>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-start">
                <img
                  className="img-fluid flex-shrink-0"
                  src="assets/img/icon-7.png"
                  alt="Step 1"
                />
                <div className="ps-4">
                  <h5 className="mb-3">Needs Assessment</h5>
                  <p>
                    Working with clients to determine specific blockchain use
                    cases suited to their business goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-start">
                <img
                  className="img-fluid flex-shrink-0"
                  src="assets/img/icon-6.png"
                  alt="Step 2"
                />
                <div className="ps-4">
                  <h5 className="mb-3">Solution Design</h5>
                  <p>
                    Developing a technical and operational structure that fits
                    organizational requirements.
                  </p>
                </div>
              </div>
            </div>
            {/* Add more steps here if necessary */}
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default BlockChainArea;
