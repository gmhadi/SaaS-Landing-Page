import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We work with clients across various industries including healthcare, finance, e-commerce, education, logistics, and more. Our solutions are customized to meet industry-specific requirements and compliance standards.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, all our plans include post-launch support. We offer maintenance packages ranging from 30 days to ongoing 24/7 support depending on your needs. Our team is always available to help with updates, bug fixes, and enhancements.",
    },
    {
      question: "How long does development take?",
      answer: "Project timelines vary based on complexity. A simple web application might take 4-6 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process.",
    },
    {
      question: "Is pricing fixed or flexible?",
      answer: "We offer both fixed-price and flexible engagement models. Fixed pricing works well for projects with clear requirements, while our time-and-materials model suits projects that may evolve. We'll recommend the best approach during consultation.",
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integrating new solutions with existing infrastructure. Whether it's connecting to legacy systems, third-party APIs, or migrating data, our team ensures seamless integration with minimal disruption.",
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, proven technologies including React, Node.js, Python, AWS, Azure, and more. Our tech stack choices are based on your specific requirements, scalability needs, and long-term maintenance considerations.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mb-4">FAQ</div>
          <h2 className="heading-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="body-text">
            Got questions? We've got answers. If you can't find what you're 
            looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
