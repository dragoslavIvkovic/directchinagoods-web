import React, { useState, useEffect } from 'react';

const Hero = () => {
  const slides = [
    { 
      title: "First Slide Title", 
      words: "Welcome to our amazing presentation",
      image: "/kontejneri.jpg"
    },
    { 
      title: "Second Slide Title", 
      words: "Discover incredible possibilities today",
      image: "/robots.jpg"
    },
    { 
      title: "Third Slide Title", 
      words: "Transform your digital experience now",
      image: "/sucess.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    // Timer for slide change
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setVisibleWords([]);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const words = slides[currentSlide].words.split(' ');
    let currentWordIndex = 0;

    // Timer for word animation
    const wordTimer = setInterval(() => {
      if (currentWordIndex < words.length) {
        setVisibleWords(prev => [...prev, words[currentWordIndex]]);
        currentWordIndex++;
      } else {
        clearInterval(wordTimer);
      }
    }, 300);

    return () => clearInterval(wordTimer);
  }, [currentSlide]);

  return (
    <div className="w-screen h-screen flex items-center justify-center -mt-40">
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-500 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            
            {/* Content */}
            <div className="relative flex flex-col items-center justify-center p-8">
              <h1 className="text-6xl font-bold text-white mb-8">
                {slide.title}
              </h1>
              <p className="text-3xl text-white text-center">
                {slides[currentSlide].words
                  .split(' ')
                  .map((word, idx) => (
                    <span
                      key={idx}
                      className={`inline-block mx-1 transition-opacity duration-300 ${
                        visibleWords.includes(word) ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {word}
                    </span>
                  ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;