import React from 'react';
import { ArrowRight, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenQuoteModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="final-cta"
      className="py-24 lg:py-32 bg-[#050E18] text-white relative overflow-hidden border-b border-white/10"
    >
      {/* Restrained architectural background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081524]/60 via-transparent to-[#050E18] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8F827]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="bg-[#0A1A2C] border border-white/15 rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#E8F827]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0E243D] rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl mx-auto">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[#081524] border border-[#E8F827]/30 px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#E8F827]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E8F827]">
                GET STARTED WITH RENZO
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-5">
              Ready for a cleaner space?
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed mb-10 max-w-xl mx-auto font-normal">
              Tell us what you need cleaned and we'll help you arrange the right service.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="final-cta-get-quote"
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E8F827] hover:bg-[#d9e821] active:scale-[0.98] text-[#081524] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl shadow-[#E8F827]/15 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="final-cta-call-renzo"
                href="tel:07593799323"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#081524] hover:bg-[#0c1f35] border border-white/20 hover:border-white/40 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-[#E8F827]" />
                <span>Call 07593 799323</span>
              </a>
            </div>

            {/* Key Service Reassurances */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8F827]" />
                <span>No obligation quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8F827]" />
                <span>Flexible scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8F827]" />
                <span>Manchester &amp; surrounding areas</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
