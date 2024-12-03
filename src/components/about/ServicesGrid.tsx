// AboutComponents/ServicesGrid.js
import { Archive, TrendingUp, Shield, Plane, CheckCircle } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      title: "Sourcing the Right Products",
      icon: Archive,
      points: [
        "Research and identify the best suppliers based on your requirements",
        "Source raw materials, finished goods, or custom manufacturing",
        "Ensure exact match with your specifications",
        "Continuous supplier evaluation and monitoring",
      ],
    },
    {
      title: "Negotiating the Best Deals",
      icon: TrendingUp,
      points: [
        "Handle all negotiations on your behalf",
        "Leverage local expertise for favorable terms",
        "Secure competitive pricing",
        "Manage contract details and requirements",
      ],
    },
    {
      title: "Quality Assurance",
      icon: Shield,
      points: [
        "Thorough pre-shipment inspections",
        "Quality control throughout production",
        "Risk minimization strategies",
        "Consistency checks and reporting",
      ],
    },
    {
      title: "Logistics and Transportation",
      icon: Plane,
      points: [
        "End-to-end shipping management",
        "Customs documentation handling",
        "Supply chain optimization",
        "On-time delivery coordination",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-700">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8 text-gray-700">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <service.icon className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <ul className="space-y-3">
              {service.points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
