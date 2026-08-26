import React from 'react';
import { ArrowRight } from 'lucide-react';

import tenancyImg from '../assets/images/end_of_tenancy_clean_1787735636122.jpg';
import domesticImg from '../assets/images/domestic_clean_home_1787736932711.jpg';
import officeImg from '../assets/images/office_clean_modern_1787735650654.jpg';
import deepCleanImg from '../assets/images/deep_kitchen_clean_1787736947498.jpg';
import regularImg from '../assets/images/steam_cleaner_floor_1787736504481.jpg';
import movingImg from '../assets/images/moving_clean_sunlit_1787736959684.jpg';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onSelectServiceModal?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuoteModal,
  onSelectServiceModal,
}) => {
  const servicesList = [
    {
      id: 'end-of-tenancy',
      title: 'End of Tenancy Cleaning',
      description: 'Deep cleaning designed to help leave your property fresh and ready for its next chapter.',
      image: tenancyImg,
      alt: 'End of tenancy handover cleaning',
    },
    {
      id: 'domestic',
      title: 'Domestic Cleaning',
      description: 'Professional cleaning for homes that need a regular refresh or a one-off clean.',
      image: domesticImg,
      alt: 'Domestic home cleaning service',
    },
    {
      id: 'office',
      title: 'Office Cleaning',
      description: 'Keep your workspace clean, presentable and comfortable for your team and visitors.',
      image: officeImg,
      alt: 'Professional office and workplace cleaning',
    },
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning',
      description: 'A more thorough clean for spaces that need extra attention.',
      image: deepCleanImg,
      alt: 'Detailed deep cleaning service',
    },
    {
      id: 'one-off-regular',
      title: 'One-Off & Regular Cleaning',
      description: 'Flexible cleaning options depending on your needs and schedule.',
      image: regularImg,
      alt: 'Flexible one-off and regular recurring cleaning',
    },
    {
      id: 'moving-in-out',
      title: 'Moving-In / Moving-Out Cleaning',
      description: 'Give your property a fresh start before moving in or after moving out.',
      image: movingImg,
      alt: 'Moving in and moving out clean',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#081524] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#E8F827]" />
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#E8F827]">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
            Cleaning services tailored to your needs
          </h2>

          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
            From regular home cleaning to deep cleans and end-of-tenancy services, choose the cleaning service that works for you.
          </p>
        </div>

        {/* Clean Service-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service, idx) => (
            <div
              key={service.id}
              id={`service-card-${idx + 1}`}
              className="group bg-[#0A1A2C] border border-white/10 hover:border-[#E8F827]/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Service Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#071320]">
                <img
                  src={service.image}
                  alt={service.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2C] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Service Details & Content */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight mb-2.5 group-hover:text-[#E8F827] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300/85 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="pt-2 border-t border-white/5">
                  <button
                    onClick={() => {
                      if (onSelectServiceModal) {
                        onSelectServiceModal(service.id);
                      } else {
                        onOpenQuoteModal(service.id);
                      }
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#E8F827] hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
