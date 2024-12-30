import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonialSetOne = [
  {
    image: "/testimonials/abdullah-morocco.jpeg",
    name: "Abdullah",
    country: "Morocco",
    comment:
      "We have been working with this company for three years. The cooperation is professional, and they are always ready to accommodate anything.",
  },
  {
    image: "/testimonials/ali.jpeg",
    name: "Ali",
    country: "Saudi Arabia",
    comment:
      "We have been purchasing gaming equipment, bags, and packaging through this company for 8 years, and we always have excellent and transparent cooperation.",
  },
  {
    image: "/testimonials/Sangjun-Kim.jpeg",
    name: "Sangjun Kim",
    country: "S. Korea",
    comment:
      "Five years of fantastic cooperation through which we have imported various products to Korea. Transparent process and excellent communication.",
  },
];

// const testimonialSetTwo = [
//   {
//     image: "/api/placeholder/400/400",
//     name: "JOHN DOE",
//     country: "Developer",
//     comment:
//       "Lorem ipsum dolor sit et, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam",
//   },
//   {
//     image: "/api/placeholder/400/400",
//     name: "JANE SMITH",
//     country: "Designer",
//     comment:
//       "Lorem ipsum dolor sit et, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam",
//   },
//   {
//     image: "/api/placeholder/400/400",
//     name: "MIKE WILSON",
//     country: "Manager",
//     comment:
//       "Lorem ipsum dolor sit et, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam",
//   },
// ];

// const allTestimonialSets = [testimonialSetOne, testimonialSetTwo];

const allTestimonialSets = [testimonialSetOne ];


const StarRating = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-500 text-white/40" />
    ))}
  </div>
);

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
    <div className="relative px-4 py-20 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="relative container mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold justify-center text-center mb-7">
          Discover Why
          <span className="bg-gradient-to-b from-primary/60 to-primary   bg-clip-text">
            {" "}
            People Love{" "}
          </span>
        </h2>
        {/* Navigacione strelice */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full z-10 hover:bg-white/20 transition-colors"
          aria-label="Previous testimonials"
        >
          ←
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTestimonials.map(
            ({ image, name, country, comment }, index) => (
              <Card
                key={index}
                className="group relative h-[400px] rounded-2xl overflow-hidden border-0"
              >
                {/* Velika slika koja pokriva celu karticu */}
                <div className="absolute inset-0">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradijent overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/90"></div>

                {/* Sadržaj */}
                <CardContent className="relative h-full flex flex-col justify-end p-6 text-white">
                  <p className="mb-6 text-white/90">{comment}</p>
                  <div>
                    <p className="font-semibold text-lg">{name}</p>
                    <p className="text-white/70 text-sm mb-4">{country}</p>
                    <StarRating />
                  </div>
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

        {/* Navigacione tačkice */}
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
