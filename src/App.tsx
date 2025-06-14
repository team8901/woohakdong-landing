import { CenteredHero } from "@/components/CenteredHero";
import "./App.css";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <CenteredHero />
      {/* <Sponsors /> */}
      {/* <About /> */}
      {/* <HowItWorks /> */}
      <Features />
      {/* <Services /> */}
      {/* <Cta /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
