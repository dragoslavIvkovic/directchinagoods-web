import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import Hero from "./components/Hero";
import "./App.css";
import "./localizations/i18n";

// Lazy load components
const About = lazy(() => import("./components/About"));
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const Documents = lazy(() => import("./components/Documents"));

// Loading spinner component
const Loader = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10">
          <div className="absolute inset-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Suspense fallback={<Loader />}>
                  <HowItWorks />
                  <About />
                  <Documents />
                  <FAQ />
                </Suspense>
              </>
            }
          />
        </Routes>

        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
