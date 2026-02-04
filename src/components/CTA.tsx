import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-dark">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Digitize Your Business?
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
            Let's build software that actually solves problems. Get in touch for a 
            free consultation and discover how we can help transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@saylanitech.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Call Us: +1 (234) 567-890
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24-Hour Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
