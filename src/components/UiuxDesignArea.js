import React from 'react';

const UiuxDesignArea = () => {
  return (
    <>
      {/* Header Section */}
      <header
        className="header position-relative"
        style={{
          height: '100vh',
          backgroundImage:
            'url(assets/assetsuiuxdesign/images/header-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="header-content text-center text-light d-flex align-items-center justify-content-center vh-100">
          <div className="container">
            <h1 className="display-4 fw-bold text-white">
              UI/UX Design &<br /> Prototyping
            </h1>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 text-left">Complete Social Media Services</h2>
          <p className="text-justify">
            Exceptional UI/UX design is the backbone of any engaging digital
            experience. Nyas’s approach to UI/UX design prioritizes ease of use,
            aesthetic appeal, and meaningful user interactions to build products
            that resonate with users.
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
                image: 'assets/assetsuiuxdesign/images/project-1.jpg',
              },
              {
                title: 'Wireframing and Mockups',
                description:
                  'Creating initial layouts to organize content, navigation, and design elements.',
                image: 'assets/assetsuiuxdesign/images/project-2.jpg',
              },
              {
                title: 'Visual Design',
                description:
                  'Developing the final aesthetic, including typography, color schemes, and branding elements.',
                image: 'assets/assetsuiuxdesign/images/project-3.jpg',
              },
              {
                title: 'Prototyping and Testing',
                description:
                  'Building interactive prototypes to validate design flow, usability, and user satisfaction.',
                image: 'assets/assetsuiuxdesign/images/project-4.jpg',
              },
              {
                title: 'Final Design and Handoff',
                description:
                  'Refining the design based on feedback and preparing assets for development.',
                image: 'assets/assetsuiuxdesign/images/project-5.jpg',
              },
            ].map((step, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="card h-100">
                  <img
                    src={step.image}
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
