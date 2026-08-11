import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />

      <Footer />
    </>
  );
}

export default App;