const SocialProof = () => {
  const logos = [
    { name: "TechCorp", initials: "TC" },
    { name: "StartupX", initials: "SX" },
    { name: "GlobalEnt", initials: "GE" },
    { name: "InnovateCo", initials: "IC" },
    { name: "DigitalFirst", initials: "DF" },
    { name: "FutureTech", initials: "FT" },
  ];

  return (
    <section className="section-padding !py-12 border-y border-border bg-muted/30">
      <div className="container-max">
        <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider font-medium">
          Trusted by startups, enterprises, and institutions
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity grayscale"
            >
              <div className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-foreground/60">{logo.initials}</span>
              </div>
              <span className="text-lg font-semibold text-foreground/60">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
