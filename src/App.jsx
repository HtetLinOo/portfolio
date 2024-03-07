import Header from "./components/Header";
import "./App.css";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExpSection from "./sections/ExpSection";
import Footer from "./components/Footer";
import TopButton from "./components/TopButton";
import SkillsSection from "./sections/SkillsSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <ExpSection /> */}
      <SkillsSection />
      <TopButton />
      <Footer />
    </>
  );
}

export default App;
