import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question:
      "What services do you provide for businesses entering the Chinese market?",
    answer:
      "We offer comprehensive support including visa assistance, business etiquette training, translator services, factory visit arrangements, accommodation booking, and local networking support. Our services are tailored to your specific needs, whether you're exploring the market, establishing a supply chain, or strengthening existing partnerships.",
    value: "item-1",
  },
  {
    question:
      "How long does it typically take to establish a business presence in China?",
    answer:
      "The timeline varies depending on your business goals and industry. However, our structured approach typically includes: 1-2 weeks for initial preparation and visa processing, 1-2 weeks for market orientation and initial meetings, and 1-3 months for establishing stable business relationships. We'll work with you to create a realistic timeline based on your specific objectives.",
    value: "item-2",
  },
  {
    question:
      "What makes China's market different from other international markets?",
    answer:
      "China offers unique opportunities with its 1.4 billion consumer base and world-class manufacturing capabilities. However, it also has distinct characteristics: different social media platforms (WeChat instead of WhatsApp), unique payment systems (Alipay, WeChat Pay), specific business etiquette, and various regulatory requirements. Our expertise helps you navigate these differences effectively.",
    value: "item-3",
  },
  {
    question:
      "How do you help with the language barrier and communication challenges?",
    answer:
      "We provide comprehensive communication support including professional translators for meetings, assistance with WeChat setup, local SIM card procurement, and cultural communication training. Our team ensures clear communication throughout your business dealings, from initial contact to ongoing partnerships.",
    value: "item-4",
  },
  {
    question:
      "What kind of ongoing support do you provide after initial market entry?",
    answer:
      "We offer continuous support including quality control management, supplier relationship maintenance, contract negotiation assistance, and regular market updates. Our team remains your trusted partner for long-term success, helping you adapt and grow your presence in the Chinese market.",
    value: "item-5",
  },
  {
    question: "How do you ensure quality control with Chinese manufacturers?",
    answer:
      "We implement a comprehensive quality control system including pre-production sample verification, during-production inspections, and final quality checks before shipment. Our local team can perform regular factory visits and help establish clear quality standards with suppliers.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
        Common Questions About{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Business in China
        </span>
      </h2>

      <p className="text-xl text-black/80 mb-8">
        Get answers to frequently asked questions about expanding your business
        to China and how we can help you succeed.
      </p>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
            className="border-b border-black/10 mb-4"
          >
            <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-white/90 bg-black/80 rounded-t-lg px-4">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-black text-base bg-white/90 px-4 py-3 rounded-b-lg mt-1">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-medium text-black">
          Need more specific information?{" "}
          <a
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Schedule a free consultation office@directchinagoods.com
          </a>
        </h3>
        <p className="text-black/80 mt-2">
          Let's discuss your unique business needs and create a tailored
          strategy for your success in China.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
