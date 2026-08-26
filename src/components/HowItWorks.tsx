import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

import step1Img from '../assets/images/customer_quote_request_1787737653061.jpg';
import step2Img from '../assets/images/cleaner_booking_schedule_1787737668319.jpg';
import step3Img from '../assets/images/enjoy_clean_home_1787737679883.jpg';

interface HowItWorksProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQuoteModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Tell us what you need',
      description: 'Request a quote and tell us about your cleaning requirements.',
      image: step1Img,
      alt: 'Requesting a cleaning quote online',
    },
    {
      num: '02',
      title: 'Choose a convenient time',
      description: 'Arrange a cleaning time that works for you.',
      image: step2Img,
      alt: 'Flexible booking schedule and cleaner arrival',
    },
    {
      num: '03',
      title: 'Enjoy a cleaner space',
      description: 'Renzo takes care of the cleaning while you get on with your day.',
      image: step3Img,
      alt: 'Relaxing in a fresh, spotless home',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#081524] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title on Left and Supporting Note on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#E8F827]" />
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#E8F827]">
                HOW IT WORKS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] max-w-xl">
              Getting your space clean is simple
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-400 font-normal md:text-right max-w-xs">
            And sometimes, in as little as 24 hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {steps.map((step, idx) => (
            <div
              key={idx}
              id={`how-step-${idx + 1}`}
              className="bg-[#0A1A2C] border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-white/25 transition-all duration-300 group"
            >
              {/* Text info */}
              <div className="mb-6">
                <span className="text-xs font-mono font-bold text-slate-400 block mb-2 tracking-wider">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#E8F827] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-300/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#071320] border border-white/10">
                <img
                  src={step.image}
                  alt={step.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2C]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </div>
          ))}

          {/* 4th Column: Ready to get started CTA card */}
          <div className="bg-[#0A1A2C] border border-[#E8F827]/30 rounded-3xl p-7 lg:p-8 flex flex-col justify-between text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8F827]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8F827]/15 border border-[#E8F827]/30 flex items-center justify-center text-[#E8F827] mb-6">
                <Sparkles className="w-5 h-5" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E8F827] block mb-2">
                READY TO GET STARTED?
              </span>

              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                Simple pricing, no hidden surprises.
              </h3>

              <p className="text-xs sm:text-[13px] text-slate-300/85 leading-relaxed mb-6">
                Tell us about your space and schedule, and we’ll prepare a tailored quote right away.
              </p>
            </div>

            <button
              id="how-it-works-quote-cta"
              onClick={() => onOpenQuoteModal()}
              className="w-full py-3.5 px-6 rounded-full bg-[#E8F827] hover:bg-[#d9e821] active:scale-[0.98] text-[#081524] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#E8F827]/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
