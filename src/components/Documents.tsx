import { useState } from "react";
import { X } from "lucide-react";

interface Document {
  id: string;
  title: string;
  content: string;
}

const documents: Document[] = [
  {
    id: "transform",
    title: "Transform Your Business Potential",
    content: `In today's global marketplace, success in China isn't just about finding suppliers – it's about building a strategic advantage that transforms your entire business. We turn market complexity into your competitive edge, leveraging deep expertise in both Western business requirements and Chinese market dynamics to create unparalleled opportunities for growth.

Our proven methodology streamlines your entry into the world's largest manufacturing hub, ensuring you capture maximum value while minimizing risks. We don't just connect you to suppliers; we build a foundation for sustained success in China's dynamic business environment.`,
  },
  {
    id: "success",
    title: "Your Success Is Our Mission",
    content: `Navigate China's vast marketplace with confidence, backed by our comprehensive support system. We understand that every business has unique needs and challenges. That's why we provide personalized strategies and hands-on guidance throughout your journey, ensuring you achieve optimal results in every aspect of your China operations.

From initial market research to ongoing supplier management, our team becomes an extension of your business. We provide real-time insights, proactive problem-solving, and strategic guidance that helps you stay ahead in this dynamic market. With us, you gain more than a service provider – you gain a dedicated partner invested in your success.`,
  },
  {
    id: "leadership",
    title: "Leading the Way in China Trade",
    content: `The future of global business runs through China, and we ensure you're positioned to capitalize on every opportunity. Our deep understanding of market trends, regulatory requirements, and industry best practices allows us to anticipate challenges and identify opportunities others might miss. We transform complex market dynamics into clear, actionable strategies for your business.

By combining local expertise with global business acumen, we create solutions that drive real results. Whether you're looking to optimize costs, expand your supplier network, or enhance product quality, our comprehensive approach ensures your objectives are met and exceeded.`,
  },
];

export const Documents = () => {
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);

  return (
    <div className="container py-24">
      {expandedDoc ? (
        <div className="fixed inset-0 bg-white z-50 overflow-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-700">
                {documents.find((doc) => doc.id === expandedDoc)?.title}
              </h2>
              <button
                onClick={() => setExpandedDoc(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 whitespace-pre-line">
                {documents.find((doc) => doc.id === expandedDoc)?.content}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setExpandedDoc(doc.id)}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 
                         hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-700">
                {doc.title}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Documents;
