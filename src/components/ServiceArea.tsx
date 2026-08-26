import React, { useState } from 'react';
import { MapPin, ArrowRight, Search, CheckCircle2, AlertCircle } from 'lucide-react';
import mapVisual from '../assets/images/manchester_city_map_visual_1787737699849.jpg';
import { checkPostcodeCoverage } from '../data/areasData';

interface ServiceAreaProps {
  onOpenQuoteModal: (serviceId?: string, areaName?: string) => void;
}

export const ServiceArea: React.FC<ServiceAreaProps> = ({ onOpenQuoteModal }) => {
  const [postcode, setPostcode] = useState('');
  const [checkResult, setCheckResult] = useState<{
    tested: boolean;
    covered: boolean;
    message: string;
  } | null>(null);

  const handleCheckPostcode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode.trim()) return;

    const res = checkPostcodeCoverage(postcode);
    setCheckResult({
      tested: true,
      covered: res.covered,
      message: res.message,
    });
  };

  const sampleAreas = [
    { name: 'Manchester City Centre', code: 'M1 – M4' },
    { name: 'Salford & Quays', code: 'M3, M5, M50' },
    { name: 'Didsbury & Withington', code: 'M20' },
    { name: 'Chorlton-cum-Hardy', code: 'M21' },
    { name: 'Altrincham & Hale', code: 'WA14, WA15' },
    { name: 'Sale & Stretford', code: 'M32, M33' },
    { name: 'Stockport & Cheadle', code: 'SK1 – SK8' },
    { name: 'Prestwich & North Manchester', code: 'M25, M8, M9' },
  ];

  return (
    <section id="service-area" className="py-20 lg:py-28 bg-[#050E18] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Context, Postcode Checker & Area Tags */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#E8F827]" />
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#E8F827]">
                SERVICE COVERAGE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.15] mb-5">
              Cleaning services across Manchester
            </h2>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal mb-8">
              Renzo Cleaners serves customers in Manchester and surrounding areas. Whether you need domestic upkeep, end of tenancy or deep cleaning, we are ready to assist.
            </p>

            {/* Interactive Postcode Coverage Checker */}
            <div className="bg-[#081524] border border-white/15 rounded-3xl p-6 sm:p-7 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
                Check Your Manchester Postcode
              </span>

              <form onSubmit={handleCheckPostcode} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="e.g. M1, M20, WA14, SK4"
                    className="w-full bg-[#0A1A2C] border border-white/20 focus:border-[#E8F827] rounded-full px-5 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                <button
                  id="service-area-check-btn"
                  type="submit"
                  className="bg-[#E8F827] hover:bg-[#d9e821] active:scale-[0.98] text-[#081524] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
                >
                  <span>Check Area</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Result Notice */}
              {checkResult && (
                <div
                  className={`mt-4 p-3.5 rounded-2xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                    checkResult.covered
                      ? 'bg-[#E8F827]/10 border-[#E8F827]/30 text-[#E8F827]'
                      : 'bg-amber-500/10 border-amber-400/30 text-amber-300'
                  }`}
                >
                  {checkResult.covered ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-semibold">{checkResult.message}</p>
                    {checkResult.covered && (
                      <button
                        onClick={() => onOpenQuoteModal(undefined, postcode)}
                        className="mt-2 inline-flex items-center gap-1.5 font-bold underline hover:text-white cursor-pointer"
                      >
                        Proceed to request quote for this area →
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Example Coverage Examples */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Service Locations (Examples):
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                {sampleAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-300 bg-[#081524]/60 border border-white/5 px-3 py-2 rounded-xl"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#E8F827] flex-shrink-0" />
                    <span className="font-medium text-white truncate">{area.name}</span>
                    <span className="text-[10px] text-slate-500 ml-auto hidden sm:inline">{area.code}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Stylized Manchester Cartography Visual & Map Overlay */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl bg-[#081524] group">
              <img
                src={mapVisual}
                alt="Stylized Manchester map coverage graphic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16/11] group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050E18]/85 via-transparent to-transparent pointer-events-none" />

              {/* Map Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-8 bg-[#0A1A2C]/90 backdrop-blur-md border border-white/15 rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F827]/15 border border-[#E8F827]/30 flex items-center justify-center text-[#E8F827] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">Greater Manchester Coverage</h4>
                    <p className="text-xs text-slate-400">All M Postcodes &amp; Surrounding Commuter Towns</p>
                  </div>
                </div>

                <button
                  id="service-area-cta-btn"
                  onClick={() => onOpenQuoteModal()}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#E8F827] hover:bg-[#d9e821] text-[#081524] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
                >
                  <span>Check Our Service Area</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
