import React from 'react';

const MobileAppArea = () => {
  const accordionArr = [
    {
      id: 'One',
      question:
        'What is the difference between native mobile app development and cross-platform app development?',
      answer:
        'Native mobile app development focuses on creating apps for specific platforms like Android or iOS, ensuring optimal performance and deep integration with device features. Cross-platform app development, on the other hand, uses a single codebase to create apps that work on both iOS and Android, saving development time and cost, but might sacrifice some performance and native features.',
    },
    {
      id: 'Two',
      question:
        'How can enterprise application development improve my business operations?',
      answer:
        'Enterprise application development helps streamline and automate complex business processes, improving efficiency, collaboration, and productivity across your organization. Custom applications can be tailored to meet your specific business needs, from inventory management to HR systems, leading to better workflow and data management.',
    },
    {
      id: 'Three',
      question:
        'What are the benefits of using SaaS solutions for my business?',
      answer:
        'SaaS (Software as a Service) solutions offer businesses flexible, scalable, and cost-effective cloud-based applications. With SaaS, your team can access essential tools anytime, anywhere, without worrying about infrastructure, software updates, or maintenance. This helps you stay focused on your core business functions while benefiting from the latest technological advancements.',
    },
    {
      id: 'Four',
      question:
        "How can product strategy and development consulting help my app's success?",
      answer:
        'Product strategy and development consulting provides expert guidance at every stage of the app development process. From ideation to launch, consultants help align your app with your business goals, ensuring it addresses market needs, attracts users, and delivers a strong return on investment. The right strategy can make the difference between success and failure in the competitive app market.',
    },
    {
      id: 'Five',
      question:
        'What are IoT-enabled applications and how can they benefit my business?',
      answer:
        'IoT-enabled applications connect devices through the internet to gather and exchange data, enhancing user experiences and enabling smarter decision-making. For businesses, IoT apps can help monitor assets, improve operational efficiency, and provide real-time insights that enhance customer satisfaction, security, and product performance.',
    },
    {
      id: 'Six',
      question:
        'Is it necessary to choose between native, hybrid, and cross-platform app development?',
      answer:
        'The choice depends on your business needs and goals. Native apps offer superior performance and platform-specific features, while cross-platform apps allow you to reach both iOS and Android users with a single codebase. Hybrid apps combine the strengths of both, making them ideal for businesses that need to balance performance with cost-efficiency. A consultation can help you select the best approach based on your project requirements.',
    },
  ];

  const services = [
    {
      img: 'assets/img/1.png',
      title: 'Mobile App Development (Android & iOS)',
      description:
        'Developing high-quality, responsive mobile applications for Android and iOS platforms, offering seamless experiences on all devices. ',
    },
    {
      img: 'assets/img/2.png',
      title: 'Enterprise Application Development',
      description:
        'Creating robust, scalable applications to support complex organizational operations, improve workflow efficiency, and boost productivity',
    },
    {
      img: 'assets/img/3.png',
      title: 'SaaS Integration & Cloud Application Development ',
      description:
        'Building Software as a Service (SaaS) solutions, offering scalable, cloud-based applications accessible to businesses and users anytime, anywhere. ',
    },
  ];

  return (
    <div
      style={{
        backgroundImage: 'url("./assets/img/contact-background.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '0',
        margin: '0',
      }}
    >
      {/* Header Section */}
      <div className="container d-flex flex-wrap align-items-center justify-content-between py-5">
        <h1
          data-aos="fade-up"
          data-aos-delay={100}
          className="text-black fw-bold fs-1"
          style={{
            fontFamily: 'sans-serif',
          }}
        >
          DIGITAL APP DEVELOPMENT
        </h1>
        <img
          src="./assets/img/4-removebg-preview.png"
          className="img-fluid animated-image"
          alt="Digital Development"
          style={{ maxWidth: '400px' }}
        />
      </div>

      {/* Empowerment Section */}
      <div className="container">
        <div data-aos="fade-up" data-aos-delay={100}>
          <h1
            className="text-black text-center py-3 fw-bold fs-1"
            style={{ fontSize: '60px', fontFamily: 'sans-serif' }}
          >
            DIGITAL EMPOWERMENT SOLUTIONS
          </h1>
          <p className="text-black">
            At Nyas Consultants, we specialize in delivering comprehensive
            Digital App Development Services designed to empower your business.
            From scalable mobile apps to enterprise solutions, SaaS platforms,
            and IoT integration, our offerings are tailored to meet your unique
            needs. Backed by expert strategy and consulting, we ensure your app
            aligns seamlessly with your business objectives, driving efficiency,
            engagement, and growth.
          </p>
        </div>
      </div>

      {/* Innovative Solutions Section */}
      <div className="container my-5" data-aos="fade-up" data-aos-delay={100}>
        <h1
          className="text-black text-center fw-bold fs-1"
          style={{ fontSize: '60px', fontFamily: 'sans-serif' }}
        >
          INNOVATIVE DIGITAL SOLUTIONS
        </h1>
        <div className="row align-items-center mt-4">
          <div className="col-lg-6 mb-3">
            <p className="text-black">
              At Nyas, we specialize in delivering high-quality digital
              solutions across mobile app development, enterprise applications,
              SaaS, cloud solutions, IoT, and product strategy consulting,
              ensuring businesses stay ahead of the curve.
            </p>
            <ul className="list-unstyled">
              <li className="text-black mb-2">
                <i className="bi bi-check2-all text-success fs-5"></i>{' '}
                High-quality mobile apps for Android and iOS.
              </li>
              <li className="text-black mb-2">
                <i className="bi bi-check2-all text-success fs-5"></i> Robust
                enterprise apps to streamline business operations.
              </li>
              <li className="text-black mb-2">
                <i className="bi bi-check2-all text-success fs-5"></i> Scalable
                SaaS and cloud solutions for businesses.
              </li>
              <li className="text-black mb-2">
                <i className="bi bi-check2-all text-success fs-5"></i> Product
                strategy consulting for successful app launches.
              </li>
              <li className="text-black">
                <i className="bi bi-check2-all text-success fs-5"></i>{' '}
                IoT-driven applications enhancing operational efficiency and
                experiences.
              </li>
            </ul>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="./assets/img/5-removebg-preview.png"
              className="img-fluid animated-image"
              alt="Innovative Solutions"
              style={{ maxWidth: '900px' }}
            />
          </div>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <h1
          className="text-black text-center fw-bold fs-1"
          style={{ fontSize: '60px' }}
        >
          COMPREHENSIVE MOBILE & ENTERPRISE APPLICATION DEVELOPMENT SOLUTIONS
        </h1>
        <div className="row mt-5">
          {services.map((service, index) => (
            <div
              className="col-xl-4 col-md-6 animated-image hover-scale"
              style={{
                transition: 'transform 0.3s ease',
                transform: 'scale(1)',
              }}
              key={index}
            >
              <div className="style-4 text-center">
                <div className="thumb">
                  <img
                    src={service.img}
                    alt={`${service.title} image`}
                    style={{
                      width: '350px',
                      height: '350px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="details mb-4 p-4">
                  <h5 className="mb-3">{service.title}</h5>
                  <p className="content mb-0">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container">
        <section id="faq" className="py-5">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="accordionExample">
            {accordionArr.map((item, index) => (
              <div className="accordion-item" key={item.id}>
                <h2 className="accordion-header" id={`heading${item.id}`}>
                  <button
                    className="accordion-button bg-white hover:border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${item.id}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`collapse${item.id}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${item.id}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? 'show' : ''
                  }`}
                  aria-labelledby={`heading${item.id}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileAppArea;
