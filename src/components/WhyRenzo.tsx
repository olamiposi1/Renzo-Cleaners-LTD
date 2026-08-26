import React from 'react';
import { ShieldCheck, Sparkles, CalendarRange, MapPin } from 'lucide-react';

export const WhyRenzo: React.FC = () => {
  const benefits = [
    {
      id: 'reliable-service',
      icon: ShieldCheck,
      title: 'Reliable Service',
      description:
        'Count on a dependable, punctual team you can feel comfortable welcoming into your home or workspace.',
    },
    {
      id: 'attention-to-detail',
      icon: Sparkles,
      title: 'Attention to Detail',
      description:
        'We focus on doing the small things properly — from high-touch surfaces and edges to spotless finishes.',
    },
    {
      id: 'flexible-cleaning',
      icon: CalendarRange,
      title: 'Flexible Cleaning',
      description:
        'Choose from flexible one-off cleaning visits or recurring schedules tailored to your routine.',
    },
    {
      id: 'local-to-manchester',
      icon: MapPin,
      title: 'Local to Manchester',
      description:
        'A dedicated local cleaning service proudly covering Manchester and surrounding communities.',
    },
  ];

  return (
    <section id="why-renzo" className="py-20 lg:py-28 bg-[#081524] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#E8F827]" />
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#E8F827]">
              WHY RENZO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            A cleaner space. Less to worry about.
          </h2>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.id}
                id={`why-benefit-${idx + 1}`}
                className="bg-[#0A1A2C] border border-white/10 hover:border-[#E8F827]/40 rounded-3xl p-7 lg:p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#081524] border border-white/10 group-hover:border-[#E8F827]/30 flex items-center justify-center text-[#E8F827] mb-6 transition-colors">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#E8F827] transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300/85 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
