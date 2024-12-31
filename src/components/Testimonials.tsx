import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

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
      className="relative px-4 py-20 bg-gradient-to-br from-blue-600 to-purple-700"
    >
      <div className="relative container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Discover Why
          <span className="text-yellow-400"> People Love Us</span>
        </h2>

        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full z-10 hover:bg-white/20 transition-colors"
          aria-label="Previous testimonials"
        >
          ←
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTestimonials.map(
            ({ image, name, location, title, comment }, index) => (
              <Card key={index} className="bg-white rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{comment}</p>
                </CardContent>
              </Card>
            )
          )}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full z-10 hover:bg-white/20 transition-colors"
          aria-label="Next testimonials"
        >
          →
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {allTestimonialSets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSetIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSetIndex ? "bg-white" : "bg-white/30"
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
