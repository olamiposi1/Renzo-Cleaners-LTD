import React from 'react';
import { MessageSquare, Quote, Star } from 'lucide-react';

interface TestimonialSectionProps {
  onOpenQuoteModal?: () => void;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-[#081524] text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#E8F827]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#E8F827]" />
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#E8F827]">
              TESTIMONIALS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4">
            What our customers say
          </h2>

          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
            Real feedback from Manchester homeowners, tenants, and local businesses.
          </p>
        </div>

        {/* Testimonial Placeholder Card Structure */}
        <div className="max-w-3xl">
          <div
            id="testimonial-card-placeholder"
            className="bg-[#0A1A2C] border border-white/10 rounded-3xl p-8 sm:p-10 relative overflow-hidden group shadow-xl"
          >
            {/* Top Row: Label Badge and Quote Icon */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="inline-flex items-center gap-2.5 bg-[#081524] border border-white/15 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#E8F827]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Customer review
                </span>
              </div>

              <div className="w-10 h-10 rounded-2xl bg-[#081524] border border-white/10 flex items-center justify-center text-[#E8F827]">
                <Quote className="w-5 h-5" />
              </div>
            </div>

            {/* Main Quote Content */}
            <div className="my-6 sm:my-8">
              <p className="text-xl sm:text-2xl lg:text-[26px] font-medium text-white/90 leading-relaxed italic">
                “Add verified customer reviews here.”
              </p>
            </div>

            {/* Bottom Meta note */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#E8F827]" />
                <span>Verified feedback will appear here as new reviews are collected.</span>
              </div>

              {onOpenQuoteModal && (
                <button
                  onClick={onOpenQuoteModal}
                  className="text-[#E8F827] hover:text-white font-bold transition-colors cursor-pointer text-left sm:text-right"
                >
                  Book your clean today →
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
