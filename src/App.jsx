import BackgroundAnimation from "./components/BackgroundAnimation";
import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import Services from "./components/sections/Services";
import Howwework from "./components/sections/Howwework";
import Leadership from "./components/sections/Leadership";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import VisionMission from "./components/sections/VisionMission";
import Testimonals from "./components/sections/Testimonals";
import Insights from "./components/sections/Insights";
import Careers from "./components/sections/Careers";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-white">

      <BackgroundAnimation />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Services />
        <Howwework />
        <Leadership />
        <WhyChooseUs />
        <VisionMission />
        <Testimonals />
        <Insights />
        <Careers />
        <FAQ />
        <Contact />
      </div>

    </div>
  );
}

export default App;