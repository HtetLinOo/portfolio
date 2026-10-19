import Header from "./components/Header";
import "./App.css";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import CareerSection from "./sections/CareerSection";
import Footer from "./components/Footer";
import TopButton from "./components/TopButton";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulating a loading delay for demonstration purposes
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup function to clear the timeout in case component unmounts before the timeout
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <ToastContainer autoClose={800} theme="colored" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <HeroSection />
          <AboutSection />
          <CareerSection />
          {/* <ProjectsSection /> */}
          <SkillsSection />
          <ContactSection />
          <TopButton />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
