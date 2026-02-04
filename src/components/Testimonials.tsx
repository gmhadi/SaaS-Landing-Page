import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Saylani Tech transformed our manual processes into a fully automated system. Our operational efficiency increased by 40% within the first month.",
      name: "Ahmed Hassan",
      role: "CEO, TechVentures",
      avatar: "AH",
    },
    {
      quote: "The team's expertise in both development and design resulted in an app that our users absolutely love. Highly recommend their services.",
      name: "Sarah Khan",
      role: "Product Manager, StartupHub",
      avatar: "SK",
    },
    {
      quote: "Professional, responsive, and delivered exactly what we needed. Their ERP solution has been running flawlessly for over two years now.",
      name: "Michael Chen",
      role: "Operations Director, GlobalRetail",
      avatar: "MC",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mb-4">Testimonials</div>
          <h2 className="heading-2 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="body-text">
            Don't just take our word for it. Here's what our clients have to say 
            about working with Saylani Tech.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card-testimonial">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
