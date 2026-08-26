import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import featuredImg from '../assets/images/editorial_tenancy_handover_1787736994099.jpg';

interface FeaturedTenancyProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const FeaturedTenancy: React.FC<FeaturedTenancyProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="featured-tenancy" className="py-20 lg:py-28 bg-[#050E18] text-white relative overflow-hidden border-b border-white/10">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E8F827]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Asset with Editorial Framing */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl bg-[#081524] group">
              <img
                src={featuredImg}
                alt="Immaculate property ready for landlord handover"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16/11] group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050E18]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating editorial badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto bg-[#081524]/90 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xl">
                <div className="w-11 h-11 rounded-xl bg-[#E8F827]/15 border border-[#E8F827]/30 flex items-center justify-center text-[#E8F827] flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">Inspection-Ready Standards</p>
                  <p className="text-xs text-slate-300">Detailed room-by-room inventory checklist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy, Bullets & High-Intent CTA */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#E8F827]" />
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#E8F827]">
                FEATURED SERVICE
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.14] mb-6">
              Moving out? Leave the cleaning to us.
            </h2>

            {/* Supporting copy */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal mb-8">
              Our end-of-tenancy cleaning service helps landlords, tenants and property occupants get a property looking fresh, clean and ready for its next chapter.
            </p>

            {/* Value checklist bullets */}
            <div className="space-y-3.5 mb-10">
              {[
                'Full kitchen degreasing, oven exterior, hobs & extraction hoods',
                'Bathroom limescale removal, grout scrubbing & screen buffing',
                'Skirting boards, interior windows, door frames & socket polishing',
                'Deep vacuuming & sanitized hard-floor mopping throughout',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E8F827] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-[15px] text-slate-200 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button
                id="featured-tenancy-quote-cta"
                onClick={() => onOpenQuoteModal('end-of-tenancy')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E8F827] hover:bg-[#d9e821] active:scale-[0.98] text-[#081524] px-8 py-4 rounded-full text-[15px] font-bold shadow-xl shadow-[#E8F827]/15 transition-all duration-200 cursor-pointer"
              >
                <span>Get an End of Tenancy Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
