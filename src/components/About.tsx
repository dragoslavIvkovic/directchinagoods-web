 
export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg">
        {/* Top banner image */}
        <div className="h-[300px] w-full rounded-t-lg overflow-hidden">
          <img
            src="/wall.jpg"
            alt="Business in China"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-6 py-12">
          {/* Header section */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                About{" "}
              </span>
              Company
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Achieve Long-Term Business Success with Our Expert China Trade
              Solutions
            </p>
          </div>

          {/* Main content with grid layout */}
          <div className="max-w-4xl mx-auto">
            {/* Introduction Section */}
            <div className="mb-12">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Expanding your business through sourcing from China is a
                strategic move that can unlock new levels of profitability and
                competitiveness. Whether you're looking for affordable,
                high-quality goods or exploring manufacturing partnerships,
                China offers opportunities few markets can rival.
              </p>
            </div>

            {/* Key Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                <p className="text-muted-foreground mb-4">
                  We go beyond one-time transactions to build enduring
                  partnerships with our clients. Our goal is to provide you with
                  a comprehensive solution that simplifies your supply chain,
                  ensures consistent quality, and maximizes your returns.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Dedicated team of experts</li>
                  <li>Tailored solutions for your needs</li>
                  <li>Continuous support and guidance</li>
                </ul>
              </div>

              <div className="bg-white/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Market Advantages
                </h3>
                <p className="text-muted-foreground mb-4">
                  China is a global hub for manufacturing and innovation,
                  offering unparalleled cost advantages and an extensive range
                  of products.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Access to vast supplier network</li>
                  <li>Competitive pricing strategies</li>
                  <li>Innovation and scalability</li>
                </ul>
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">
                Comprehensive Services
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Product Sourcing",
                    points: [
                      "Supplier verification",
                      "Quality control",
                      "Price negotiation",
                    ],
                  },
                  {
                    title: "Logistics Support",
                    points: [
                      "Shipping management",
                      "Customs clearance",
                      "Documentation",
                    ],
                  },
                  {
                    title: "Business Development",
                    points: [
                      "Market research",
                      "Strategy planning",
                      "Growth consulting",
                    ],
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/50 rounded-lg p-6 shadow-sm"
                  >
                    <h4 className="text-lg font-semibold mb-3">
                      {service.title}
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {service.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">
                    Local Expertise
                  </h4>
                  <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
                    <li>Deep understanding of Chinese business culture</li>
                    <li>Established network of reliable partners</li>
                    <li>On-ground presence and representation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">
                    Quality Assurance
                  </h4>
                  <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
                    <li>Rigorous supplier verification process</li>
                    <li>Regular quality inspections</li>
                    <li>Comprehensive reporting and documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-primary/10 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Expand Your Business?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's work together to unlock the full potential of the Chinese
                market for your business.
              </p>
              <a
                href="#contacts"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
