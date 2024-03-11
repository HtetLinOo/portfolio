import Header from "./components/Header";
import "./App.css";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExpSection from "./sections/ExpSection";
import Footer from "./components/Footer";
import TopButton from "./components/TopButton";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={800} theme="colored" />
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <ExpSection /> */}
      <SkillsSection />
      <ContactSection />
      <TopButton />
      <Footer />
    </>
  );
}

export default App;
