import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    img: 'assets/img/service1.png',
    title: 'Digital App Development Services',
    description:
      'We specialize in developing cutting-edge digital applications, delivering scalable solutions for mobile, enterprise, SaaS, and IoT platforms. Our expert strategy and consulting services ensure each solution is tailored to align perfectly with your business goals, driving efficiency and growth.',
    link: '/mobile-app',
  },
  {
    img: 'assets/img/service2.png',
    title: 'Cross Platform Apps Development',
    description:
      'Cross-platform mobile development allows businesses to efficiently create high-quality apps for Android and iOS using shared code. This approach reduces costs and development time while ensuring seamless performance, enabling you to effect.',
    link: '/cross-platfrom-development',
  },
  {
    img: 'assets/img/service3.png',
    title: 'Software Development',
    description:
      'We deliver tailored software solutions to drive your business forward, offering website development, MVP testing, UI/UX design, ongoing maintenance, and blockchain integration. Our expertise ensures secure, innovative, and user-focused digital experiences that keep you ahead of the curve.',
    link: '/digital-product-development',
  },
  {
    img: 'assets/img/service4.png',
    title: 'Operations Consultancy Services',
    description:
      'Nyas Consultants drive business success by streamlining operations through advanced process improvement, strategic technology integration, expert virtual assistant support, continuous performance monitoring, and targeted business development. We deliver efficiency.',
    link: '/project-management',
  },
  {
    img: 'assets/img/service5.png',
    title: 'Digital Marketing',
    description:
      'Nyas Consultants delivers targeted digital marketing solutions to amplify your online presence. From SEO optimization to high-converting Google Ads and Meta campaigns, we drive traffic, generate quality leads, and accelerate business growth with strategies designed for measurable success.',
    link: '/meta-campaign',
  },
  {
    img: 'assets/img/service6.png',
    title: 'Legal Service',
    description:
      'Nyas delivers expert legal support to attorneys, law firms, and businesses, ensuring seamless compliance and precision in handling legal requirements. Our services streamline processes and provide thorough, efficient preparation for all legal matters, empowering you to achieve your objectives confidently.',
    link: '/legal-services',
  },
];

const ServiceAreaGroupThree = () => {
  return (
    <>
      {/* Background Banner */}
      <div
        style={{
          backgroundImage: 'url("./assets/img/about-background.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
        }}
      >
        <div className="container d-flex align-items-center justify-content-start">
          <h1 className="text-white" style={{ fontSize: '50px' }}>
            OUR SERVICES
          </h1>
        </div>
      </div>

      {/* Section Title */}
      <div>
        <h1 className="text-center fw-bold fs-1 py-4">
          Comprehensive Business Solutions with Nyas Consultants!
        </h1>
      </div>

      {/* Services */}
      <div className="service-area bg-relative">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-work-process-inner">
                  <div className="thumb mb-3">
                    <img
                      src={service.img}
                      style={{ width: '100%' }}
                      alt={service.title}
                    />
                  </div>
                  <div className="details">
                    <h5 className="mb-3">{service.title}</h5>
                    <p className="content mb-3">{service.description}</p>
                    <Link className="read-more-text" to={service.link}>
                      Read More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaGroupThree;
