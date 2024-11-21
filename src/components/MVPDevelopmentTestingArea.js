import React from 'react';

const MVPDevelopmentTestingArea = () => {
  return (
    <div className='px-2'>
      {/* Header Section */}
      <div className="header_section bg-light">
        <div className="banner_main text-center py-5">
          <h1 className="banner_taital display-4">MVP Development</h1>
          <h2 className="banner_taital_1 display-5"> & Testing</h2>
          <p className="banner_text mt-3">
            Efficient MVP development and testing ensures rapid iteration and
            validation of core functionalities for optimal product-market fit.
          </p>
          <div className="btn_main mt-4">
            <a href="#" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about_section layout_padding py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="about_taital fs-2">Nyas’s MVP Approach</h1>
              <p className="about_text">
                Launching a new product requires validation with real users to
                ensure market fit and reduce development risks. Nyas’s MVP
                development approach helps businesses bring ideas to life,
                gather feedback, and iteratively enhance the product to meet
                user expectations.
              </p>
              <div className="btn_main mt-4">
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center mt-4">
              <img
                src="assets/assetsmvpdevelopment&testing/images/mvpdev.png"
                alt="MVP Development"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services_section layout_padding py-5 bg-light">
        <div className="container">
          {/* First Row */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 text-center">
              <img
                src="assets/assetsmvpdevelopment&testing/images/img-2.png"
                alt="Service Overview"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 border">
              <h1 className="services_taital fs-1">Service Overview</h1>
              <p className="dummy_text">
                Minimum Viable Product (MVP) development focuses on building a
                streamlined version of a product that includes only core
                functionalities. This approach allows businesses to quickly test
                and validate ideas, attract initial users, and gather insights
                for future development stages.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-lg-2 text-center">
              <img
                src="assets/assetsmvpdevelopment&testing/images/img-3.png"
                alt="Why MVP"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 order-lg-1 border">
              <h1 className="technology_text fs-1">Why MVP Development Matters</h1>
              <p className="dummy_text">
                For startups and companies entering new markets, MVP development
                is crucial for minimizing investment risks. By developing a lean
                version of the product, businesses can test hypotheses, attract
                early adopters, and gather real-world feedback without the
                expense and time commitment of a fully developed product.
              </p>
            </div>
          </div>

          {/* Third Row */}
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <img
                src="assets/assetsmvpdevelopment&testing/images/img-4.png"
                alt="How Nyas Stands Out"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 border">
              <h1 className="technology_text fs-1">How Nyas Stands Out</h1>
              <p className="dummy_text">
                Nyas emphasizes speed, functionality, and testing in its MVP
                development process. Using agile methodologies, our team helps
                clients prioritize features and rapidly prototype a working
                product. We collaborate closely to align each iteration with
                user feedback, ensuring the MVP can serve as a strong foundation
                for scalable growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Works Section */}
      <div className="works_section layout_padding py-5">
        <div className="container">
          <h4 className="work_taital text-center mb-5 fs-1">
            Key Steps in MVP Development
          </h4>
          <div className="row text-center">
            {[
              {
                title: 'Requirement Gathering and Prioritization',
                text: 'Identifying and selecting essential features to create a product that captures the core value.',
              },
              {
                title: 'Prototyping and Wireframing',
                text: 'Developing low-fidelity models that allow clients and stakeholders to visualize functionality.',
              },
              {
                title: 'Iterative Development',
                text: 'Building and testing each core feature, continuously refining the MVP based on feedback.',
              },
              {
                title: 'Launch and User Testing',
                text: 'Releasing the MVP to gather user insights, monitor interactions, and make data-driven improvements.',
              },
              {
                title: 'Post-Launch Analysis and Enhancement',
                text: 'Using feedback to plan and prioritize features for the next development stage.',
              },
            ].map((step, index) => (
              <div
                className="col-md-4 mb-4 border p-4 mx-2 mx-auto"
                key={index}
              >
                <h5 className="fully_text">{step.title}</h5>
                <p className="lorem_text">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="text-left mt-4">
            <p>
              Nyas’s MVP development services allow businesses to launch with
              confidence, knowing their product is supported by real user
              feedback and built with a scalable, user-centric approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVPDevelopmentTestingArea;
