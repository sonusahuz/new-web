import React from 'react';

const BlockChainArea = () => {
  return (
    <>
      <link href="img/favicon.ico" rel="icon" />

      {/* <!-- Google Web Fonts --> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700&display=swap"
        rel="stylesheet"
      />

      {/* <!-- Icon Font Stylesheet --> */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />

      {/* <!-- Libraries Stylesheet --> */}
      <link
        href="assets/assestsblockchainsolutions/lib/animate/animate.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/assestsblockchainsolutions/lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />

      {/* <!-- Customized Bootstrap Stylesheet --> */}
      <link
        href="assets/assestsblockchainsolutions/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* <!-- Template Stylesheet --> */}
      <link
        href="assets/assestsblockchainsolutions/css/style.css"
        rel="stylesheet"
      />
      {/* <!-- Spinner Start --> */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status"></div>
      </div>

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
                href=""
                className="btn btn-primary py-3 px-4 animated slideInDown"
              >
                Explore More
              </a>
            </div>
            <div className="col-lg-6 animated fadeIn">
              <img
                className="img-fluid animated pulse infinite"
                style={{ animationDuration: 'initial' }}
                src="img/hero-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End -->

    <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img className="img-fluid" src="img/about.png" alt="" />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className="display-6">Service Overview</h1>
                <p className="text-primary fs-5 mb-4">
                  The Most Trusted Cryptocurrency Platform
                </p>
                <p>
                  Blockchain solutions include developing applications and
                  systems using decentralized, secure ledger technology.
                  Applications range from secure transaction systems to smart
                  contracts and fully decentralized applications (dApps),
                  enabling businesses to operate transparently and securely.
                </p>
              </div>
              <div className="h-100">
                <h1 className="display-6">
                  Why Blockchain Matters for Businesses
                </h1>
                <p className="text-primary fs-5 mb-4">
                  The Most Trusted Cryptocurrency Platform
                </p>
                <p>
                  For industries where data security, transparency, and
                  integrity are crucial, blockchain is a game-changer.
                  Blockchain technology is particularly valuable in finance,
                  supply chain, and healthcare, where secure, verifiable records
                  are essential. By implementing blockchain, businesses can
                  reduce fraud, enhance operational efficiency, and offer
                  customers greater transparency in transactions.
                </p>
              </div>
            </div>
            <div className="h-100">
              <h1 className="display-6 text-center">
                How Nyas Excels in Blockchain Solutions
              </h1>
              <p className="text-primary fs-5 mb-4">
                The Most Trusted Cryptocurrency Platform
              </p>
              <p>
                Nyas combines advanced blockchain technology with a
                client-centered approach to deliver secure, scalable, and
                customized solutions. Our team of blockchain experts helps
                clients navigate this innovative field, providing guidance on
                the best use cases and strategies. Nyas’s experience with smart
                contracts, consensus protocols, and dApp development ensures
                that we deliver powerful solutions that enhance data integrity,
                simplify processes, and support regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <h1 className="display-6">Steps in Blockchain</h1>
            <p className="text-primary fs-5 mb-5">Development</p>
          </div>
          <div className="row g-5">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex align-items-start">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/icon-7.png"
                  alt=""
                />
                <div className="ps-4">
                  <h5 className="mb-3">
                    Needs Assessment and Use Case Identification
                  </h5>
                  <span>
                    Working with clients to determine specific blockchain use
                    cases suited to their business goals.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="d-flex align-items-start">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/icon-6.png"
                  alt=""
                />
                <div className="ps-4">
                  <h5 className="mb-3">
                    Solution Design and Architecture Planning
                  </h5>
                  <span>
                    Developing a technical and operational structure that fits
                    the organization’s requirements.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="d-flex align-items-start">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/icon-5.png"
                  alt=""
                />
                <div className="ps-4">
                  <h5 className="mb-3">
                    Smart Contract Development and Integration
                  </h5>
                  <span>
                    Coding, testing, and implementing self-executing contracts
                    for secure, automated transactions.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex align-items-start">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/icon-4.png"
                  alt=""
                />
                <div className="ps-4">
                  <h5 className="mb-3">
                    Decentralized Application (dApp) Development
                  </h5>
                  <span>
                    Building user-friendly dApps with a focus on security,
                    performance, and scalability.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="d-flex align-items-start">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/icon-3.png"
                  alt=""
                />
                <div className="ps-4">
                  <h5 className="mb-3">Testing, Launch, and Maintenance</h5>
                  <span>
                    Rigorously testing for security, deploying the solution, and
                    providing ongoing support and updates.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>

      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="assets/assestsblockchainsolutions/lib/wow/wow.min.js"></script>
      <script src="assets/assestsblockchainsolutions/lib/easing/easing.min.js"></script>
      <script src="assets/assestsblockchainsolutions/lib/waypoints/waypoints.min.js"></script>
      <script src="assets/assestsblockchainsolutions/lib/owlcarousel/owl.carousel.min.js"></script>
      <script src="assets/assestsblockchainsolutions/lib/counterup/counterup.min.js"></script>

      <script src="assets/assestsblockchainsolutions/js/main.js"></script>
    </>
  );
};

export default BlockChainArea;
