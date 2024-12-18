import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
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

// Enhanced loading spinner component
const Loader = () => (
  <div className="flex flex-col justify-center items-center min-h-[400px] w-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    <p className="text-white mt-4 text-xl">Loading content...</p>
  </div>
);

// Wrapper component for handling loading states
const LoadingWrapper = ({ children }) => (
  <div className="w-full">
    <Suspense fallback={<Loader />}>{children}</Suspense>
  </div>
);

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10">
          <div className="absolute inset-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>

        <div
          className={`transition-opacity duration-1000 ${
            showNavbar ? "opacity-100" : "opacity-0"
          }`}
        >
          <Navbar />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LoadingWrapper>
                  <HowItWorks />
                </LoadingWrapper>
                <LoadingWrapper>
                  <About />
                </LoadingWrapper>
                <LoadingWrapper>
                  <Documents />
                </LoadingWrapper>
                <LoadingWrapper>
                  <FAQ />
                </LoadingWrapper>
              </>
            }
          />
          <Route
            path="/documents"
            element={
              <LoadingWrapper>
                <Documents />
              </LoadingWrapper>
            }
          />
        </Routes>

        <LoadingWrapper>
          <Footer />
        </LoadingWrapper>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
