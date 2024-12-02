import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";

import "./App.css";
import "./localizations/i18n";
import Hero from "./components/Hero";
import Documents from "./components/Documents";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10">
          <div className="absolute inset-0 h-full bg-gradient-to-r from-blue-500 to-purple-500  "></div>
        </div>

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero /> <HowItWorks />
                <About />
                <Documents />
                {/* <Testimonials /> */}
                <FAQ />
              </>
            }
          />
        </Routes>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
