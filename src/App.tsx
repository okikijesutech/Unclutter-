import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import ProductSpecs from "./components/ProductSpecs";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WaitlistForm from "./components/WaitlistForm";
import Preorder from "./components/Preorder";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Benefits />
      <ProductSpecs />
      <WaitlistForm />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Preorder />
      <Footer />
    </>
  );
}

export default App;
