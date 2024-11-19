import React from 'react';
import NavBar from '../components/NavBar';
import FooterOne from '../components/FooterOne';
import CustomWebsiteDesignArea from '../components/CustomWebsiteDesignArea';

const CustomWebsiteDesign = () => {
  return (
    <div>
      {/* NavbarEight */}
      <NavBar />

      <CustomWebsiteDesignArea />

      {/* FooterNine */}
      <FooterOne />
    </div>
  );
};

export default CustomWebsiteDesign;
