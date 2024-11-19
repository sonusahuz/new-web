import React from 'react';

const DigitalProductDevelopmentArea = () => {
  return (
    <>
      <link
        href="assets/assetsoftware/vendors/animate/animate.css"
        rel="stylesheet"
      />
      {/* Icon CSS*/}
      <link
        rel="stylesheet"
        href="assets/assetsoftware/vendors/font-awesome/css/font-awesome.min.css"
      />
      {/* Camera Slider */}
      <link
        rel="stylesheet"
        href="assets/assetsoftware/vendors/camera-slider/camera.css"
      />
      {/* Owlcarousel CSS*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/assetsoftware/vendors/owl_carousel/owl.carousel.css"
        media="all"
      />
      {/*Template Styles CSS*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/assetsoftware/css/style.css"
        media="all"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i,800,800i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese"
        rel="stylesheet"
      />
      <div className="service-bg-banner-img">
        <div className="overlay-all ">
          {/* Header_Area */}
          {/* header
         ================================================== */}
          {/* end s-header */}
          {/* End Header_Area */}
          {/* #banner start */}
          <section id="banner" className="py_120">
            <div className="container ">
              <div className="row">
                {/* #banner-text start */}
                <div id="banner-text" className="col-md-7 text-c text-left ">
                  <h5
                    className="wow fadeInUp main-h font_30"
                    data-wow-delay="0.2s"
                  >
                    Comprehensive Software Development
                    <br />
                    <span className="about_text ">
                      {' '}
                      Services for Modern Businesses
                    </span>
                  </h5>
                </div>
                {/* /#banner-text End */}
              </div>
            </div>
          </section>
          {/*#Our banner-shap- Area */}
          <div className="container-fluid p0 banner-shap-img"></div>
          {/*#EndOur banner-shap- Area */}
        </div>
      </div>
      {/* /#banner end */}
      {/* #About Us Area start */}
      <div id="about" className=" py-70 pb_90">
        <div className="container ">
          <div className="row text-left  ">
            <div className="col-md-5">
              <div className="service_left_text_top wow fadeInUp">
                <h1>
                  Full-Spectrum{' '}
                  <span className="font_style"> Software Development</span>
                  <br />
                  Services for Innovative <br /> Solutions
                </h1>
              </div>
            </div>
            <div className="col-md-7">
              <div
                className="service_left_text_top wow fadeInUp"
                style={{ textAlign: 'justify' }}
              >
                <p>
                  Our software development services are designed to empower
                  businesses with custom, robust solutions that align with their
                  unique goals. From tailored website development and MVP
                  testing to UI/UX design and ongoing maintenance, we ensure
                  digital experiences are secure, engaging, and up-to-date.
                  Additionally, our expertise in blockchain technology enables
                  us to create decentralized applications and smart contracts,
                  meeting the needs of forward-thinking enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* #About Us Area End */}
      {/* #service Us Area start */}
      {/* <div  id="about"  class="py-70">
   <div class="container">
      <div class="row about_row ">
         <!--#about-text start */}
      {/*#End service-text  */}
      {/* #service Us Area start */}
      <div id="about" className="py-70">
        <div className="container">
          <div className="row text-center mb-60">
            <div className="title wow fadeInUp">
              <h1>
                Empowering Business Growth with <br />
                Tailored Digital Solutions
              </h1>
            </div>
          </div>
          <div className="row about_row">
            {/* Custom Website Design & Development */}
            <div className="who_we_area col-md-4 col-sm-6 px_10 wow fadeInUp">
              <div className="service-about-services">
                <div className="wow fadeInUp">
                  <img src="assets/assetsoftware/images/web.png" />
                </div>
                <h2 className="unify_about">
                  {' '}
                  Custom Website Design &amp; Development{' '}
                </h2>
                <p>
                  Crafting engaging, responsive websites tailored to reflect
                  brand identity and meet unique business needs, enhancing user
                  engagement and online presence.
                </p>
              </div>
            </div>
            {/* MVP Development & Testing */}
            <div className="who_we_area col-md-4 col-sm-6 px_10 wow fadeInUp">
              <div className="service-about-services text-left">
                <div className="wow fadeInUp">
                  <img src="assets/assetsoftware/images/mvp.png" />
                </div>
                <h2 className="unify_about"> MVP Development &amp; Testing </h2>
                <p>
                  Building functional Minimum Viable Products (MVPs) quickly,
                  enabling businesses to validate ideas, attract stakeholders,
                  and gather real-user feedback.
                </p>
              </div>
            </div>
            {/* UI/UX Design & Prototyping */}
            <div className="who_we_area col-md-4 col-sm-6 px_10 wow fadeInUp">
              <div className="service-about-services">
                <div className="wow fadeInUp">
                  <img src="assets/assetsoftware/images/uiux.png" />
                </div>
                <h2 className="unify_about">
                  {' '}
                  UI/UX Design &amp; Prototyping{' '}
                </h2>
                <p>
                  Designing intuitive, visually appealing user interfaces and
                  experiences, ensuring that applications are accessible,
                  attractive, and easy to navigate.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt_20">
            {/* Ongoing Software & Website Maintenance */}
            <div className="who_we_area col-md-4 col-sm-6 px_10 wow fadeInUp">
              <div className="service-about-services">
                <div className="wow fadeInUp">
                  <img src="assets/assetsoftware/images/aintain.png" />
                </div>
                <h2 className="unify_about">
                  {' '}
                  Ongoing Software &amp; Website Maintenance{' '}
                </h2>
                <p>
                  Providing continuous support and updates to ensure software
                  and websites remain secure, optimized, and compatible with the
                  latest technologies.
                </p>
              </div>
            </div>
            {/* Blockchain Solutions & Decentralized Applications */}
            <div className="who_we_area col-md-4 col-sm-6 px_10 wow fadeInUp">
              <div className="service-about-services text-left">
                <div className="wow fadeInUp">
                  <img src="assets/assetsoftware/images/blockchain.png" />
                </div>
                <h2 className="unify_about">
                  {' '}
                  Blockchain Solutions &amp; Decentralized Applications{' '}
                </h2>
                <p>
                  Developing blockchain-powered applications, smart contracts,
                  and secure, transparent systems tailored to meet modern
                  business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*#End service-text  */}
      {/*Start Investment Planning*/}
      <div className="title wow fadeInUp ">
        <h1>Key Factors Driving Success in Digital Solutions</h1>
        <p>What makes us different from the other companies</p>
      </div>
      <section>
        <div className="container ">
          <div className="row">
            {/* <div className="col-lg-12 col-md-12 col-sm-8 col-xs-12 bhoechie-tab-container"> */}
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 bhoechie-tab py-0">
              {/* flight section */}
              <div className="bhoechie-tab-content active">
                <div className="col-md-12 py-0">
                  <img src="assets/assetsoftware/images/click_1.png" />
                </div>
              </div>
              {/* train section */}
              <div className="bhoechie-tab-content">
                <div className="col-md-12 py-0">
                  <img src="assets/assetsoftware/images/click_2.png" />
                </div>
              </div>
              <div className="bhoechie-tab-content">
                <div className="col-md-12 py-0">
                  <img src="assets/assetsoftware/images/click_3.png" />
                </div>
              </div>
              <div className="bhoechie-tab-content">
                <div className="col-md-12 py-0">
                  <img src="assets/assetsoftware/images/click_4.png" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 bhoechie-tab-menu tabs_box_s">
              <div className="list-group">
                <a href="#" className="list-group-item active">
                  <img
                    src="assets/assetsoftware/images/tabs_icone.png"
                    alt=""
                    className="fitter"
                  />
                  <h1 className="left-tabs-text">
                    {' '}
                    Enhanced Brand Presence and User Engagement{' '}
                  </h1>
                  <p>
                    A custom-designed website not only sets a brand apart from
                    competitors but also improves user experience, making it
                    easier for potential customers to engage with the brand
                    meaningfully.
                  </p>
                </a>
                <a href="#" className="list-group-item">
                  <img
                    src="assets/assetsoftware/images/tabs_icone.png"
                    alt=""
                    className="fitter"
                  />
                  <h1 className="left-tabs-text">
                    {' '}
                    Fast Market Validation with Minimal Risk{' '}
                  </h1>
                  <p>
                    MVP development allows businesses to bring their ideas to
                    market quickly and gather valuable user feedback. This early
                    validation helps in refining the product before committing
                    to full-scale development, saving time and resources.
                  </p>
                </a>
                <a href="#" className="list-group-item">
                  <img
                    src="assets/assetsoftware/images/tabs_icone.png"
                    alt=""
                    className="fitter"
                  />
                  <h1 className="left-tabs-text">
                    {' '}
                    Increased Accessibility and User Retention{' '}
                  </h1>
                  <p>
                    Effective UI/UX design makes digital products not only
                    visually appealing but also accessible and user-friendly,
                    which leads to higher user retention and
                    satisfaction—critical factors in today’s competitive market.
                  </p>
                </a>
                <a href="#" className="list-group-item">
                  <img
                    src="assets/assetsoftware/images/tabs_icone.png"
                    alt=""
                    className="fitter"
                  />
                  <h1 className="left-tabs-text">
                    {' '}
                    Long-Term Security and Compatibility{' '}
                  </h1>
                  <p>
                    Ongoing maintenance is vital for software and websites to
                    remain secure and operational. Regular updates ensure they
                    stay compatible with evolving technology standards and
                    cybersecurity measures, minimizing downtime and risk.
                  </p>
                </a>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      {/*Start Investment Planning*/}
      {/* #GROW YOUR BUSINESS Area start */}
      {/*#End Our footer Area */}
      {/* The following is only needed when the video is in the html
   otherwise the who .hero__overlay html can be removed */}
      <div className="hero__overlay">
        <div className="hero__modal">
          <a className="hero__close" href="#">
            Close
          </a>
          <iframe
            allowscriptaccess="always"
            id="hero-video"
            className="hero__player"
            src="https://www.youtube.com/embed/1NSA8ycGfKg?enablejsapi=1&html5=1"
            frameBorder={0}
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowFullScreen=""
          />
        </div>
        {/* /.hero__modal */}
      </div>
      {/* /.hero__overlay */}
      {/* jQuery JS */}
      {/* Bootstrap JS */}
      {/* Animate JS */}
      {/* Owlcarousel JS */}
      {/* Stellar JS*/}
      {/* Theme JS */}
    </>
  );
};

export default DigitalProductDevelopmentArea;
