import React from "react";

const MobileAppArea = () => {
  return (
    <>
  
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet"
  />
  {/* Vendor CSS Files */}
  <link href="assets/assets1/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/assets1/vendor/icofont/icofont.min.css" rel="stylesheet" />
  <link href="assets/assets1/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <link href="assets/assets1/vendor/venobox/venobox.css" rel="stylesheet" />
  <link
    href="assets/assets1/vendor/owl.carousel/assets/assets1/owl.carousel.min.css"
    rel="stylesheet"
  />
  {/* <link href="assets/assets1/vendor/aos/aos.css" rel="stylesheet" /> */}
  {/* Template Main CSS File */}
  <link href="assets/assets1/css/style.css" rel="stylesheet" />
  <section id="hero">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
          data-aos="fade-up"
        >
          <div>
            <h1>Digital App Development Services</h1>
            <h2>
              Our Digital App Development Services offer scalable mobile,
              enterprise, SaaS, and IoT solutions, with expert strategy and
              consulting to align your app with business goals.
            </h2>
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </div>
        <div
          className="col-lg-6 order-1 order-lg-2 hero-img"
          data-aos="fade-left"
        >
          <img src="assets/assets1/img/hero-img.png" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
  {/* End Hero */}
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="zoom-in">
            <img src="assets/assets1/img/about.jpg" className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 d-flex flex-column justify-contents-center"
            data-aos="fade-left"
          >
            <div className="content pt-4 pt-lg-0">
              <h3>Innovative Digital Solutions</h3>
              <p className="font-italic">
                At Nyas, we specialize in delivering high-quality digital
                solutions across mobile app development, enterprise
                applications, SaaS, cloud solutions, IoT, and product strategy
                consulting, ensuring businesses stay ahead of the curve.
              </p>
              <ul>
                <li>
                  <i className="icofont-check-circled" /> High-quality mobile
                  apps for Android and iOS.
                </li>
                <li>
                  <i className="icofont-check-circled" /> Robust enterprise apps
                  to streamline business operations.
                </li>
                <li>
                  <i className="icofont-check-circled" /> Scalable SaaS and
                  cloud solutions for businesses.
                </li>
                <li>
                  <i className="icofont-check-circled" /> Product strategy
                  consulting for successful app launches.
                </li>
                <li>
                  <i className="icofont-check-circled" /> IoT-driven
                  applications enhancing operational efficiency and experiences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}
    {/* ======= Features Section ======= */}
    <section id="features" className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-2 mb-tg-0 order-2 order-lg-1">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item" data-aos="fade-up">
                <a
                  className="nav-link active show"
                  data-toggle="tab"
                  href="#tab-1"
                >
                  <h4>Mobile App Development (Android &amp; iOS)</h4>
                  <p>
                    Developing high-quality, responsive mobile applications for
                    Android and iOS platforms, offering seamless experiences on
                    all devices.
                  </p>
                </a>
              </li>
              <li
                className="nav-item mt-2"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <a className="nav-link" data-toggle="tab" href="#tab-2">
                  <h4>Enterprise Application Development</h4>
                  <p>
                    Creating robust, scalable applications to support complex
                    organizational operations, improve workflow efficiency, and
                    boost productivity.
                  </p>
                </a>
              </li>
              <li
                className="nav-item mt-2"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <a className="nav-link" data-toggle="tab" href="#tab-3">
                  <h4>SaaS Integration &amp; Cloud Application Development</h4>
                  <p>
                    Building Software as a Service (SaaS) solutions, offering
                    scalable, cloud-based applications accessible to businesses
                    and users anytime, anywhere.
                  </p>
                </a>
              </li>
              <li
                className="nav-item mt-2"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <a className="nav-link" data-toggle="tab" href="#tab-4">
                  <h4>Product Strategy &amp; Development Consulting</h4>
                  <p>
                    Offering expert guidance from ideation through launch to
                    help align app development with business goals and ensure
                    product-market fit.
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <figure>
                  <img
                    src="assets/assets1/img/features-1.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="tab-pane" id="tab-2">
                <figure>
                  <img
                    src="assets/assets1/img/features-2.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="tab-pane" id="tab-3">
                <figure>
                  <img
                    src="assets/assets1/img/features-3.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="tab-pane" id="tab-4">
                <figure>
                  <img
                    src="assets/assets1/img/features-4.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Features Section */}
    {/* ======= F.A.Q Section ======= */}
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
        </div>
        <ul className="faq-list">
          <li data-aos="fade-up">
            <a data-toggle="collapse" className="" href="#faq1">
              What is the difference between native mobile app development and
              cross-platform app development?{" "}
              <i className="icofont-simple-up" />
            </a>
            <div id="faq1" className="collapse show" data-parent=".faq-list">
              <p>
                Native mobile app development focuses on creating apps for
                specific platforms like Android or iOS, ensuring optimal
                performance and deep integration with device features.
                Cross-platform app development, on the other hand, uses a single
                codebase to create apps that work on both iOS and Android,
                saving development time and cost, but might sacrifice some
                performance and native features.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={100}>
            <a data-toggle="collapse" href="#faq2" className="collapsed">
              How can enterprise application development improve my business
              operations? <i className="icofont-simple-up" />
            </a>
            <div id="faq2" className="collapse" data-parent=".faq-list">
              <p>
                Enterprise application development helps streamline and automate
                complex business processes, improving efficiency, collaboration,
                and productivity across your organization. Custom applications
                can be tailored to meet your specific business needs, from
                inventory management to HR systems, leading to better workflow
                and data management.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={200}>
            <a data-toggle="collapse" href="#faq3" className="collapsed">
              What are the benefits of using SaaS solutions for my business?{" "}
              <i className="icofont-simple-up" />
            </a>
            <div id="faq3" className="collapse" data-parent=".faq-list">
              <p>
                SaaS (Software as a Service) solutions offer businesses
                flexible, scalable, and cost-effective cloud-based applications.
                With SaaS, your team can access essential tools anytime,
                anywhere, without worrying about infrastructure, software
                updates, or maintenance. This helps you stay focused on your
                core business functions while benefiting from the latest
                technological advancements.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={300}>
            <a data-toggle="collapse" href="#faq4" className="collapsed">
              How can product strategy and development consulting help my app's
              success? <i className="icofont-simple-up" />
            </a>
            <div id="faq4" className="collapse" data-parent=".faq-list">
              <p>
                Product strategy and development consulting provides expert
                guidance at every stage of the app development process. From
                ideation to launch, consultants help align your app with your
                business goals, ensuring it addresses market needs, attracts
                users, and delivers a strong return on investment. The right
                strategy can make the difference between success and failure in
                the competitive app market.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={400}>
            <a data-toggle="collapse" href="#faq5" className="collapsed">
              What are IoT-enabled applications and how can they benefit my
              business? <i className="icofont-simple-up" />
            </a>
            <div id="faq5" className="collapse" data-parent=".faq-list">
              <p>
                IoT-enabled applications connect devices through the internet to
                gather and exchange data, enhancing user experiences and
                enabling smarter decision-making. For businesses, IoT apps can
                help monitor assets/assets1, improve operational efficiency, and provide
                real-time insights that enhance customer satisfaction, security,
                and product performance.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={500}>
            <a data-toggle="collapse" href="#faq6" className="collapsed">
              Is it necessary to choose between native, hybrid, and
              cross-platform app development?{" "}
              <i className="icofont-simple-up" />
            </a>
            <div id="faq6" className="collapse" data-parent=".faq-list">
              <p>
                The choice depends on your business needs and goals. Native apps
                offer superior performance and platform-specific features, while
                cross-platform apps allow you to reach both iOS and Android
                users with a single codebase. Hybrid apps combine the strengths
                of both, making them ideal for businesses that need to balance
                performance with cost-efficiency. A consultation can help you
                select the best approach based on your project requirements.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
  {/* End #main */}
  <a href="#" className="back-to-top">
    <i className="bx bxs-up-arrow-alt" />
  </a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</>

  
  );
};

export default MobileAppArea;
