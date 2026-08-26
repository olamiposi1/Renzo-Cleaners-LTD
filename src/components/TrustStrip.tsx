import React from 'react';
import { MapPin, Calendar, Sparkles, Clock } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: MapPin,
      title: 'Local Manchester Cleaners',
      description: 'Serving Manchester and surrounding areas',
    },
    {
      icon: Calendar,
      title: 'Flexible Cleaning',
      description: 'One-off or regular cleaning options',
    },
    {
      icon: Sparkles,
      title: 'Professional Service',
      description: 'Careful attention to detail',
    },
    {
      icon: Clock,
      title: 'Easy Booking',
      description: 'Request a quote quickly',
    },
  ];

  return (
    <section className="bg-[#050E18] border-y border-white/10 py-7 sm:py-9 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                id={`trust-item-${index + 1}`}
                className="flex items-start gap-3.5 p-3 rounded-2xl transition-colors hover:bg-white/[0.03]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E8F827]/10 border border-[#E8F827]/25 flex-shrink-0 flex items-center justify-center text-[#E8F827]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[13px] text-slate-400 leading-snug mt-0.5">
                    {item.description}
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

