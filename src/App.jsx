import Header from "./components/Header";
import "./App.css";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExpSection from "./sections/ExpSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <ExpSection /> */}
      <Footer />
    </>
  );
}

export default App;
