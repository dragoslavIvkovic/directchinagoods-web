import { useState } from "react";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

// Local image paths as verified in public/testimonials/
const testimonialSetOne = [
  {
    image: "/testimonials/abdullah-morocco.jpeg",
    name: "Abdullah",
    location: "Morocco",
    title: "Long-term Partnership",
    comment:
      "We have been working with this company for three years. The cooperation is professional, and they are always ready to accommodate anything.",
  },
  {
    image: "/testimonials/ali.jpeg",
    name: "Ali",
    location: "Saudi Arabia",
    title: "8 Years of Excellence",
    comment:
      "We have been purchasing gaming equipment, bags, and packaging through this company for 8 years, and we always have excellent and transparent cooperation.",
  },
  {
    image: "/testimonials/Sangjun-Kim.jpeg",
    name: "Sangjun Kim",
    location: "S. Korea",
    title: "Five Years of Success",
    comment:
      "Five years of fantastic cooperation through which we have imported various products to Korea. Transparent process and excellent communication.",
  },
];

const allTestimonialSets = [testimonialSetOne];

const Testimonials = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentSetIndex((prev) =>
      prev === 0 ? allTestimonialSets.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSetIndex((prev) =>
      prev === allTestimonialSets.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonials = allTestimonialSets[currentSetIndex];

  return (
    <div
      id="testimonials"
      className="relative px-4 py-20 bg-[#101321]"
    >
      <div className="relative container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Discover Why
          <span className="text-[var(--color-accent-blue)]"> People Love Us</span>
        </h2>

        <button
          onClick={handlePrevious}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-white/10 backdrop-blur-sm rounded-full z-10 hover:bg-[var(--color-accent-blue)] transition-colors text-white"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentTestimonials.map(
            ({ image, name, location, title, comment }, index) => (
              <div key={index} className="bg-[#161a2b] rounded-xl overflow-hidden border border-white/5 hover:border-[var(--color-accent-blue)] transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-bold">{name}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-[var(--color-accent-blue)]">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-4 leading-relaxed">{comment}</p>
                </div>
              </div>
            )
          )}
        </div>

        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-white/10 backdrop-blur-sm rounded-full z-10 hover:bg-[var(--color-accent-blue)] transition-colors text-white"
          aria-label="Next testimonials"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center gap-2 mt-12">
          {allTestimonialSets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSetIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSetIndex ? "bg-[var(--color-accent-blue)] w-8" : "bg-gray-600"
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
