import { MessageSquare, Code, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Consultation",
      description: "We start by understanding your business needs, challenges, and goals through in-depth discovery sessions.",
    },
    {
      number: "02",
      icon: Code,
      title: "Development",
      description: "Our agile team builds your solution with transparent, milestone-based progress updates throughout.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Launch & Support",
      description: "We handle deployment, training, and provide ongoing maintenance to ensure long-term success.",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mb-4">How It Works</div>
          <h2 className="heading-2 mb-4">
            Simple Process, Powerful Results
          </h2>
          <p className="body-text">
            Our proven methodology ensures your project is delivered on time, 
            on budget, and exceeds expectations.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-border"></div>
          
          {steps.map((step) => (
            <div key={step.title} className="relative text-center">
              {/* Step Number Badge */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                {step.number}
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="heading-3 mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
