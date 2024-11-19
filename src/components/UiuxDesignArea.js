import React from 'react';

const UiuxDesignArea = () => {
  return (
    <>
      <script src="assets/assetsuiuxdesign/js/bootstrap.min.js"></script>
      <script src="assets/assetsuiuxdesign/js/swiper.min.js"></script>
      <script src="assets/assetsuiuxdesign/js/purecounter.min.js"></script>
      <script src="assets/assetsuiuxdesign/js/isotope.pkgd.min.js"></script>
      <script src="assets/assetsuiuxdesign/js/scripts.js"></script>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
        rel="stylesheet"
      />
      <link
        href="assets/assetsuiuxdesign/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/assetsuiuxdesign/css/fontawesome-all.min.css"
        rel="stylesheet"
      />
      <link href="assets/assetsuiuxdesign/css/swiper.css" rel="stylesheet" />
      <link href="assets/assetsuiuxdesign/css/styles.css" rel="stylesheet" />

      <header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="h1-large">
                  UI/UX Design &<br />
                  Prototyping
                </h1>
              </div>
            </div>
          </div>
        </div>

        <video
          autoplay
          loop
          muted
          id="video-background"
          poster="assets/assetsuiuxdesign/images/header-background.jpg"
          playsinline
        >
          <source
            src="assets/assetsuiuxdesign/images/header-background-video.mp4"
            type="video/mp4"
          />
        </video>
      </header>

      <div id="introduction" className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="h2-heading text-left">
                Complete social media services
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <p className="p-heading text-justify">
                Exceptional UI/UX design is the backbone of any engaging digital
                experience. Nyas’s approach to UI/UX design prioritizes ease of
                use, aesthetic appeal, and meaningful user interactions to build
                products that resonate with users.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-left">Service Overview</h3>
              <p className="text-justify">
                UI/UX design encompasses creating both the visual and
                interactive elements of digital products, ensuring that
                applications and websites are intuitive, visually cohesive, and
                user-centered. Prototyping further allows businesses to test and
                refine designs before committing to full-scale development.
              </p>

              <h3 className="text-left">
                Why Effective UI/UX Design is Crucial
              </h3>
              <p className="text-justify">
                A well-designed user interface directly impacts customer
                satisfaction and retention. A poor user experience can lead to
                high bounce rates, low engagement, and loss of potential
                customers. Thoughtful UI/UX design makes applications easier to
                use, reduces friction in interactions, and can drive higher
                conversion rates by aligning the design with user behaviors and
                expectations.
              </p>

              <h3 className="text-left">Nyas’s Unique Value in UI/UX</h3>
              <p className="text-justify">
                Nyas focuses on data-driven and human-centered design to create
                digital experiences that are visually appealing and easy to
                navigate. Our team of designers and UX specialists uses design
                research, user personas, and A/B testing to create interfaces
                that are both functional and delightful. With tools like
                interactive prototypes, we enable clients to see, feel, and
                refine the design before development, ensuring a more seamless
                transition to the final product.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="filter bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="h2-heading">Steps in UI/UX Design Process</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="grid">
                <div className="element-item finance">
                  <a href="article.html">
                    <img
                      className="img-fluid"
                      src="assets/assetsuiuxdesign/images/project-1.jpg"
                      alt="alternative"
                    />
                    <p>
                      <strong>User Research and Persona Development</strong>-
                      Identifying target audience needs and behaviors to inform
                      design choices.
                    </p>
                  </a>
                </div>
                <div className="element-item finance">
                  <a href="article.html">
                    <img
                      className="img-fluid"
                      src="assets/assetsuiuxdesign/images/project-2.jpg"
                      alt="alternative"
                    />
                    <p>
                      <strong>Wireframing and Mockups</strong> - Creating
                      initial layouts to organize content, navigation, and
                      design elements.
                    </p>
                  </a>
                </div>
                <div className="element-item finance">
                  <a href="article.html">
                    <img
                      className="img-fluid"
                      src="assets/assetsuiuxdesign/images/project-3.jpg"
                      alt="alternative"
                    />
                    <p>
                      <strong>Visual Design</strong> - Developing the final
                      aesthetic, including typography, color schemes, and
                      branding elements.
                    </p>
                  </a>
                </div>
                <div className="element-item business finance">
                  <a href="article.html">
                    <img
                      className="img-fluid"
                      src="assets/assetsuiuxdesign/images/project-4.jpg"
                      alt="alternative"
                    />
                    <p>
                      <strong> Prototyping and Testing</strong> - Building
                      interactive prototypes to validate design flow, usability,
                      and user satisfaction.
                    </p>
                  </a>
                </div>
                <div className="element-item business finance">
                  <a href="article.html">
                    <img
                      className="img-fluid"
                      src="assets/assetsuiuxdesign/images/project-5.jpg"
                      alt="alternative"
                    />
                    <p>
                      <strong> Final Design and Handoff</strong> - Refining the
                      design based on feedback and preparing assets for
                      development.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Back To Top Button --> */}
      <button onclick="topFunction()" id="myBtn">
        <img src="images/up-arrow.png" alt="alternative" />
      </button>
      {/* <!-- end of back to top button --> */}

      {/* <!-- Scripts --> */}
      <script src="js/bootstrap.min.js"></script>
      {/* <!-- Bootstrap framework --> */}
      <script src="js/swiper.min.js"></script>
      {/* <!-- Swiper for image and text sliders --> */}
      <script src="js/purecounter.min.js"></script>
      {/* <!-- Purecounter counter for statistics numbers --> */}
      <script src="js/isotope.pkgd.min.js"></script>
      {/* <!-- Isotope for filter --> */}
      <script src="js/scripts.js"></script>
      {/* <!-- Custom scripts --> */}
    </>
  );
};

export default UiuxDesignArea;
