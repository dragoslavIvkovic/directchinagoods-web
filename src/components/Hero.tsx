import React, { useState, useEffect } from "react";

const Hero = () => {
  const slides = [
    {
      title: "Break Into China's Market",
      words:
        "Want to break into China's booming market but do not know where to begin? Our cross-border expertise will help you source competitive products, navigate complex regulations, and secure reliable partnerships. Let's transform your vision into lasting growth and a stronger bottom line.",
      isTransparent: true,
      link: "#contact",
      buttonText: "Get Started",
    },
    {
      title: "Unlock China's Market Potential",
      words:
        "Tap into a market of 1.4 billion consumers. Let our expertise guide your business expansion into the world's most dynamic economy.",
      image: "/kontejneri.jpg",
      link: "#office@directchinagoods.com",
      buttonText: "Start Your Journey",
    },
    {
      title: "Your Trusted Partner in China",
      words:
        "From visa assistance to factory visits, we provide comprehensive support to ensure your success in the Chinese market.",
      image: "/robots.jpg",
      link: "#faq",
      buttonText: "Learn More",
    },
    {
      title: "Local Expertise, Global Success",
      words:
        "Navigate regulations, build strong partnerships, and reduce costs with our proven track record of helping businesses thrive in China.",
      image: "/sucess.jpg",
      link: "#testimonials",
      buttonText: "View Success Stories",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setShowTitle(false);
      setShowText(false);
      setShowButton(false);
    }, 9000);

    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 1000);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    };
  }, [currentSlide]);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] md:h-screen flex items-center justify-center">
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full flex flex-col items-center justify-center transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.image ? (
              <>
                {/* Background Image */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                {/* Black overlay only for image slides */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              </>
            ) : null}

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center h-96 max-w-4xl mx-auto px-4">
              <h1
                className={`${
                  slide.isTransparent
                    ? "text-6xl md:text-7xl"
                    : "text-5xl md:text-6xl"
                } font-bold text-white mb-8 text-center transition-opacity duration-1000 ${
                  showTitle ? "opacity-100" : "opacity-0"
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`${
                  slide.isTransparent
                    ? "text-2xl md:text-3xl"
                    : "text-xl md:text-2xl"
                } text-white max-w-3xl text-center transition-opacity duration-1000 ${
                  showText ? "opacity-100" : "opacity-0"
                }`}
              >
                {slide.words}
              </p>
              <a
                href={slide.link}
                onClick={(e) => handleNavigation(e, slide.link)}
                className={`text-white text-xl md:text-2xl mt-8 px-8 py-4 bg-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-1000 ${
                  showButton ? "opacity-100" : "opacity-0"
                }`}
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white scale-125" : "bg-white/50"
              }`}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
