import { Building2, Users2, LineChart, Globe } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const businessSteps: FeatureProps[] = [
  {
    icon: <Building2 className="w-12 h-12 text-gray-700" />,
    title: "Market Preparation",
    description:
      "We ensure you're ready for success with comprehensive visa assistance, business etiquette training, and cultural insights before you arrive in China.",
  },
  {
    icon: <Users2 className="w-12 h-12 text-gray-700" />,
    title: "Local Support",
    description:
      "From arranging transportation to securing accommodations and providing translator services, we handle all the crucial details on the ground.",
  },
  {
    icon: <Globe className="w-12 h-12 text-gray-700" />,
    title: "Network Building",
    description:
      "Connect with trusted local contacts, arrange factory visits, and set up essential business tools like WeChat to establish your presence in the market.",
  },
  {
    icon: <LineChart className="w-12 h-12 text-gray-700" />,
    title: "Growth & Scale",
    description:
      "Leverage our proven expertise to reduce costs, build strong partnerships, and expand your business in the world's most dynamic market.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Your Business{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Expansion Guide
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-gray-700">
        With 1.4 billion potential customers and an appetite for innovative
        products, China offers unparalleled opportunities. Let us guide you
        through each step of your journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {businessSteps.map(({ icon, title, description }: FeatureProps) => (
          <div
            key={title}
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex flex-col items-center gap-4 mb-4">
              {icon}
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="text-gray-600">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;