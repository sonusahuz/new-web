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
              <p class="who-we-are">Tailored project management solutions...</p>
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
                  Project management is the process of planning, executing, and
                  overseeing projects to achieve defined objectives efficiently,
                  ensuring proper resource utilization and timely delivery.
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
                  Why is project management important for business success?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Effective project management ensures that projects align with
                  business goals, use resources efficiently, stay on schedule,
                  and meet quality standards, driving overall business growth.
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
                  What are the key stages of a project management process?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Key stages include goal setting, planning, execution,
                  monitoring, risk management, and communication to ensure a
                  structured approach and successful project completion.
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How does risk management play a role in project management?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Risk management involves identifying potential risks,
                  assessing their impact, and developing mitigation strategies
                  to minimize disruptions and keep projects on track.
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  What tools or methodologies do you use in project management?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We use a combination of methodologies like Agile, Scrum, and
                  traditional project management tools, tailored to each
                  project’s needs for optimal results.
                </div>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  How do you ensure stakeholder alignment throughout a project?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We maintain open communication channels, provide regular
                  updates, and involve stakeholders in key decisions to ensure
                  their alignment and satisfaction.
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
