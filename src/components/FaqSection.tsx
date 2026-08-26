import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  onOpenQuoteModal?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuoteModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What cleaning services does Renzo Cleaners provide?',
      answer:
        'We provide regular domestic home cleaning, deep cleaning, end-of-tenancy cleans, moving-in/moving-out cleaning, and commercial office cleaning.',
    },
    {
      question: 'Do you offer one-off cleaning?',
      answer:
        'Yes. We offer one-off cleans for properties needing a thorough single refresh, post-event cleaning, or a seasonal deep clean without any ongoing commitment.',
    },
    {
      question: 'Do you provide regular domestic cleaning?',
      answer:
        'Yes. We arrange regular domestic cleaning tailored to your preferred routine, including weekly, fortnightly, or monthly visits.',
    },
    {
      question: 'Do you offer end-of-tenancy cleaning?',
      answer:
        'Yes. Our end-of-tenancy cleaning covers comprehensive cleaning of kitchens, bathrooms, living areas, skirting boards, and appliances to prepare the property for handover.',
    },
    {
      question: 'Do you clean offices and commercial spaces?',
      answer:
        'Yes. We clean offices, studios, and commercial workspaces across Manchester with flexible scheduling designed to avoid disrupting your working hours.',
    },
    {
      question: 'Which areas of Manchester do you cover?',
      answer:
        'Renzo Cleaners covers Manchester and surrounding areas across Greater Manchester, including the City Centre, Salford, Didsbury, Chorlton, Altrincham, Sale, Stockport, Prestwich, and nearby commuter districts.',
    },
    {
      question: 'How can I request a quote?',
      answer:
        'You can request a free quote by clicking "Get a Free Quote" to fill in your space details, or by getting in touch with our team directly via phone or email.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-[#081524] text-white border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#E8F827]" />
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#E8F827]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-5 h-[2px] bg-[#E8F827]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.15] mb-4">
            Common questions answered
          </h2>

          <p className="text-sm sm:text-base text-slate-300/80 font-normal">
            Everything you need to know about our services and booking process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx + 1}`}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0A1A2C] border-[#E8F827]/40 shadow-lg'
                    : 'bg-[#0A1A2C]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#E8F827] text-[#081524] rotate-180'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-[15px] text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Small Bottom Contact Prompt */}
        <div className="mt-12 text-center bg-[#0A1A2C]/40 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-[#E8F827]/10 flex items-center justify-center text-[#E8F827] flex-shrink-0">
              <HelpCircle className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Have a specific question about your property?
            </p>
          </div>

          {onOpenQuoteModal && (
            <button
              onClick={onOpenQuoteModal}
              className="text-xs font-bold uppercase tracking-wider text-[#E8F827] hover:text-white transition-colors cursor-pointer"
            >
              Ask our team or request a quote →
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
