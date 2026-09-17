import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

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