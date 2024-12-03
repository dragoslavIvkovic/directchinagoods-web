// AboutComponents/IconSection.js
import { Globe, Users, Clock } from "lucide-react";

const IconSection = () => (
  <div className="max-w-4xl mx-auto mb-16">
    <h2 className="text-3xl font-bold mb-8 text-gray-700">
      Your Long-Term Success is Our Priority
    </h2>
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
        <Globe className="h-10 w-10 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Trusted Network
        </h3>
        <p className="text-gray-600">
          Strong relationships with reliable suppliers, manufacturers, and
          logistics partners across China.
        </p>
      </div>
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
        <Users className="h-10 w-10 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Local Expertise
        </h3>
        <p className="text-gray-600">
          Our in-country team ensures cultural nuances, legal requirements, and
          operational challenges are managed seamlessly.
        </p>
      </div>
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
        <Clock className="h-10 w-10 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Tailored Solutions
        </h3>
        <p className="text-gray-600">
          We adapt our services to meet your specific needs, ensuring you get
          the best results without unnecessary complexity.
        </p>
      </div>
    </div>
  </div>
);

export default IconSection;
