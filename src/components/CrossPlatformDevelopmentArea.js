import React from "react";

const CrossPlatformDevelopmentArea = () => {
  return (
    <>
 
  <link href="https://fonts.googleapis.com" rel="preconnect" />
  <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <link href="assets/assetscross/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"></link>
  {/* Vendor CSS Files */}
  <link href="assets/assetscross/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
  <link href="assets/assetscross/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  {/* Main CSS File */}
  <link href="assets/assetscross/css/main.css" rel="stylesheet" />
  
  <main className="main">
    {/* Hero Section */}
    <section id="hero" className="hero section">
      <div className="hero-bg">
        <img src="assets/assetscross/img/hero-bg-light.webp" alt="" />
      </div>
      <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-up">
            Cross <span>Platform</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay={100}>
            Boost your business with cross-platform app development using React
            Native and Flutter. <br />
          </p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
            <a href="#about" className="btn-get-started">
              Get Started
            </a>
            {/* <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
          </div>
          <img
            src="assets/assetscross/img/hero-services-img1.png"
            className="img-fluid hero-img"
            alt=""
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
            data-aos-delay={50}
          >
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-laptop" />
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">
                    Native Apps
                  </a>
                </h4>
                <p className="description">
                  Build separate apps for each platform, using platform-specific
                  languages.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-xl-4 col-lg-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-file-code-fill" />
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">
                    Progressive Web Apps
                  </a>
                </h4>
                <p className="description">
                  {" "}
                  Combine web and app features, accessible via browsers on all
                  devices.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-xl-4 col-lg-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-code-square" />
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">
                    Cross-Platform Apps
                  </a>
                </h4>
                <p className="description">
                  Write shareable code, build apps for both iOS and Android.
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
            <p className="who-we-are">Cross-platform mobile development...</p>
            <h4>The Rise of Cross-Platform Mobile Development</h4>
            <p className="fst-italic">
              As businesses face the growing challenge of developing mobile apps
              for both Android and iOS, cross-platform mobile development has
              emerged as a popular solution. This approach allows companies to
              reach a wider audience without the need to build separate apps for
              each platform. Statista reports that as of Q3 2022, Android and
              iOS together accounted for 99% of the global mobile operating
              system market, with millions of apps available across both
              platforms. In this article, we explore why more developers are
              choosing cross-platform solutions to efficiently create apps that
              cater to both audiences.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>
                  Native apps require separate development for Android and iOS.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>
                  PWAs combine web and app features with limited functionality.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>
                  Cross-platform apps share code, saving time and cost.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>
                  Hybrid apps combine native and web technologies with
                  performance issues.
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
                  src="assets/assetscross/img/reactfinal.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <img
                      src="assets/assetscross/img/ios1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-12">
                    <img
                      src="assets/assetscross/img/react-1.png"
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
          Tailored web solutions, app support, marketing, analytics, SEO, and
          custom software development.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="service-item item-cyan position-relative">
              <i className="bi bi-phone icon" />{" "}
              {/* Custom App Development Icon */}
              <div>
                <h3>Custom App Development</h3>
                <p>
                  Build tailored mobile apps for Android and iOS with reusable
                  code to ensure efficient performance and a seamless user
                  experience across platforms.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="service-item item-orange position-relative">
              <i className="bi bi-brush icon" /> {/* UI/UX Design Icon */}
              <div>
                <h3>UI/UX Design</h3>
                <p>
                  Craft intuitive, visually appealing user interfaces optimized
                  for cross-platform apps, ensuring a consistent and engaging
                  experience for both Android and iOS users.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="service-item item-teal position-relative">
              <i className="bi bi-tools icon" />{" "}
              {/* App Maintenance & Support Icon */}
              <div>
                <h3>App Maintenance &amp; Support</h3>
                <p>
                  Provide ongoing updates and troubleshooting to maintain the
                  optimal performance of your cross-platform apps, ensuring
                  long-term functionality and user satisfaction across devices.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
            <div className="service-item item-red position-relative">
              <i className="bi bi-code-slash icon" />{" "}
              {/* App Integration Services Icon */}
              <div>
                <h3>App Integration Services</h3>
                <p>
                  Integrate third-party APIs, services, and backend systems into
                  your cross-platform apps, ensuring smooth functionality and
                  seamless data flow between different platforms.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
            <div className="service-item item-indigo position-relative">
              <i className="bi bi-check-circle icon" />{" "}
              {/* App Testing Services Icon */}
              <div>
                <h3>App Testing Services</h3>
                <p>
                  Conduct comprehensive testing across Android and iOS to ensure
                  your cross-platform app’s reliability, performance, and
                  functionality meet high standards and user expectations.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={600}>
            <div className="service-item item-pink position-relative">
              <i className="bi bi-arrow-right-circle icon" />{" "}
              {/* App Migration Solutions Icon */}
              <div>
                <h3>App Migration Solutions</h3>
                <p>
                  Transition from native apps to cross-platform frameworks like
                  React Native and Flutter, ensuring a smooth, cost-effective
                  migration while retaining core app functionalities.
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
            <h3>Cross-Platform Solutions</h3>
            <p>
              Delivering seamless experiences across platforms for efficient,
              scalable growth.
            </p>
            <div className="row">
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-laptop flex-shrink-0" />
                <div>
                  <h4>Unified Experience</h4>
                  <p>
                    Cross-platform integration ensures consistency across all
                    user devices.
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-gear flex-shrink-0" />
                <div>
                  <h4>Operational Efficiency</h4>
                  <p>
                    Streamline processes, reducing duplication and improving
                    workflow consistency.
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-globe flex-shrink-0" />
                <div>
                  <h4>Market Reach</h4>
                  <p>
                    Expand reach by targeting diverse user bases across
                    platforms.
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-arrow-up-right-circle flex-shrink-0" />
                <div>
                  <h4>Scalability Potential</h4>
                  <p>
                    Easily scale applications to meet growing market and user
                    demands.
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
            <img src="assets/assetscross/img/features-14.png" alt="" />
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
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay={100}>
            <div className="faq-container">
              <div className="faq-item faq-active">
                <h3>What is cross-platform app development?</h3>
                <div className="faq-content">
                  <p>
                    Cross-platform app development refers to creating mobile
                    applications that can run on both Android and iOS using a
                    single codebase. This reduces development time and costs
                    while ensuring a consistent user experience across devices.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
              <div className="faq-item">
                <h3>
                  Why should I choose cross-platform development over native
                  development?
                </h3>
                <div className="faq-content">
                  <p>
                    Cross-platform development allows you to maintain one
                    codebase for both Android and iOS, saving time and money.
                    It's ideal for businesses that need to target both platforms
                    but want to avoid duplicating efforts.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
              <div className="faq-item">
                <h3>
                  Which frameworks do you use for cross-platform development?
                </h3>
                <div className="faq-content">
                  <p>
                    At Nyas Consultants, we use industry-leading frameworks such
                    as React Native and Flutter to build robust, scalable, and
                    high-performance mobile applications for both Android and
                    iOS platforms.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
              <div className="faq-item">
                <h3>How long does it take to develop a cross-platform app?</h3>
                <div className="faq-content">
                  <p>
                    The timeline for developing a cross-platform app depends on
                    the complexity of the project, features, and
                    functionalities. Typically, the development process takes
                    between 8 to 16 weeks, but this can vary.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
              <div className="faq-item">
                <h3>
                  Will my cross-platform app perform as well as a native app?
                </h3>
                <div className="faq-content">
                  <p>
                    Yes, with the right framework and optimization techniques,
                    cross-platform apps can perform almost identically to native
                    apps in terms of speed, user experience, and functionality.
                    We ensure that performance is optimized during development.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
              <div className="faq-item">
                <h3>
                  Can you migrate my existing native app to a cross-platform
                  solution?
                </h3>
                <div className="faq-content">
                  <p>
                    Absolutely! Nyas Consultants can help migrate your existing
                    native app to a cross-platform framework like React Native
                    or Flutter, ensuring a smooth transition without losing
                    functionality or user experience.
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

export default CrossPlatformDevelopmentArea;
