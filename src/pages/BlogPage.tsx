import React, { useState } from 'react';
import { X } from 'lucide-react';
import Button from '../components/ui/Button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Source Products from China in 2024',
    excerpt: 'A comprehensive guide to finding reliable suppliers and navigating the Chinese manufacturing landscape.',
    content: `Finding reliable suppliers in China requires a strategic approach. Start by clearly defining your product requirements, including specifications, quality standards, and target pricing.

Research potential suppliers through trade shows, online platforms like Alibaba, and industry referrals. Always verify supplier credentials, request samples, and conduct factory audits before committing to large orders.

Building long-term relationships with suppliers is key to success. Regular communication, fair payment terms, and mutual respect create partnerships that benefit both parties.

Remember to factor in shipping costs, import duties, and lead times when calculating your total landed cost. Working with experienced sourcing agents can help navigate these complexities.`,
    date: 'January 5, 2024',
    category: 'Sourcing',
    image: '/src/assets/images/portfolio-1.png'
  },
  {
    id: 2,
    title: 'Quality Control Best Practices',
    excerpt: 'Learn the essential steps to ensure your products meet international quality standards.',
    content: `Quality control is essential for maintaining your brand reputation and customer satisfaction. Implement a comprehensive QC strategy that covers pre-production, in-line, and pre-shipment inspections.

Pre-production inspections verify that raw materials meet specifications before manufacturing begins. In-line inspections catch defects early in the production process, reducing waste and rework.

Pre-shipment inspections are your last line of defense before products leave the factory. Use standardized AQL (Acceptable Quality Level) sampling methods to ensure consistent quality across batches.

Document all inspections thoroughly and maintain open communication with your suppliers about quality expectations and corrective actions.`,
    date: 'December 28, 2023',
    category: 'Quality',
    image: '/src/assets/images/portfolio-2.png'
  },
  {
    id: 3,
    title: 'Understanding Import Regulations',
    excerpt: 'Everything you need to know about customs, tariffs, and compliance when importing from China.',
    content: `Importing goods requires understanding customs regulations, tariff classifications, and compliance requirements. Start by determining the correct HS (Harmonized System) code for your products.

Research applicable tariffs and trade agreements that may affect your imports. Keep detailed records of all transactions, including commercial invoices, packing lists, and certificates of origin.

Ensure your products comply with local safety standards and labeling requirements. Non-compliance can result in customs holds, fines, or seizure of goods.

Consider working with a licensed customs broker who can help navigate complex regulations and ensure smooth clearance of your shipments.`,
    date: 'December 15, 2023',
    category: 'Logistics',
    image: '/src/assets/images/about-img.png'
  },
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="pt-32 pb-20 bg-[#101321] min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent-blue)] font-bold tracking-widest uppercase text-sm mb-2 block">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-[var(--color-text-dim)] max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights about sourcing from China and international trade.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-[#161a2b] rounded-xl overflow-hidden border border-white/5 hover:border-[var(--color-accent-blue)] transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[var(--color-accent-blue)] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[var(--color-text-dim)] text-sm mb-3">{post.date}</p>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-accent-blue)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-[var(--color-accent-blue)] font-medium text-sm">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <a href="/">
            <Button variant="outline">← Back to Home</Button>
          </a>
        </div>
      </div>

      {/* Modal for selected post */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 z-50 overflow-auto p-6 flex items-center justify-center">
          <div className="bg-white max-w-4xl mx-auto rounded-2xl overflow-hidden relative">
            {/* Header Image */}
            <div className="relative h-64">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="bg-[var(--color-accent-blue)] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <p className="text-gray-500 text-sm mb-2">{selectedPost.date}</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {selectedPost.title}
              </h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                  {selectedPost.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
