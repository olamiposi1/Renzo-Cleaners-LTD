import React, { useState } from 'react';
import { Sparkles, Sliders, CheckCircle2 } from 'lucide-react';
import bathroomImg from '../assets/images/bathroom_deep_clean_1787735668814.jpg';
import tenancyImg from '../assets/images/end_of_tenancy_clean_1787735636122.jpg';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'bathroom' | 'kitchen'>('bathroom');

  const comparisons = {
    bathroom: {
      title: 'Modern Bathroom & Tile Descaling',
      area: 'Didsbury, South Manchester',
      service: 'Deep Cleaning Service',
      description: 'Limescale removed from glass shower doors, grout line brightening, and polished chrome tapware.',
      image: bathroomImg,
      highlights: ['Hard water scale dissolved', 'Silicone mould treatment', 'Streak-free chrome & mirror buffing'],
    },
    kitchen: {
      title: 'Kitchen & Appliance Restoration',
      area: 'Ancoats, Manchester City Centre',
      service: 'End of Tenancy Clean',
      description: 'Full degreasing of splashback tiles, deep oven carbon breakdown, and sanitized worktops.',
      image: tenancyImg,
      highlights: ['Oven glass & rack degreased', 'Extractor fan casing cleaned', 'Sanitized cupboard interiors'],
    },
  };

  const current = comparisons[activeTab];

  return (
    <section className="py-16 lg:py-24 bg-[#081F28] text-white border-b border-[#143B48] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="w-6 h-[2px] bg-[#18B6A4]" />
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#18B6A4]">
              Real Manchester Results
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Renzo Standard in Action
          </h2>
          <p className="text-base sm:text-lg text-[#C4D9D5] opacity-80 leading-relaxed">
            Drag the interactive slider below to inspect our attention to detail across kitchens, bathrooms, and living spaces.
          </p>

          {/* Toggle comparison tabs */}
          <div className="inline-flex items-center gap-1.5 bg-[#0B2D3A] p-1.5 rounded-xl border border-white/10 mt-6">
            <button
              onClick={() => setActiveTab('bathroom')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'bathroom'
                  ? 'bg-[#18B6A4] text-white shadow-md'
                  : 'text-[#93B8B1] hover:text-white'
              }`}
            >
              Bathroom Descale
            </button>
            <button
              onClick={() => setActiveTab('kitchen')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'kitchen'
                  ? 'bg-[#18B6A4] text-white shadow-md'
                  : 'text-[#93B8B1] hover:text-white'
              }`}
            >
              Kitchen &amp; Tenancy Reset
            </button>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Slider Container (8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl select-none bg-black">
              {/* After Image (Full background) */}
              <img
                src={current.image}
                alt="After professional clean"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* After label */}
              <span className="absolute top-4 right-4 bg-[#18B6A4] text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-md z-10">
                AFTER RENZO CLEAN
              </span>

              {/* Before Overlay (Clipped by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={current.image}
                  alt="Before professional clean"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover filter contrast-75 brightness-75 grayscale-[40%] sepia-[15%]"
                  style={{
                    width: '100%',
                    maxWidth: 'none',
                  }}
                />
                {/* Before label */}
                <span className="absolute top-4 left-4 bg-[#081F28]/90 border border-white/20 text-[#D1E5E1] text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-md">
                  BEFORE CLEAN
                </span>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#0B2D3A] shadow-xl flex items-center justify-center border-2 border-[#18B6A4]">
                  <Sliders className="w-4 h-4 rotate-90 text-[#0B2D3A]" />
                </div>
              </div>

              {/* Range input controller over the image */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                aria-label="Before and after slider position"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>
            <p className="text-center text-xs text-[#8EAFA8] mt-3 font-semibold uppercase tracking-wider">
              ← Drag slider to compare before and after →
            </p>
          </div>

          {/* Details & Highlights (4 cols) */}
          <div className="lg:col-span-4 bg-[#0B2D3A] p-6 sm:p-7 rounded-2xl border border-white/15 space-y-5 shadow-xl">
            <div>
              <span className="text-[11px] font-bold text-[#18B6A4] uppercase tracking-widest block mb-1">
                {current.service}
              </span>
              <h3 className="text-xl font-extrabold text-white tracking-tight">
                {current.title}
              </h3>
              <span className="text-xs text-[#8EAFA8] block mt-0.5 font-medium">{current.area}</span>
            </div>

            <p className="text-xs sm:text-sm text-[#C4D9D5] leading-relaxed opacity-90">
              {current.description}
            </p>

            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <span className="text-[11px] font-extrabold text-white uppercase tracking-wider block">
                Key Improvements:
              </span>
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#C4D9D5]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#18B6A4] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{h}</span>
                </div>
              ))}
            </div>

            <a
              href="#calculator"
              className="block w-full text-center py-3.5 px-4 rounded-lg bg-[#18B6A4] text-white font-bold text-xs uppercase tracking-widest hover:brightness-105 transition-all shadow-md shadow-[#18B6A4]/20"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
