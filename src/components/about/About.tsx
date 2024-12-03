import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";

// Lazy load icon components
const IconSection = lazy(() => import("./IconSection"));
const ServicesGrid = lazy(() => import("./ServicesGrid"));

// Loading component
const Loader = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Hero Section - Keep this loaded immediately */}
        <div className="relative h-[400px] w-full">
          <img
            src="/wall.jpg"
            alt="Business in China"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent">
            <div className="h-full flex flex-col justify-center items-center text-center p-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Your Gateway to Success in China
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl">
                Achieve Long-Term Business Success with Our Expert China Trade
                Solutions
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-12 py-16">
          {/* Text content - Keep this loaded immediately */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-700">
              Transform Your Business Potential
            </h2>
            {/* ... rest of the text content ... */}
          </div>

          {/* Lazy load icon-heavy sections */}
          <Suspense fallback={<Loader />}>
            <IconSection />
            <ServicesGrid />
          </Suspense>

          {/* Call to Action - Keep this loaded immediately */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-blue-600/80 to-blue-600 rounded-2xl p-8 md:p-12 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Start Your Journey with Us
                </h2>
                <p className="text-white text-lg mb-8 max-w-2xl">
                  Succeeding in China's vast and competitive market doesn't have
                  to be overwhelming. Let's build a partnership that transforms
                  your business.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_1px,_transparent_1px)] [background-size:20px_20px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
