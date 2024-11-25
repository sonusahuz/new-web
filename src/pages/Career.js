import React from 'react';
import NavBar from '../components/NavBar';
import BannerTen from '../components/BannerTen';
import WhyChooseTwo from '../components/WhyChooseTwo';

import FooterOne from '../components/FooterOne';
import CareerAreaOne from '../components/CareerAreaOne';
import WorkProcessTwo from '../components/WorkProcessTwo';

const Career = () => {
  return (
    <>
      {/* NavbarEight */}
      <NavBar />

      <div
        style={{
          backgroundImage: 'url("./assets/img/contact-background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* WhyChooseTwo */}
        <CareerAreaOne />

        <WorkProcessTwo />
      </div>

      {/* ServiceAreaNine */}
      {/* <ServiceAreaNine /> */}

      {/* WorkProcessEight */}
      {/* <WorkProcessEight /> */}

      {/* TestimonialNine */}
      {/* <TestimonialNine /> */}

      {/* BlogAreaENine */}
      {/* <BlogAreaENine /> */}

      <FooterOne />
    </>
  );
};

export default Career;
