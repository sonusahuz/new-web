import React from 'react';

const UiuxDesignArea = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
        rel="stylesheet"
      />

      <link
        href="/assets/uiuxdesign/css/fontawesome-all.min.css"
        rel="stylesheet"
      />
      <link href="/assets/uiuxdesign/css/swiper.css" rel="stylesheet" />

      <link rel="icon" href="images/favicon.png" />
      {/* Header Section */}
      <header className="header position-relative py-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center flex-wrap mx-auto">
            {/* Text Section */}
            <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold text-black">
                UI/UX Design &<br /> Prototyping
              </h1>
            </div>
            {/* Image Section */}
            <div className="col-12 col-md-6 text-center">
              <img
                src={'/assets/uiuxdesign/images/ui-ux.png'}
                className="img-fluid ui-img"
                alt="UI/UX Design Logo"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 text-left">
            Crafting Engaging Digital Experiences
          </h2>
          <p className="text-justify">
            At Nyas, we combine aesthetic design with seamless functionality to
            create intuitive and visually captivating digital products. Our
            user-centered approach ensures every interaction is meaningful,
            leaving a lasting impression on your audience.
          </p>
          <h3 className="mt-5">Service Overview</h3>
          <p className="text-justify">
            UI/UX design encompasses creating both the visual and interactive
            elements of digital products, ensuring that applications and
            websites are intuitive, visually cohesive, and user-centered.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Steps in UI/UX Design Process</h2>
          <div className="row gy-4">
            {[
              {
                title: 'User Research and Persona Development',
                description:
                  'Identifying target audience needs and behaviors to inform design choices.',
                image: 'assets/uiuxdesign/images/project-1.jpg',
              },
              {
                title: 'Wireframing and Mockups',
                description:
                  'Creating initial layouts to organize content, navigation, and design elements.',
                image: 'assets/uiuxdesign/images/project-2.jpg',
              },
              {
                title: 'Visual Design',
                description:
                  'Developing the final aesthetic, including typography, color schemes, and branding elements.',
                image: 'assets/uiuxdesign/images/project-3.jpg',
              },
              {
                title: 'Prototyping and Testing',
                description:
                  'Building interactive prototypes to validate design flow, usability, and user satisfaction.',
                image: 'assets/uiuxdesign/images/project-4.jpg',
              },
              {
                title: 'Final Design and Handoff',
                description:
                  'Refining the design based on feedback and preparing assets for development.',
                image: 'assets/uiuxdesign/images/project-5.jpg',
              },
            ].map((step, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="card h-100">
                  <img
                    src={`/${step.image}`}
                    className="card-img-top"
                    alt={step.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{step.title}</h5>
                    <p className="card-text">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-black text-left container">
        <p className="mb-0">
          Nyas’s UI/UX services ensure seamless digital experiences. Contact us
          today to transform your ideas into engaging designs.
        </p>
      </footer>
    </>
  );
};

export default UiuxDesignArea;
