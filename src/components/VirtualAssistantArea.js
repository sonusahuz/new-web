import React from 'react';

const VirtualAssistantArea = () => {
  return (
    <>
      {/* Fonts */}
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      {/* Vendor CSS Files */}
      {/* <link href="assets/assetscross/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" /> */}
      <link
        href="assets/assetscross/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      {/* <link href="assets/assetscross/vendor/aos/aos.css" rel="stylesheet" /> */}
      <link
        href="assets/assetscross/vendor/glightbox/css/glightbox.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/assetscross/vendor/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />
      {/* Main CSS File */}
      <link href="assets/assetscross/css/main.css" rel="stylesheet" />
      {/* =======================================================
    * Template Name: QuickStart
    * Template URL: https://bootstrapmade.com/quickstart-bootstrap-startup-website-template/
    * Updated: Aug 07 2024 with Bootstrap v5.3.3
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== */}

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <div className="hero-bg">
            <img src="assets/assetscross/img/hero-bg-light.webp" alt="" />
          </div>
          <div className="container text-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 data-aos="fade-up">
                Virtual <span>Assistance</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay={100}>
                Transform operations with expert virtual assistance, enabling
                team focus on growth.
                <br />
              </p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                <a href="#about" className="btn-get-started">
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  class="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i class="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
              <img
                src="assets/assetscross/img/hero-services-img.webp"
                className="img-fluid hero-img"
                data-aos="zoom-out"
                data-aos-delay={300}
              />
            </div>
          </div>
        </section>
        {/* /Hero Section */}
        {/* Featured Services Section */}
        <section
          id="featured-services"
          className="featured-services section light-background"
        >
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-xl-4 col-lg-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-briefcase" />
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        Remote Support
                      </a>
                    </h4>
                    <p className="description">
                      Virtual assistants provide remote, varied support
                      services.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-xl-4 col-lg-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-card-checklist" />
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        Cost-Effective
                      </a>
                    </h4>
                    <p className="description">
                      {' '}
                      VAs offer specialized, affordable services, reducing
                      employee expenses.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-xl-4 col-lg-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-bar-chart" />
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        Enhanced Productivity
                      </a>
                    </h4>
                    <p className="description">
                      lexible hours help businesses focus on growth,
                      productivity.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* /Featured Services Section */}
        {/* About Section */}
        <section id="about" className="about section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6 content"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <p className="who-we-are">
                  Empowering Your Business for Growth
                </p>
                <h3>Transform Your Business Operations</h3>
                <p className="fst-italic">
                  An exceptional virtual assistant service by Nyas Consultants
                  will revolutionize how your business operates daily. By
                  outsourcing time-consuming or specialized tasks such as web
                  design, SEO research, digital marketing, data analytics, and
                  more, companies can redirect focus towards growth, reduce
                  operational costs, and enhance team flexibility. At Nyas
                  Consultants, we provide a comprehensive suite of virtual
                  assistant services designed to streamline your business
                  processes and empower you to achieve your objectives with
                  greater efficiency and effectiveness.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle" />{' '}
                    <span>
                      {' '}
                      Outsource specialized tasks to focus on growth and
                      innovation.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />{' '}
                    <span>
                      {' '}
                      Reduce operational costs while boosting team flexibility
                      and productivity.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />{' '}
                    <span>
                      {' '}
                      Streamline processes with tailored virtual assistant
                      services.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />{' '}
                    <span>
                      {' '}
                      Achieve objectives by delegating time-consuming tasks to
                      experts.
                    </span>
                  </li>
                </ul>
                {/* <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a> */}
              </div>
              <div
                className="col-lg-6 about-images"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="row gy-4">
                  <div className="col-lg-6">
                    <img
                      src="assets/assetscross/img/about-company-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="row gy-4">
                      <div className="col-lg-12">
                        <img
                          src="assets/assetscross/img/about-company-2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-12">
                        <img
                          src="assets/assetscross/img/about-company-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Features Details Section */}
        {/* Services Section */}
        <section id="services" className="services section light-background">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>
              Tailored web solutions, app support, marketing, analytics, SEO,
              and custom software development.
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="service-item item-cyan position-relative">
                  <i className="bi bi-laptop icon" /> {/* Changed Icon */}
                  <div>
                    <h3>Web Solutions</h3>
                    <p>
                      We create fully customized, professional websites designed
                      specifically for your business. Whether building a new
                      site or optimizing an existing one, our web design experts
                      are here to assist.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="service-item item-orange position-relative">
                  <i className="bi bi-phone icon" /> {/* Changed Icon */}
                  <div>
                    <h3>App Support</h3>
                    <p>
                      Whether you need maintenance for your web applications or
                      support for mobile apps, our team is ready to ensure your
                      technology operates smoothly.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="service-item item-teal position-relative">
                  <i className="bi bi-bar-chart-line icon" />{' '}
                  {/* Changed Icon */}
                  <div>
                    <h3>Digital Marketing</h3>
                    <p>
                      Our digital marketing solutions, including SEO/SMM, PPC,
                      and content marketing, put your business in front of the
                      right audience. Let us create a strategy that drives
                      traffic and leads to your site.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="service-item item-red position-relative">
                  <i className="bi bi-pie-chart icon" /> {/* Changed Icon */}
                  <div>
                    <h3>Data Analytics</h3>
                    <p>
                      We help businesses make informed decisions by analyzing
                      critical data, enabling better strategic planning and
                      operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
                <div className="service-item item-indigo position-relative">
                  <i className="bi bi-search icon" /> {/* Changed Icon */}
                  <div>
                    <h3>SEO Services</h3>
                    <p>
                      We have some of the best SEO-knowledgeable professionals
                      working with us. They can provide targeted SEO services,
                      from link building to keyword optimization, helping you
                      rank higher on Google and other search engines.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={600}>
                <div className="service-item item-pink position-relative">
                  <i className="bi bi-braces icon" /> {/* Changed Icon */}
                  <div>
                    <h3>Software Development</h3>
                    <p>
                      Our software development team specializes in building
                      custom applications tailored to your business needs,
                      ensuring smooth operations and scalability.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* /Services Section */}
        {/* More Features Section */}
        <section id="more-features" className="more-features section">
          <div className="container">
            <div className="row justify-content-around gy-4">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h3>Business Development Virtual Assistant </h3>
                <p>
                  At Nyas Consultants, we leverage business development to help
                  organizations streamline operations, strengthen client
                  relationships, and explore new markets with precision and
                  efficiency. Our expertise drives growth and operational
                  excellence.
                </p>
                <div className="row">
                  <div className="col-lg-6 icon-box d-flex">
                    <i className="bi bi-person-bounding-box flex-shrink-0" />
                    <div>
                      <h4>VA Overview</h4>
                      <p>
                        Online experts who help businesses grow and seize
                        opportunities.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div className="col-lg-6 icon-box d-flex">
                    <i className="bi bi-star flex-shrink-0" />
                    <div>
                      <h4>Service Excellence</h4>
                      <p>
                        Stealth Agents offer top-notch business development VA
                        services.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div className="col-lg-6 icon-box d-flex">
                    <i className="bi bi-search flex-shrink-0" />
                    <div>
                      <h4>Key Tasks</h4>
                      <p>
                        Research market, find leads, schedule meetings, and
                        manage emails.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div className="col-lg-6 icon-box d-flex">
                    <i className="bi bi-graph-up flex-shrink-0" />
                    <div>
                      <h4>Business Growth</h4>
                      <p>
                        VAs enhance operations, contributing to business growth
                        and efficiency.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                </div>
              </div>
              <div
                className="features-image col-lg-5 order-1 order-lg-2"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <img src="assets/assetscross/img/features-3.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Faq Section */}
        <section id="faq" className="faq section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-10"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="faq-container">
                  <div className="faq-item faq-active">
                    <h3>
                      What services do virtual assistants at NYAS provide?
                    </h3>
                    <div className="faq-content">
                      <p>
                        NYAS Assistants offer a wide range of services,
                        including telemarketing, accounting, transcription,
                        customer support, digital marketing, and content
                        creation. Each service is tailored to meet specific
                        business needs and enhance overall productivity.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>
                      How can hiring a virtual assistant help my business?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Hiring a virtual assistant from NYAS can save you time
                        and money by allowing you to delegate core and non-core
                        tasks to experienced professionals. This enables you to
                        focus on your primary business activities, leading to
                        increased productivity and growth.{' '}
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>
                      Are NYAS virtual assistants specialized in certain areas?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Yes, many virtual assistants at NYAS have specialized
                        skills and focus on specific industries. This allows
                        them to provide targeted support and expertise tailored
                        to your business's unique requirements.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>
                      How does the pricing for NYAS Assistant services work?
                    </h3>
                    <div className="faq-content">
                      <p>
                        NYAS offers cost-effective solutions compared to hiring
                        full-time employees. Pricing varies based on the
                        specific services you require, allowing you to choose
                        options that fit your budget and business needs.{' '}
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>How can I get in touch with NYAS Assistants?</h3>
                    <div className="faq-content">
                      <p>
                        You can easily reach out to NYAS Assistants by clicking
                        on the "Consult Now" option on our website. Our team
                        will be happy to discuss your requirements and provide
                        the support you need to succeed.{' '}
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>What is the best way to contact NYAS?</h3>
                    <div className="faq-content">
                      <p>
                        You can contact us via email at info@nyasconsultants.com
                        or by phone at +353 85 161 3637. You can also reach us
                        through our website for immediate assistance.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                </div>
              </div>
              {/* End Faq Column*/}
            </div>
          </div>
        </section>
        {/* /Faq Section */}
      </main>
      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Preloader */}
      {/* <div id="preloader" /> */}
      {/* Vendor JS Files */}
      {/* Main JS File */}
    </>
  );
};

export default VirtualAssistantArea;
