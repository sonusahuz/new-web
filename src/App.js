import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Technologies from './pages/Technologies';
import HomeFour from './pages/HomeFour';
import HomeOne from './pages/HomeOne';
import HomeThree from './pages/HomeThree';
import HomeTwo from './pages/HomeTwo';
import Service from './pages/Service';
import ServiceDetails from './pages/ServiceDetails';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import HomeFive from './pages/HomeFive';
import HomeSix from './pages/HomeSix';
import HomeSeven from './pages/HomeSeven';
import HomeEight from './pages/HomeEight';
import HomeNine from './pages/HomeNine';
import HomeTen from './pages/HomeTen';
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
import HomeEleven from './pages/HomeEleven';
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
import OnGoingSoftwareWebsite from './pages/OnGoingSoftwareWebsite';
import BlockChainSolution from './pages/BlockChainSolution';
function App() {
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
        <Route exact path="/index-2" element={<HomeTwo />} />
        <Route exact path="/index-3" element={<HomeThree />} />
        <Route exact path="/index-4" element={<HomeFour />} />
        <Route exact path="/index-5" element={<HomeFive />} />
        <Route exact path="/index-6" element={<HomeSix />} />
        <Route exact path="/index-7" element={<HomeSeven />} />
        <Route exact path="/index-8" element={<HomeEight />} />
        <Route exact path="/index-9" element={<HomeNine />} />
        <Route exact path="/index-10" element={<HomeTen />} />
        <Route exact path="/index-11" element={<HomeEleven />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog-2" element={<BlogTwo />} />
        <Route exact path="/blog-3" element={<BlogThree />} />
        <Route exact path="/blog-4" element={<BlogFour />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service-3" element={<Service />} />
        <Route exact path="/service-2" element={<ServiceTwo />} />
        <Route exact path="/service" element={<ServiceThree />} />
        <Route exact path="/service-4" element={<ServiceFour />} />
        <Route exact path="/service-5" element={<ServiceFive />} />
        <Route exact path="/service-details" element={<ServiceDetails />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/team-details" element={<TeamDetails />} />
        <Route exact path="/team-2" element={<TeamTwo />} />
        <Route exact path="/team-3" element={<TeamThree />} />
        <Route exact path="/pricing" element={<PriceOne />} />
        <Route exact path="/pricing-2" element={<PriceTwo />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/project-2" element={<ProjectTwo />} />
        <Route exact path="/project-3" element={<ProjectThree />} />
        <Route exact path="/project-details" element={<ProjectDetails />} />
        <Route exact path="/technologies" element={<Technologies />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/mobile-app" element={<MobileApp />} />
        <Route
          exact
          path="/cross-platfrom-development"
          element={<CrossPlatformDevelopment />}
        />
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

        <Route
          exact
          path="/on-going-software-website"
          element={<OnGoingSoftwareWebsite />}
        />

        <Route
          exact
          path="/blockchain-solutions"
          element={<BlockChainSolution />}
        />
        <Route exact path="/virtual-assistant" element={<VirtualAssistant />} />
        <Route exact path="/meta-campaign" element={<MetaCampaign />} />
        <Route
          exact
          path="/project-management"
          element={<ProjectManagement />}
        />
        <Route
          exact
          path="/digital-product-development"
          element={<DigitalProductDevelopment />}
        />
        <Route exact path="/legal-services" element={<LegalService />} />
      </Routes>
      <ScrollToTop smooth color="#246BFD" />
    </BrowserRouter>
  );
}

export default App;
