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

      {/* Hero Header */}
      <div className="container-fluid hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row align-items-center text-left text-lg-start g-5">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">
                Blockchain Solutions & Decentralized Applications
              </h1>
              <p className="text-muted animate__animated animate__fadeInDown">
                Blockchain technology offers groundbreaking opportunities for
                secure, transparent, and efficient digital operations. Nyas’s
                blockchain development solutions empower businesses to harness
                the power of decentralization, build secure applications, and
                streamline transactions.
              </p>
              <a href="#" className="btn btn-primary">
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid rounded animate__animated animate__pulse"
                style={{ animationDuration: '3s' }}
                src="assets/assetsblockchainsolutions/img/hero-1.png"
                alt="Blockchain Solutions"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img
              className="img-fluid rounded "
              src="assets/assetsblockchainsolutions/img/about.png"
              alt="About"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3 fs-1">Service Overview</h2>
            <p>
              Blockchain solutions include developing applications and systems
              using decentralized, secure ledger technology. Applications range
              from secure transaction systems to smart contracts and fully
              decentralized applications (dApps), enabling businesses to operate
              transparently and securely.
            </p>
            <h2 className="fw-bold mb-3 fs-1">
              Why Blockchain Matters for Businesses
            </h2>
            <p>
              For industries where data security, transparency, and integrity
              are crucial, blockchain is a game-changer. By implementing
              blockchain, businesses can reduce fraud, enhance operational
              efficiency, and offer customers greater transparency.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto container my-5">
        <h2 className="fw-bold mb-3 fs-1 text-center">
          How Nyas Excels in Blockchain Solutions
        </h2>
        <p className='text-left'>
          Nyas combines advanced blockchain technology with a client-centered
          approach to deliver secure, scalable, and customized solutions. Our
          team of blockchain experts helps clients navigate this innovative
          field, providing guidance on the best use cases and strategies. Nyas’s
          experience with smart contracts, consensus protocols, and dApp
          development ensures that we deliver powerful solutions that enhance
          data integrity, simplify processes, and support regulatory compliance.
        </p>
      </div>

      {/* Features Section */}
      <div className="container py-5 bg-light">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h2 className="fw-bold mb-3">Steps in Blockchain Development</h2>
          <p className="text-muted">
            Follow our structured process to develop efficient blockchain
            solutions.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="bg-white rounded shadow p-4 h-100 text-center">
              <img
                className="img-fluid mb-3"
                src="assets/assetsblockchainsolutions/img/icon-7.png"
                alt="Step 1"
                style={{ width: '80px' }}
              />
              <h5 className="fw-bold">Needs Assessment</h5>
              <p className="text-muted">
                Working with clients to determine specific blockchain use cases
                suited to their business goals.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-white rounded shadow p-4 h-100 text-center">
              <img
                className="img-fluid mb-3"
                src="assets/assetsblockchainsolutions/img/icon-6.png"
                alt="Step 2"
                style={{ width: '80px' }}
              />
              <h5 className="fw-bold">Solution Design</h5>
              <p className="text-muted">
                Developing a technical and operational structure that fits
                organizational requirements.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-white rounded shadow p-4 h-100 text-center">
              <img
                className="img-fluid mb-3"
                src="assets/assetsblockchainsolutions/img/icon-5.png"
                alt="Step 2"
                style={{ width: '80px' }}
              />
              <h5 className="fw-bold">
                Smart Contract Development and Integration
              </h5>
              <p className="text-muted">
                Coding, testing, and implementing self-executing contracts for
                secure, automated transactions.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-white rounded shadow p-4 h-100 text-center">
              <img
                className="img-fluid mb-3"
                src="assets/assetsblockchainsolutions/img/icon-4.png"
                alt="Step 2"
                style={{ width: '80px' }}
              />
              <h5 className="fw-bold">
                Decentralized Application (dApp) Development
              </h5>
              <p className="text-muted">
                Building user-friendly dApps with a focus on security,
                performance, and scalability.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-white rounded shadow p-4 h-100 text-center">
              <img
                className="img-fluid mb-3"
                src="assets/assetsblockchainsolutions/img/icon-3.png"
                alt="Step 2"
                style={{ width: '80px' }}
              />
              <h5 className="fw-bold">Testing, Launch, and Maintenance</h5>
              <p className="text-muted">
                Rigorously testing for security, deploying the solution, and
                providing ongoing support and updates.
              </p>
            </div>
          </div>
          {/* Additional steps can be added here */}
        </div>
      </div>
    </>
  );
};

export default BlockChainArea;
