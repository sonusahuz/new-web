import React from 'react';
import AboutAreaOne from '../components/AboutAreaOne';
import BannerOne from '../components/BannerOne';
import BlogAreaOne from '../components/BlogAreaOne';
import CaseStudyAreaOne from '../components/CaseStudyAreaOne';
import ContactAreaOne from '../components/ContactAreaOne';
import CounterAreaOne from '../components/CounterAreaOne';
import FaqAreaOne from '../components/FaqAreaOne';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import PricingAreaOne from '../components/PricingAreaOne';
import ServiceAreaOne from '../components/ServiceAreaOne';
import TeamAreaOne from '../components/TeamAreaOne';
import WorkProcessOne from '../components/WorkProcessOne';

const HomeOne = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Banner One */}
      <BannerOne />

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* About Area One */}
      <AboutAreaOne />

      {/* Case Study Area One */}
      <CaseStudyAreaOne />

      {/* Service Area One */}
      <ServiceAreaOne />

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Team Area One */}
      {/* <TeamAreaOne /> */}

      {/* Contact Area One */}
      <ContactAreaOne />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}

      {/* Blog Area One */}
      {/* <BlogAreaOne /> */}

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default HomeOne;
