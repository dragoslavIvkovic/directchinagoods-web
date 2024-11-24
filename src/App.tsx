import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
 import { Footer } from "./components/Footer";
import Contacts from "./components/Contacts";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import './localizations/i18n';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Container */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url('/bg.jpg')`
        }}
      >
        {/* Optional: Add overlay if needed */}
        <div className="absolute inset-0 dark:bg-black/80 bg-[#e5e5e5]/60"></div>
      </div>

      {/* Your existing components */}
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Contacts />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;