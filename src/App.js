import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Technologies from './pages/Technologies';
import HomeOne from './pages/HomeOne';
import Service from './pages/Service';
import ServiceDetails from './pages/ServiceDetails';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import ServiceTwo from './pages/ServiceTwo';
import ServiceThree from './pages/ServiceThree';
import ServiceFour from './pages/ServiceFour';
import ServiceFive from './pages/ServiceFive';
import TeamTwo from './pages/TeamTwo';
import TeamThree from './pages/TeamThree';
import PriceOne from './pages/PriceOne';
import PriceTwo from './pages/PriceTwo';
import BlogTwo from './pages/BlogTwo';
import BlogThree from './pages/BlogThree';
import BlogFour from './pages/BlogFour';
import Project from './pages/Project';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from './pages/ProjectThree';
import MobileApp from './pages/MobileApp';
import CrossPlatformDevelopment from './pages/CrossPlatformDevelopment';
import VirtualAssistant from './pages/VirtualAssistant';
import MetaCampaign from './pages/MetaCampaign';
import DigitalProductDevelopment from './pages/DigitalProductDevelopment';
import ProjectManagement from './pages/ProjectManagement';
import LegalService from './pages/LegalService';
import CustomWebsiteDesign from './pages/CustomWebsiteDesign';
import MVPDevelopmentTesting from './pages/MVPDevelopmentDesign';
import UiuxDesignPrototype from './pages/UiuxDesignPrototype';
import BlockChainSolution from './pages/BlockChainSolution';
import ProjectManagement2 from './pages/ProjectManagement2';
import ThankYou from './pages/ThankYou';
import ChatBotBox from './components/ChatBotBox';
import ChatBotModal from './components/ChatBotModal';

function App() {
  const [openChatBox, setOpenChatBox] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: 'ease',
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeOne />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/thank-you" element={<ThankYou />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<ServiceThree />} />
        <Route exact path="/technologies" element={<Technologies />} />
        <Route exact path="/career" element={<Career />} />
        <Route
          exact
          path="/custom-website-design-development"
          element={<CustomWebsiteDesign />}
        />
        <Route
          exact
          path="/mvp-development-testing"
          element={<MVPDevelopmentTesting />}
        />
        <Route
          exact
          path="/ui-ux-design-prototyping"
          element={<UiuxDesignPrototype />}
        />
        {/* 5 part here  */}
        <Route
          exact
          path="/blockchain-solutions"
          element={<BlockChainSolution />}
        />
        <Route exact path="/mobile-app" element={<MobileApp />} />
        <Route exact path="/legal-services" element={<LegalService />} />
        {/* 9 part hre  */}
        <Route exact path="/virtual-assistant" element={<VirtualAssistant />} />
        <Route
          exact
          path="/project-management"
          element={<ProjectManagement />}
        />
        <Route
          exact
          path="/project-management-1"
          element={<ProjectManagement2 />}
        />
        <Route exact path="/meta-campaign" element={<MetaCampaign />} />
        <Route
          exact
          path="/cross-platfrom-development"
          element={<CrossPlatformDevelopment />}
        />
        a
        <Route
          exact
          path="/digital-product-development"
          element={<DigitalProductDevelopment />}
        />
      </Routes>
      <ScrollToTop smooth color="#246BFD" />
      <ChatBotBox openChatBox={openChatBox} setOpenChatBox={setOpenChatBox} />
      {openChatBox && (
        <ChatBotModal
          openChat={openChatBox}
          setOpenChat={() => setOpenChatBox(false)}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
