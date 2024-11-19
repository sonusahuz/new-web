import React from 'react';
import AboutAreaOne from '../components/AboutAreaOne';
import Breadcrumb from '../components/Breadcrumb';
import ContactAreaOne from '../components/ContactAreaOne';
import CounterAreaOne from '../components/CounterAreaOne';
import FaqAreaOne from '../components/FaqAreaOne';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import TeamAreaOne from '../components/TeamAreaOne';
import WorkProcessOne from '../components/WorkProcessOne';
import ServiceAreaOne from '../components/ServiceAreaOne';
import CaseStudyAreaOne from '../components/CaseStudyAreaOne';

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'About Us'} />

      {/* About Area One */}
      <AboutAreaOne />
      <CaseStudyAreaOne />

      {/* ServiceAreaOne */}
      {/* <ServiceAreaOne /> */}

    

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default About;
