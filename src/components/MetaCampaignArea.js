import React from "react";

const MetaCampaignArea = () => {
  return (
    <>
    {/* Google Fonts */}
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
      rel="stylesheet"
    />
    {/* Vendor CSS Files */}
    <link href="assets/assetsdigitalmarketing/vendor/icofont/icofont.min.css" rel="stylesheet" />
    <link href="assets/assetsdigitalmarketing/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
    <link href="assets/assetsdigitalmarketing/vendor/venobox/venobox.css" rel="stylesheet" />
    {/* <link href="assets/assetsdigitalmarketing/vendor/aos/aos.css" rel="stylesheet" /> */}
    {/* Template Main CSS File */}
    <link href="assets/assetsdigitalmarketing/css/style.css" rel="stylesheet" />
    {/* =======================================================
    * Template Name: Bocor - v2.0.0
    * Template URL: https://bootstrapmade.com/bocor-bootstrap-template-nice-animation/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== */}
    {/* ======= Hero Section ======= */}
    <section id="hero">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div
            className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1"
            data-aos="fade-right"
          >
            <h1>Elevate Your Brand with Nyas</h1>
            <h2>
              Boost brand impact with strategic Meta Campaigning and digital
              marketing expertise.
            </h2>
            <a href="#contact" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="fade-left"
          >
            <img src="assets/assetsdigitalmarketing/img/hero-img.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
    {/* End Hero */}
    <main id="main">
      {/* ======= Clients Section ======= */}
      {/* ======= About Section ======= */}
      <section id="about" className="about section-bg">
        <div className="container">
          <div className="row">
            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" />
            <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
              <div className="content d-flex flex-column justify-content-center">
                <h3 data-aos="fade-in" data-aos-delay={100}>
                  Digital Campaigns
                </h3>
                <p data-aos="fade-in">
                  Nyas Consultants drives success with tailored digital marketing
                  strategies, including SEO, Google Ads, Meta campaigns, and
                  backlink generation to boost online visibility and business
                  growth.
                </p>
                <div className="row">
                  <div className="col-md-6 icon-box" data-aos="fade-up">
                    <i className="bx bx-receipt" />
                    <h4>
                      <a href="#"> (SEO)</a>
                    </h4>
                    <p>
                      We boost your website’s search ranking with targeted SEO
                      strategies to drive organic traffic and enhance online
                      presence.
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <i className="bx bx-cube-alt" />
                    <h4>
                      <a href="#">Google Ads </a>
                    </h4>
                    <p>
                      Our Google Ads campaigns target the right audience,
                      generating quality leads and boosting conversion rates.
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <i className="bx bx-images" />
                    <h4>
                      <a href="#">Meta Campaigns</a>
                    </h4>
                    <p>
                      Meta campaigns engage audiences, drive results, and optimize
                      targeting on Facebook, Instagram.
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <i className="bx bx-bar-chart" />
                    <h4>
                      <a href="#">Analytics and Reporting</a>
                    </h4>
                    <p>
                      Comprehensive reporting tracks campaign performance,
                      offering insights to optimize strategies.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* End .content*/}
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title">
            <h2 data-aos="fade-in">Frequently Asked Questions</h2>
            <p data-aos="fade-in">
              Nyas Consultants specializes in digital marketing services,
              including SEO, Google Ads, Meta campaigns, and backlink strategies
              to elevate online visibility and drive growth. Our data-driven
              approach ensures optimized performance, high-quality leads, and
              valuable insights for impactful marketing results.
            </p>
          </div>
          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div className="col-lg-5 d-flex align-items-center">
              <span className="faq-number">1</span>
              <h4>
                What digital marketing services does Nyas Consultants offer?
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Nyas Consultants provides a full range of digital marketing
                services, including SEO (Search Engine Optimization), Google Ads,
                Meta (Facebook and Instagram) campaigns, and backlink generation
                to increase your brand's online visibility and drive business
                growth.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="col-lg-5 d-flex align-items-center">
              <span className="faq-number">2</span>
              <h4>How can SEO help improve my website’s visibility?</h4>
            </div>
            <div className="col-lg-7">
              <p>
                Our SEO strategies focus on improving your website’s search engine
                ranking to attract organic traffic. By targeting relevant keywords
                and optimizing site content, we help boost your online presence
                and connect you with potential customers.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-5 d-flex align-items-center">
              <span className="faq-number">3</span>
              <h4>
                What is the benefit of using Google Ads in my marketing strategy?
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Google Ads allows us to reach your target audience quickly,
                generating high-quality leads and increasing conversion rates. Our
                team crafts tailored Google Ads campaigns to ensure you reach the
                right customers at the right time.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="col-lg-5 d-flex align-items-center">
              <span className="faq-number">4</span>
              <h4>How do Meta campaigns work on Facebook and Instagram?</h4>
            </div>
            <div className="col-lg-7">
              <p>
                Meta campaigns are designed to engage audiences on Facebook and
                Instagram, two of the largest social media platforms. We create
                targeted, visually compelling ads that drive engagement and
                results while optimizing to reach your specific audience.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="col-lg-5 d-flex align-items-center">
              <span className="faq-number">5</span>
              <h4>
                How does Nyas Consultants measure and report campaign success?
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                We offer comprehensive analytics and reporting to track campaign
                performance. Our reports provide detailed insights into key
                metrics, helping us and our clients make data-driven adjustments
                to enhance future campaigns and maximize ROI.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
        </div>
      </section>
      {/* End Frequently Asked Questions Section */}
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact section-bg">
        <div className="container">
          <div className="section-title">
            <h2 data-aos="fade-in">Contact</h2>
            <p data-aos="fade-in">
              Get in touch with Nyas Consultants for customized digital marketing
              strategies that boost your online presence and drive business
              growth. Contact us today to start optimizing your digital success!
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box" data-aos="fade-up">
                    <i className="bx bx-map" />
                    <h3>Our Address</h3>
                    <p>Mountjoy, Dublin 1, D01 XY58, Ireland </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="info-box mt-4"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <i className="bx bx-envelope" />
                    <h3>Email Us</h3>
                    <p>
                      info@nyasconsultants.com
                      <br />
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="info-box mt-4"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <i className="bx bx-phone-call" />
                    <h3>Call Us</h3>
                    <p>
                      +353 85 161 3637
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
                data-aos="fade-up"
              >
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate" />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate" />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    defaultValue={""}
                  />
                  <div className="validate" />
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </main>
    {/* End #main */}
    {/* ======= Footer ======= */}
    <a href="#" className="back-to-top">
      <i className="icofont-simple-up" />
    </a>
    {/* Vendor JS Files */}
    {/* Template Main JS File */}
  </>
  

  
  );
};

export default MetaCampaignArea;
