 
export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Hero Section with Gradient Overlay */}
        <div className="relative h-[400px] w-full">
          <img
            src="/wall.jpg"
            alt="Business in China"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent">
            <div className="h-full flex flex-col justify-center items-center text-center p-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Your Gateway to Success in China
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl">
                Achieve Long-Term Business Success with Our Expert China Trade Solutions
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-12 py-16">
          {/* NEW: Strategic Vision Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Transform Your Business Potential</h2>
            <p className="text-lg text-gray-700 mb-6">
              In today's global marketplace, success in China isn't just about finding suppliers – it's about building a strategic advantage that transforms your entire business. We turn market complexity into your competitive edge, leveraging deep expertise in both Western business requirements and Chinese market dynamics to create unparalleled opportunities for growth.
            </p>
            <p className="text-lg text-gray-700">
              Our proven methodology streamlines your entry into the world's largest manufacturing hub, ensuring you capture maximum value while minimizing risks. We don't just connect you to suppliers; we build a foundation for sustained success in China's dynamic business environment.
            </p>
          </div>

          {/* Original Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 mb-8">
              Expanding your business through sourcing from China is a strategic move that can unlock new levels of profitability and competitiveness. Whether you're looking for affordable, high-quality goods or exploring manufacturing partnerships, China offers opportunities few markets can rival. However, navigating this landscape requires more than ambition—it requires knowledge, connections, and ongoing support.
            </p>
            <p className="text-lg text-gray-700">
              We go beyond one-time transactions to build enduring partnerships with our clients. Our goal is to provide you with a comprehensive solution that simplifies your supply chain, ensures consistent quality, and maximizes your returns. With a team of experienced professionals in China and a deep understanding of its business landscape, we offer services tailored to your specific needs, so you can focus on what truly matters: growing your business.
            </p>
          </div>

          {/* NEW: Partnership Excellence Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Your Success Is Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Navigate China's vast marketplace with confidence, backed by our comprehensive support system. We understand that every business has unique needs and challenges. That's why we provide personalized strategies and hands-on guidance throughout your journey, ensuring you achieve optimal results in every aspect of your China operations.
            </p>
            <p className="text-lg text-gray-700">
              From initial market research to ongoing supplier management, our team becomes an extension of your business. We provide real-time insights, proactive problem-solving, and strategic guidance that helps you stay ahead in this dynamic market. With us, you gain more than a service provider – you gain a dedicated partner invested in your success.
            </p>
          </div>

          {/* Original Why China Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8">Why China, and Why Us?</h2>
            <p className="text-lg text-gray-700 mb-8">
              China is a global hub for manufacturing and innovation, offering unparalleled cost advantages and an extensive range of products. However, entering this market is not without challenges:
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Common Challenges</h3>
                <ul className="space-y-3">
                  {[
                    "Cultural and language differences",
                    "Verifying suppliers and ensuring product quality",
                    "Complex logistics and customs processes",
                    "Navigating business systems without familiar tools like Google or PayPal"
                  ].map((challenge, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                <p className="text-gray-700 mb-4">
                  Our team bridges these gaps for you. With local experts on the ground in China, we act as your trusted representatives, ensuring a seamless process from start to finish.
                </p>
                <p className="text-gray-700 font-medium">
                  And the best part? There's no need for you to travel to China unless you choose to. We handle everything, allowing you to operate from the comfort of your office while we take care of the rest.
                </p>
              </div>
            </div>
          </div>

          {/* NEW: Market Leadership Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Leading the Way in China Trade</h2>
            <p className="text-lg text-gray-700 mb-6">
              The future of global business runs through China, and we ensure you're positioned to capitalize on every opportunity. Our deep understanding of market trends, regulatory requirements, and industry best practices allows us to anticipate challenges and identify opportunities others might miss. We transform complex market dynamics into clear, actionable strategies for your business.
            </p>
            <p className="text-lg text-gray-700">
              By combining local expertise with global business acumen, we create solutions that drive real results. Whether you're looking to optimize costs, expand your supplier network, or enhance product quality, our comprehensive approach ensures your objectives are met and exceeded.
            </p>
          </div>

          {/* Original Comprehensive Services */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Sourcing the Right Products",
                  icon: Archive,
                  points: [
                    "Research and identify the best suppliers based on your requirements",
                    "Source raw materials, finished goods, or custom manufacturing",
                    "Ensure exact match with your specifications",
                    "Continuous supplier evaluation and monitoring"
                  ]
                },
                {
                  title: "Negotiating the Best Deals",
                  icon: TrendingUp,
                  points: [
                    "Handle all negotiations on your behalf",
                    "Leverage local expertise for favorable terms",
                    "Secure competitive pricing",
                    "Manage contract details and requirements"
                  ]
                },
                {
                  title: "Quality Assurance",
                  icon: Shield,
                  points: [
                    "Thorough pre-shipment inspections",
                    "Quality control throughout production",
                    "Risk minimization strategies",
                    "Consistency checks and reporting"
                  ]
                },
                {
                  title: "Logistics and Transportation",
                  icon: Plane,
                  points: [
                    "End-to-end shipping management",
                    "Customs documentation handling",
                    "Supply chain optimization",
                    "On-time delivery coordination"
                  ]
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Original Long-term Success */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8">Your Long-Term Success is Our Priority</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                <Globe className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trusted Network</h3>
                <p className="text-gray-600">
                  Strong relationships with reliable suppliers, manufacturers, and logistics partners across China.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Our in-country team ensures cultural nuances, legal requirements, and operational challenges are managed seamlessly.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                <p className="text-gray-600">
                  We adapt our services to meet your specific needs, ensuring you get the best results without unnecessary complexity.
                </p>
              </div>
            </div>
          </div>

          {/* Original No Travel Required */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold mb-6">Why You Don't Need to Travel</h2>
              <p className="text-gray-700 mb-6">
                For many businesses, traveling to China to oversee sourcing and manufacturing can be time-consuming and costly. With us, that's no longer necessary. Our team on the ground acts as your eyes and ears, handling every aspect of the process while keeping you informed every step of the way.
              </p>
              <p className="text-gray-700">
                If you do choose to visit China, we can arrange everything for you, from factory tours and business meetings to accommodation and transportation, ensuring your trip is productive and stress-free.
              </p>
            </div>
          </div>

          {/* Original Call to Action */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-primary/80 to-primary rounded-2xl p-8 md:p-12 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Start Your Journey with Us
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl">
                  Succeeding in China's vast and competitive market doesn't have to be overwhelming. Let's build a partnership that transforms your business.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
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