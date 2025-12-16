import { useState } from "react";
import BentoGrid from "./components/bento grid/BentoGrid";
import HeroSection from "./components/Hero Section/HeroSection";
import SkillCloud from "./components/Skill cloud/SkillCloud";
import Footer from "./components/Footer Section/Footer";
import Contact from "./components/Contact Section/Contact";


function App() {
  const [count, setCount] = useState(0);

  return (
      <>
      <HeroSection />
      <SkillCloud />
      <BentoGrid />
      <Contact />
      <Footer />
      </>
  );
}

export default App;
