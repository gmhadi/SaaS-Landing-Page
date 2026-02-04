import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="section-padding pt-32 md:pt-40 bg-gradient-subtle">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="badge mb-6">
              🚀 Trusted by 500+ businesses
            </div>
            
            <h1 className="heading-1 mb-6">
              Building Scalable Software & Digital Solutions for{" "}
              <span className="text-gradient">Modern Businesses</span>
            </h1>
            
            <p className="body-text mb-8">
              Saylani Tech helps startups and enterprises design, develop, and 
              digitize their operations with reliable software solutions. From 
              custom apps to complete digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-cta">
                Get a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#features" className="btn-secondary">
                <Play className="mr-2 w-5 h-5" />
                View Services
              </a>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Browser Header */}
              <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                  <div className="w-3 h-3 rounded-full bg-accent/40"></div>
                  <div className="w-3 h-3 rounded-full bg-accent/60"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-md px-3 py-1 text-sm text-muted-foreground">
                    dashboard.saylanitech.com
                  </div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-background">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-primary/5 rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Revenue</div>
                    <div className="text-2xl font-bold text-foreground">$124,500</div>
                    <div className="text-sm text-accent">+12.5%</div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Active Users</div>
                    <div className="text-2xl font-bold text-foreground">8,420</div>
                    <div className="text-sm text-accent">+8.2%</div>
                  </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="bg-muted rounded-lg p-4 h-32 flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/60 rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
              ✓ 99.9% Uptime
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-2 rounded-lg shadow-lg text-sm">
              <span className="text-muted-foreground">Response time:</span>{" "}
              <span className="font-semibold text-foreground">{"<"}50ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
