import React, { useState } from 'react';
import { X } from 'lucide-react';
import Button from '../components/ui/Button';

interface Document {
  id: string;
  title: string;
  content: string;
  category: string;
}

const documents: Document[] = [
  {
    id: 'transform',
    title: 'Transform Your Business Potential',
    category: 'Strategy',
    content: `In today's global marketplace, success in China isn't just about finding suppliers – it's about building a strategic advantage that transforms your entire business. We turn market complexity into your competitive edge, leveraging deep expertise in both Western business requirements and Chinese market dynamics to create unparalleled opportunities for growth.

Our proven methodology streamlines your entry into the world's largest manufacturing hub, ensuring you capture maximum value while minimizing risks. We don't just connect you to suppliers; we build a foundation for sustained success in China's dynamic business environment.`,
  },
  {
    id: 'success',
    title: 'Your Success Is Our Mission',
    category: 'Partnership',
    content: `Navigate China's vast marketplace with confidence, backed by our comprehensive support system. We understand that every business has unique needs and challenges. That's why we provide personalized strategies and hands-on guidance throughout your journey, ensuring you achieve optimal results in every aspect of your China operations.

From initial market research to ongoing supplier management, our team becomes an extension of your business. We provide real-time insights, proactive problem-solving, and strategic guidance that helps you stay ahead in this dynamic market. With us, you gain more than a service provider – you gain a dedicated partner invested in your success.`,
  },
  {
    id: 'leadership',
    title: 'Leading the Way in China Trade',
    category: 'Industry',
    content: `The future of global business runs through China, and we ensure you're positioned to capitalize on every opportunity. Our deep understanding of market trends, regulatory requirements, and industry best practices allows us to anticipate challenges and identify opportunities others might miss. We transform complex market dynamics into clear, actionable strategies for your business.

By combining local expertise with global business acumen, we create solutions that drive real results. Whether you're looking to optimize costs, expand your supplier network, or enhance product quality, our comprehensive approach ensures your objectives are met and exceeded.`,
  },
  {
    id: 'quality',
    title: 'Quality Assurance Standards',
    category: 'Quality',
    content: `Maintaining the highest quality standards is at the core of everything we do. Our rigorous quality assurance processes ensure that every product meets or exceeds international standards before it reaches your warehouse.

We conduct comprehensive supplier audits, in-factory inspections, and pre-shipment quality checks. Our team of experienced QC professionals is trained to identify potential issues before they become problems, saving you time, money, and reputation.`,
  },
  {
    id: 'logistics',
    title: 'Logistics & Shipping Guide',
    category: 'Logistics',
    content: `Efficient logistics is the backbone of successful international trade. We offer comprehensive shipping solutions tailored to your specific needs, whether you're shipping small parcels or full container loads.

Our logistics network spans all major ports in China and destinations worldwide. We handle all documentation, customs clearance, and coordination to ensure your shipments arrive on time and within budget.`,
  },
  {
    id: 'compliance',
    title: 'Compliance & Regulations',
    category: 'Legal',
    content: `Navigating international trade regulations can be complex. Our compliance team stays up-to-date with the latest requirements from customs authorities, trade organizations, and regulatory bodies worldwide.

We help you understand and comply with import/export regulations, product safety standards, labeling requirements, and environmental regulations. Our proactive approach to compliance protects your business from costly delays and penalties.`,
  },
];

const DocumentsPage = () => {
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20 bg-[#101321] min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent-blue)] font-bold tracking-widest uppercase text-sm mb-2 block">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Documentation & <span className="text-gradient">Guides</span>
          </h1>
          <p className="text-[var(--color-text-dim)] max-w-2xl mx-auto">
            Explore our comprehensive resources to help you succeed in sourcing from China.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setExpandedDoc(doc.id)}
              className="bg-[#161a2b] rounded-xl p-8 shadow-lg border border-white/5 
                         hover:shadow-xl hover:border-[var(--color-accent-blue)] transition-all cursor-pointer group"
            >
              <span className="text-[var(--color-accent-blue)] text-xs font-bold uppercase tracking-wider">
                {doc.category}
              </span>
              <h3 className="text-xl font-semibold text-white group-hover:text-[var(--color-accent-blue)] transition-colors mt-2 mb-4">
                {doc.title}
              </h3>
              <p className="text-gray-400 line-clamp-3">
                {doc.content}
              </p>
              <span className="text-[var(--color-accent-blue)] mt-4 inline-block text-sm font-medium">
                Read More →
              </span>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <a href="/">
            <Button variant="outline">← Back to Home</Button>
          </a>
        </div>
      </div>

      {/* Modal for expanded document */}
      {expandedDoc && (
        <div className="fixed inset-0 bg-black/80 z-50 overflow-auto p-6 flex items-center justify-center">
          <div className="bg-white max-w-4xl mx-auto rounded-2xl p-8 relative animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-[var(--color-accent-blue)] text-xs font-bold uppercase tracking-wider">
                  {documents.find((doc) => doc.id === expandedDoc)?.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  {documents.find((doc) => doc.id === expandedDoc)?.title}
                </h2>
              </div>
              <button
                onClick={() => setExpandedDoc(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                {documents.find((doc) => doc.id === expandedDoc)?.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentsPage;
