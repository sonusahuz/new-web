import React from 'react';

const DigitalProductDevelopmentArea = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("./assets/img/about-background.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container py-5 d-flex align-items-center justify-content-start">
          <h1
            className="text-white"
            data-aos="fade-up"
            data-aos-delay={100}
            style={{ fontSize: '40px', paddingTop: '45px' }}
          >
            Comprehensive Software Development <br /> Services for Modern
            Businesses
          </h1>
        </div>
      </div>
      <div
        style={{
          backgroundImage: 'url("./assets/img/contact-background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div>
            <h1 className="title fs-2 text-center py-4 fw-bold">
              Full-Spectrum Software Development Services for Innovative
              Solutions
            </h1>
            <p className="text-black">
              Our software development services are designed to empower
              businesses with custom, robust solutions that align with their
              unique goals. From tailored website development and MVP testing to
              UI/UX design and ongoing maintenance, we ensure digital
              experiences are secure, engaging, and up-to-date. Additionally,
              our expertise in blockchain technology enables us to create
              decentralized applications and smart contracts, meeting the needs
              of forward-thinking enterprises.
            </p>
          </div>

          <div id="about" className="py-70">
            <div>
              <div className="row text-center mb-60">
                <div className="title wow fadeInUp">
                  <h1 className="title fs-2 text-center py-4 fw-bold">
                    Empowering Business Growth with Tailored Digital Solutions
                  </h1>
                </div>
              </div>
              <div className="row about_row">
                {/* Custom Website Design & Development */}
                <div className="who_we_area col-md-4 col-sm-6 px_10 wow fadeInUp my-2">
                  <div className="service-about-services text-left">
                    <div className="wow fadeInUp">
                      <img
                        src="assets/assetsoftware/images/web.png"
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="unify_about fs-4 mt-3">
                      Custom Website Design &amp; Development{' '}
                    </h2>
                    <p>
                      Crafting engaging, responsive websites tailored to reflect
                      brand identity and meet unique business needs, enhancing
                      user engagement and online presence.
                    </p>
                  </div>
                </div>
                {/* MVP Development & Testing */}
                <div className="who_we_area col-md-4 col-sm-6 px_10 wow fadeInUp my-2">
                  <div className="service-about-services text-left">
                    <div className="wow fadeInUp">
                      <img
                        src="assets/assetsoftware/images/mvp.png"
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="unify_about fs-4 mt-3">
                      {' '}
                      MVP Development &amp; Testing{' '}
                    </h2>
                    <p>
                      Building functional Minimum Viable Products (MVPs)
                      quickly, enabling businesses to validate ideas, attract
                      stakeholders, and gather real-user feedback.
                    </p>
                  </div>
                </div>
                {/* UI/UX Design & Prototyping */}
                <div className="who_we_area col-md-4 col-sm-6 px_10 wow fadeInUp my-2">
                  <div className="service-about-services">
                    <div className="wow fadeInUp">
                      <img
                        src="assets/assetsoftware/images/uiux.png"
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="unify_about fs-4 mt-3">
                      {' '}
                      UI/UX Design &amp; Prototyping{' '}
                    </h2>
                    <p>
                      Designing intuitive, visually appealing user interfaces
                      and experiences, ensuring that applications are
                      accessible, attractive, and easy to navigate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt_20">
                {/* Ongoing Software & Website Maintenance */}
                <div className="who_we_area col-md-4 col-sm-6 px_10 wow fadeInUp my-2">
                  <div className="service-about-services">
                    <div className="wow fadeInUp">
                      <img
                        src="assets/assetsoftware/images/aintain.png"
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="unify_about fs-4 mt-3">
                      {' '}
                      Ongoing Software &amp; Website Maintenance{' '}
                    </h2>
                    <p>
                      Providing continuous support and updates to ensure
                      software and websites remain secure, optimized, and
                      compatible with the latest technologies.
                    </p>
                  </div>
                </div>
                {/* Blockchain Solutions & Decentralized Applications */}
                <div className="who_we_area col-md-4 col-sm-6 px_10 wow fadeInUp my-2">
                  <div className="service-about-services text-left">
                    <div className="wow fadeInUp">
                      <img
                        src="assets/assetsoftware/images/blockchain.png"
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="unify_about fs-4 mt-3">
                      {' '}
                      Blockchain Solutions &amp; Decentralized Applications{' '}
                    </h2>
                    <p>
                      Developing blockchain-powered applications, smart
                      contracts, and secure, transparent systems tailored to
                      meet modern business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*#End service-text  */}
          {/*Start Investment Planning*/}
          <div className="title wow fadeInUp text-center py-5">
            <h1 className="title fs-3 text-center fw-bold">
              Key Factors Driving Success in Digital Solutions
            </h1>
            <p className="text-black text-center fs-5">
              What makes us different from the other companies
            </p>
          </div>
          <section className="mb-5">
            <div className="container ">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 bhoechie-tab py-0">
                  {/* flight section */}
                  <div className="bhoechie-tab-content active">
                    <div className="col-md-12 py-0">
                      <img src="assets/assetsoftware/images/click_1.png" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 bhoechie-tab-menu tabs_box_s mt-3 mt-lg-0">
                  <div className="list-group">
                    <a href="#" className="list-group-item">
                      <h1 className="left-tabs-text text-left fs-5">
                        Enhanced Brand Presence and User Engagement{' '}
                      </h1>
                      <p>
                        A custom-designed website not only sets a brand apart
                        from competitors but also improves user experience,
                        making it easier for potential customers to engage with
                        the brand meaningfully.
                      </p>
                    </a>
                    <a href="#" className="list-group-item">
                      <h1 className="left-tabs-text text-left fs-5">
                        {' '}
                        Fast Market Validation with Minimal Risk{' '}
                      </h1>
                      <p>
                        MVP development allows businesses to bring their ideas
                        to market quickly and gather valuable user feedback.
                        This early validation helps in refining the product
                        before committing to full-scale development, saving time
                        and resources.
                      </p>
                    </a>
                    <a href="#" className="list-group-item">
                      <h1 className="left-tabs-text text-left fs-5">
                        {' '}
                        Increased Accessibility and User Retention{' '}
                      </h1>
                      <p>
                        Effective UI/UX design makes digital products not only
                        visually appealing but also accessible and
                        user-friendly, which leads to higher user retention and
                        satisfaction—critical factors in today’s competitive
                        market.
                      </p>
                    </a>
                    <a href="#" className="list-group-item">
                      <h1 className="left-tabs-text text-left fs-5">
                        {' '}
                        Long-Term Security and Compatibility{' '}
                      </h1>
                      <p>
                        Ongoing maintenance is vital for software and websites
                        to remain secure and operational. Regular updates ensure
                        they stay compatible with evolving technology standards
                        and cybersecurity measures, minimizing downtime and
                        risk.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DigitalProductDevelopmentArea;
