import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$199",
      period: "per project",
      description: "Perfect for small businesses and MVPs",
      features: [
        "Single page application",
        "Responsive design",
        "Basic integrations",
        "30-day support",
      ],
      featured: false,
    },
    {
      name: "Business",
      price: "$499",
      period: "per project",
      description: "Ideal for growing companies",
      features: [
        "Multi-page application",
        "Custom UI/UX design",
        "API integrations",
        "Database setup",
        "90-day support",
        "Performance optimization",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large-scale operations",
      features: [
        "Full-stack development",
        "Dedicated team",
        "24/7 priority support",
        "Custom integrations",
        "Ongoing maintenance",
        "SLA guarantee",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mb-4">Pricing</div>
          <h2 className="heading-2 mb-4">
            Transparent Pricing for Every Scale
          </h2>
          <p className="body-text">
            Choose the plan that fits your needs. All plans include our core 
            development methodology and quality assurance.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={plan.featured ? "card-pricing-featured" : "card-pricing"}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="badge-accent">Most Popular</span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full ${plan.featured ? "btn-cta" : "btn-secondary"} justify-center`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
