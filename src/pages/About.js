import React from 'react';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import WorkProcessOne from '../components/WorkProcessOne';
import AboutAreaTwo from '../components/AboutAreaTwo';

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      <div
        style={{
          backgroundImage: 'url("./assets/img/contact-background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* About Area One */}
        <AboutAreaTwo />

        {/* Work Process One */}
        <WorkProcessOne />
      </div>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default About;
