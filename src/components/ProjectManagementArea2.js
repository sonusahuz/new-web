import React from 'react';
import { Helmet } from 'react-helmet';

const ProjectsManagement = () => {
  return (
    <>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
        rel="stylesheet"
      />

      {/* Vendor CSS Files */}
      <link
        href="assets/assetscross/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
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
      <div className="container-fluid text-white py-5">
        <div className="container">
          <div className="row align-items-center text-center text-lg-start">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">Project Management</h1>
              <p className="lead">
                Our PMO uses advanced tech for innovative, continuous
                development and effective governance.
              </p>
              <a href="#create-project" className="btn btn-primary">
                Get Started
              </a>
            </div>
            <div className="col-lg-6 text-lg-end">
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
                  <i className="bi bi-arrow-repeat" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Strategic Alignment
                    </a>
                  </h4>
                  <p className="description">
                    Ensures projects align with business goals for maximum
                    impact.
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
                  <i className="bi bi-cpu" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Resource Optimization
                    </a>
                  </h4>
                  <p className="description">
                    Manages resources effectively for enhanced efficiency and
                    cost savings.
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
                  <i className="bi bi-people-fill" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Risk Mitigation
                    </a>
                  </h4>
                  <p className="description">
                    Proactively addresses risks to ensure smooth, secure project
                    delivery.
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
              {/* <p class="who-we-are">Tailored project management solutions...</p> */}
              <h4>The Rise of Effective Project Management Solutions</h4>
              <p className="fst-italic">
                In today’s fast-paced business world, efficient project
                management is key to success. Nyas Consultants provides
                comprehensive solutions to help businesses optimize project
                workflows, reduce risks, and ensure timely deliveries. According
                to studies, organizations with strong project management
                practices are 20% more successful in achieving project goals.
                This article explores the essential strategies Nyas Consultants
                uses to ensure that projects are completed on time, within
                budget, and to the highest quality standards.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" />{' '}
                  <span>
                    Clear objectives set a strong foundation for effective
                    project delivery.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{' '}
                  <span>
                    Risk management practices ensure smooth project execution
                    and minimal delays.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{' '}
                  <span>
                    Resource management optimizes project costs and resource
                    allocation.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{' '}
                  <span>
                    Continuous monitoring ensures projects meet deadlines and
                    quality standards.
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
                    src="assets/assetscross/img/project-second.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-lg-12">
                      <img
                        src="assets/assetscross/img/project-second.1.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-12">
                      <img
                        src="assets/assetscross/img/project-second.2.png"
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
      <section id="faq" className="faq section py-5">
        <div className="section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>
            Optimizing processes, technology, support, and monitoring for
            business growth and success.
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is project management?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Project management is the process of planning, organizing, and
                  managing resources to achieve specific goals within a defined
                  timeline and budget. It ensures the effective execution of
                  projects to meet desired outcomes.
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Why is project management crucial for business success?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Project management ensures that projects are completed
                  efficiently, align with organizational goals, and meet quality
                  standards while staying within scope, time, and budget
                  constraints. This drives productivity and business growth.
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What role does risk management play in project management?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Risk management identifies, assesses, and mitigates potential
                  risks that could impact a project's success. Proactively
                  managing risks ensures smooth project execution and minimizes
                  unexpected challenges.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What tools or methodologies are commonly used in project
                  management?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Popular tools include Microsoft Project, Trello, and Asana.
                  Common methodologies include Agile, Scrum, Waterfall, and
                  Lean, depending on the project’s complexity and requirements.
                </div>
              </div>
            </div>

            {/* Add more FAQ items as needed */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsManagement;
