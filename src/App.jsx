import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Discover from "./components/Discover/Discover";
import Work from "./components/Work/Work";
import Growth from "./components/Growth/Growth";
import Testimonials from "./components/Testimonials/Testimonials";
import Certificate from "./components/Certificate/Certificate";
import Gallery from "./components/Gallery/Gallery";
import Beginning from "./components/Beginning/Beginning";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Discover />
      <Work />
      <Growth />
      <Testimonials />
      <Certificate />
      <Gallery /> 
      <Beginning />
      <Footer />
      <Copyright />
    </>
  );
};

export default App;
