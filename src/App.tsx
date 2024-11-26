import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import Contacts from "./components/Contacts";
 import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import "./App.css";
import './localizations/i18n';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: `url('/bg.jpg')`
          }}
        >
            <div className="absolute inset-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"></div>
        </div>

        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Sponsors />
              <About />
              <HowItWorks />
              <Contacts />
              <Services />
              <Cta />
              <Testimonials />
              <Team />
              <BlogList />
              <Newsletter />
              <FAQ />
            </>
          } />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;