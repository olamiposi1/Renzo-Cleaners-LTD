import React from 'react';
import { Sparkles, CheckCircle2, Shield, HeartHandshake, Eye, Wrench } from 'lucide-react';
import heroImg from '../assets/images/hero_cleaning_manchester_1787735620077.jpg';

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Eye,
      title: 'Meticulous Attention to Detail',
      description: 'We focus on the areas commonly overlooked — from behind appliances and tile grout to baseboards, switches, and high ledges.',
    },
    {
      icon: Wrench,
      title: 'Professional Cleaning Supplies',
      description: 'We bring dedicated cleaning equipment, microfibers, and proven solutions suited for various stone, wood, and ceramic surfaces.',
    },
    {
      icon: HeartHandshake,
      title: 'Respectful & Reliable Cleaners',
      description: 'Our cleaners are vetted, respectful of your home and workspace, and committed to punctual arrival and clear communication.',
    },
    {
      icon: Shield,
      title: 'Transparent Pricing & No Contracts',
      description: 'Clear upfront quotes with no hidden charges. Book one-off cleans or recurring visits with total flexibility.',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-[#E6EEED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="mb-2 flex items-center gap-2.5">
              <span className="w-6 h-[2px] bg-[#18B6A4]" />
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#18B6A4]">
                About Renzo Cleaners Ltd
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D3A] tracking-tight leading-tight">
              A Dedicated Cleaning Company Serving Greater Manchester
            </h2>

            <p className="text-base sm:text-lg text-[#142126] opacity-75 leading-relaxed font-normal">
              At <strong className="text-[#0B2D3A] font-extrabold">Renzo Cleaners Ltd</strong>, our mission is straightforward: to deliver thorough, dependable cleaning services that leave homes and workplaces genuinely fresh, sanitized, and ready for what comes next.
            </p>

            <p className="text-sm sm:text-base text-[#142126] opacity-75 leading-relaxed">
              Whether preparing a rental property for a rigorous end-of-tenancy inventory inspection, keeping a family home clean and manageable, or maintaining a spotless office environment in Manchester, we bring careful standards and reliable service to every job.
            </p>

            {/* Value grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="bg-[#F7FAF9] p-5 rounded-2xl border border-[#E6EEED] hover:border-[#18B6A4]/40 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#0B2D3A] text-[#18B6A4] flex items-center justify-center mb-3 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-extrabold text-[#0B2D3A] tracking-tight mb-1">
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#142126] opacity-75 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#0B2D3A] shadow-2xl bg-[#0B2D3A] text-white">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={heroImg}
                  alt="Renzo Cleaners in Manchester"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 bg-[#0B2D3A]">
                <div className="flex items-center gap-2 text-[11px] font-extrabold text-[#18B6A4] uppercase tracking-widest mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Renzo Clean Promise</span>
                </div>
                <h4 className="text-xl font-extrabold text-white mb-2 tracking-tight">
                  Quality Cleaning Without Compromise
                </h4>
                <p className="text-xs sm:text-sm text-[#C4D9D5] opacity-90 leading-relaxed">
                  Every booking is backed by our direct accountability. If any agreed area needs attention, let us know and we will resolve it promptly.
                </p>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#9BBFB8] uppercase tracking-wider font-semibold">Direct Local Support</span>
                  <a href="tel:01618204912" className="text-[#18B6A4] font-extrabold hover:underline text-sm">
                    0161 820 4912
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
