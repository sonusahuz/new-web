import React from 'react';

const ProjectsManagement = () => {
  return (
    <>
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
      {/* Hero Section */}
      <div className="container-fluid text-white py-2">
        <div className="container">
          <div className="row align-items-center justify-content-between text-left text-lg-start">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">
                Projects Management Dashboard
              </h1>
              <p className="lead">
                Efficiently manage your projects, track progress, and deliver
                outstanding results with our intuitive dashboard.
              </p>
              <a href="#create-project" className="btn btn-primary">
                Create New Project
              </a>
            </div>
            <div className="col-lg-6 py-5 text-center text-lg-end">
              <img
                src="assets/assetscross/img/project.png"
                alt="Projects Management"
                className="img-fluid"
                width={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Statistics */}
      <section id="services" className="services section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Optimizing processes, technology, support, and monitoring for
            business growth and success.
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="service-item item-cyan position-relative">
                <i className="bi bi-arrow-repeat icon" />{' '}
                {/* Workflow Optimization Icon */}
                <div>
                  <h3>Process Design &amp; Workflow Optimization</h3>
                  <p>
                    Streamlining processes to increase efficiency, reduce costs,
                    and establish smooth, standardized workflows across teams
                    and departments.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="service-item item-orange position-relative">
                <i className="bi bi-cpu icon" />{' '}
                {/* Digital Transformation Icon */}
                <div>
                  <h3>Digital Transformation &amp; Technology Enhancement</h3>
                  <p>
                    Implementing advanced technologies, from automation to AI,
                    to modernize operations, enhance productivity, and keep the
                    business future-ready.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="service-item item-teal position-relative">
                <i className="bi bi-person-lines-fill icon" />{' '}
                {/* Virtual Assistant Icon */}
                <div>
                  <h3>Virtual Assistant &amp; Administrative Support</h3>
                  <p>
                    Providing trained virtual assistants to handle
                    administrative tasks, client communications, and scheduling,
                    allowing businesses to focus on core objectives.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
              <div className="service-item item-red position-relative">
                <i className="bi bi-clock icon" /> {/* 24/7 Monitoring Icon */}
                <div>
                  <h3>24/7 Operations Monitoring &amp; Control Center</h3>
                  <p>
                    Offering round-the-clock monitoring and coordination to
                    ensure uninterrupted service and efficient management of
                    daily operations.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
              <div className="service-item item-indigo position-relative">
                <i className="bi bi-bar-chart-line icon" />{' '}
                {/* Business Development Icon */}
                <div>
                  <h3>Business Development &amp; CRM</h3>
                  <p>
                    Developing strategic initiatives to increase market reach,
                    attract new clients, and sustain long-term business growth
                    and brand recognition.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={600}>
              <div className="service-item item-pink position-relative">
                <i className="bi bi-graph-up-arrow icon" />{' '}
                {/* Performance Monitoring Icon (added service) */}
                <div>
                  <h3>Performance Monitoring</h3>
                  <p>
                    Regularly tracking project progress with data-driven
                    insights, enabling timely adjustments to meet deadlines and
                    stay on target.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>

      <section id="more-features" className="more-features section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <h3>Operations Consultancy Services by Nyas Consultants</h3>
              <p>
                Unlocking Efficiency, Innovation, and Growth through Expert
                Consultancy.
              </p>
              <div className="row">
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-cpu flex-shrink-0" />{' '}
                  {/* Operations Efficiency Icon */}
                  <div>
                    <h4>Enhancing Operational Efficiency</h4>
                    <p>
                      Streamlining workflows to improve productivity and reduce
                      costs.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-gear-wide-connected flex-shrink-0" />{' '}
                  {/* Digital Transformation Icon */}
                  <div>
                    <h4>Future-Proofing with Digital Transformation</h4>
                    <p>
                      Implementing AI and automation for modernized, productive
                      operations.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-person-circle flex-shrink-0" />{' '}
                  {/* Virtual Assistant Icon */}
                  <div>
                    <h4>Comprehensive Administrative Support</h4>
                    <p>
                      Providing virtual assistants for efficient administrative
                      assistance.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-graph-up-arrow flex-shrink-0" />{' '}
                  {/* Continuous Monitoring Icon */}
                  <div>
                    <h4>Continuous Monitoring for Seamless Operations</h4>
                    <p>
                      24/7 monitoring ensuring uninterrupted service and quick
                      responses.
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
              <img
                src="assets/assetscross/img/project2.png"
                alt="Operations Consultancy Services by Nyas Consultants"
              />
            </div>
          </div>
        </div>
      </section>
      {/* /More Features Section */}
      {/* Faq Section */}
      <section id="faq" className="faq section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay={100}>
              <div className="faq-container">
                <div className="faq-item faq-active">
                  <h3>What is Process Design &amp; Workflow Optimization?</h3>
                  <div className="faq-content">
                    <p>
                      Process Design &amp; Workflow Optimization focuses on
                      streamlining processes to increase efficiency, reduce
                      costs, and ensure standardized workflows across teams and
                      departments.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>
                    How does Digital Transformation &amp; Technology Enhancement
                    help my business?
                  </h3>
                  <div className="faq-content">
                    <p>
                      We implement advanced technologies, including automation
                      and AI, to modernize your operations, boost productivity,
                      and future-proof your business.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>
                    What benefits do Virtual Assistant &amp; Administrative
                    Support services offer?
                  </h3>
                  <div className="faq-content">
                    <p>
                      Our trained virtual assistants handle administrative
                      tasks, client communications, and scheduling, allowing
                      your business to focus on core operations.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>
                    How does the 24/7 Operations Monitoring &amp; Control Center
                    improve service?
                  </h3>
                  <div className="faq-content">
                    <p>
                      We provide round-the-clock monitoring and coordination to
                      ensure uninterrupted services and efficient daily
                      operations management.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>
                    How can Business Development &amp; CRM services help grow my
                    business?
                  </h3>
                  <div className="faq-content">
                    <p>
                      Our strategic initiatives help increase market reach,
                      attract new clients, and sustain long-term growth and
                      brand recognition for your business.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>
                    Why is Performance Monitoring important for my business
                    operations?
                  </h3>
                  <div className="faq-content">
                    <p>
                      Regular performance tracking with data-driven insights
                      enables us to make timely adjustments, ensuring projects
                      stay on target and deadlines are met.
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
    </>
  );
};

export default ProjectsManagement;
