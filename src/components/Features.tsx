import { Code2, Smartphone, Database, Cloud, Palette, Building2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored solutions built specifically for your unique business workflows and requirements.",
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Applications",
      description: "Cross-platform apps that deliver seamless experiences on every device.",
    },
    {
      icon: Database,
      title: "ERP & CRM Solutions",
      description: "Integrated systems to streamline your operations and customer relationships.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and automated pipelines for reliable deployments.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive interfaces that users love and that drive business results.",
    },
    {
      icon: Building2,
      title: "Business Digitization",
      description: "Complete digital transformation to modernize your entire organization.",
    },
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mb-4">Our Services</div>
          <h2 className="heading-2 mb-4">
            Everything You Need to Build & Scale
          </h2>
          <p className="body-text">
            From concept to deployment, we provide end-to-end software solutions 
            that help businesses grow faster and operate smarter.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="card-feature group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-3 mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
