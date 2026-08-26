import React from 'react';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import steamCleanerImage from '../assets/images/steam_cleaner_floor_1787736504481.jpg';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative bg-[#081524] text-white pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Supporting Text, CTAs & Trust Line */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center text-left">
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#E8F827]" />
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#E8F827]">
                Manchester Cleaning Specialists
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold tracking-tight text-white leading-[1.12] mb-6">
              Professional Cleaning Services in Manchester
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal mb-8 sm:mb-10 max-w-xl">
              Reliable cleaning for homes, offices, move-ins, move-outs and everything in between. Renzo Cleaners helps keep your space fresh, spotless and ready for what comes next.
            </p>

            {/* CTAs with Strong Hierarchy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              {/* Primary CTA */}
              <button
                id="hero-primary-quote-cta"
                onClick={onOpenQuoteModal}
                className="bg-[#E8F827] hover:bg-[#d9e821] active:scale-[0.98] text-[#081524] px-8 py-4 rounded-full text-[15px] font-bold shadow-xl shadow-[#E8F827]/15 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer text-center"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <a
                id="hero-secondary-call-cta"
                href="tel:07593799323"
                className="border border-white/25 hover:border-white/60 hover:bg-white/5 active:scale-[0.98] text-white px-8 py-4 rounded-full text-[15px] font-medium transition-all duration-200 flex items-center justify-center gap-2.5 text-center cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#E8F827]" />
                <span>Call 07593 799323</span>
              </a>
            </div>

            {/* Small Trust / Location Line */}
            <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-medium pt-2">
              <MapPin className="w-4 h-4 text-[#E8F827] flex-shrink-0" />
              <span>Serving Manchester &amp; surrounding areas</span>
            </div>
          </div>

          {/* Right Column: Large High-Quality Image */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl shadow-black/50 bg-[#0A1A2C] aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/4] w-full">
              <img
                src={steamCleanerImage}
                alt="Professional floor steam cleaning in modern Manchester interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081524]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


