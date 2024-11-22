import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ContactMain from '../components/ContactMain';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Contact;
