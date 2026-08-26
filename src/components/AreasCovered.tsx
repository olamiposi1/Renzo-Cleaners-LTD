import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, AlertCircle, Phone, ArrowRight } from 'lucide-react';
import { areasData, checkPostcodeCoverage } from '../data/areasData';
import { AreaItem } from '../types';

interface AreasCoveredProps {
  onOpenQuoteModal: (areaName?: string) => void;
}

export const AreasCovered: React.FC<AreasCoveredProps> = ({ onOpenQuoteModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<{ covered?: boolean; message?: string; areaMatch?: AreaItem } | null>(null);
  const [selectedBorough, setSelectedBorough] = useState<string>('All');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const result = checkPostcodeCoverage(searchQuery);
      setSearchResult(result);
    }
  };

  const boroughs = ['All', 'Manchester', 'Salford', 'Trafford', 'Stockport', 'Bury', 'Cheshire East'];

  const filteredAreas = areasData.filter((area) => {
    if (selectedBorough === 'All') return true;
    return area.borough.toLowerCase() === selectedBorough.toLowerCase();
  });

  return (
    <section id="areas" className="py-16 lg:py-24 bg-[#F7FAF9] border-b border-[#E6EEED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="w-6 h-[2px] bg-[#18B6A4]" />
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#18B6A4]">
              Local Greater Manchester Coverage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D3A] tracking-tight mb-4">
            Areas We Cover Across Manchester
          </h2>
          <p className="text-base sm:text-lg text-[#142126] opacity-75 leading-relaxed font-normal">
            Renzo Cleaners proudly serves central Manchester, South Manchester suburbs, Salford, Trafford, and surrounding areas. Check your location below.
          </p>

          {/* Postcode Search Box */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mt-8 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71878F]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (searchResult) setSearchResult(null);
                }}
                placeholder="Enter postcode or area (e.g. M20, Didsbury, WA14)..."
                className="w-full pl-10 pr-4 py-3.5 bg-white border border-[#E6EEED] rounded-xl text-sm text-[#0B2D3A] placeholder-[#71878F] focus:outline-none focus:border-[#18B6A4] shadow-xs"
              />
            </div>
            <button
              type="submit"
              className="bg-[#0B2D3A] hover:bg-[#143B48] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Check Postcode</span>
            </button>
          </form>

          {/* Search Result Feedback */}
          {searchResult && (
            <div
              className={`max-w-xl mx-auto mt-4 p-4 rounded-xl text-sm flex items-start gap-3 text-left border ${
                searchResult.covered
                  ? 'bg-[#E6F7F5] border-[#18B6A4]/50 text-[#084C44]'
                  : 'bg-amber-50 border-amber-300 text-amber-900'
              }`}
            >
              {searchResult.covered ? (
                <CheckCircle2 className="w-5 h-5 text-[#18B6A4] flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p className="font-semibold">{searchResult.message}</p>
                {searchResult.covered && (
                  <button
                    onClick={() => onOpenQuoteModal(searchQuery)}
                    className="mt-2 text-xs font-bold text-[#0E8A7C] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Book a clean for {searchQuery.toUpperCase()}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Borough Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {boroughs.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBorough(b)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedBorough === b
                  ? 'bg-[#0B2D3A] text-white shadow-xs'
                  : 'bg-white text-[#546A72] border border-[#E6EEED] hover:bg-[#EAEFEF]'
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#E6EEED] hover:border-[#18B6A4]/50 transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#18B6A4] bg-[#0B2D3A] px-2.5 py-1 rounded">
                    {area.borough}
                  </span>
                  {area.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B2D3A] opacity-60">
                      High Availability
                    </span>
                  )}
                </div>

                <h3 className="text-base font-extrabold text-[#0B2D3A] tracking-tight mb-2">
                  {area.name}
                </h3>

                <div className="flex flex-wrap gap-1 mb-4">
                  {area.postcodes.slice(0, 4).map((pc, pcIdx) => (
                    <span
                      key={pcIdx}
                      className="text-[11px] bg-[#F7FAF9] border border-[#E6EEED] text-[#0B2D3A] px-2 py-0.5 rounded font-mono font-medium"
                    >
                      {pc}
                    </span>
                  ))}
                  {area.postcodes.length > 4 && (
                    <span className="text-[10px] text-[#71878F] self-center font-medium">
                      +{area.postcodes.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteModal(area.name)}
                className="w-full py-2.5 px-3 rounded-lg bg-[#F7FAF9] hover:bg-[#0B2D3A] text-[#0B2D3A] hover:text-white text-xs font-bold uppercase tracking-wider border border-[#E6EEED] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Request Clean</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Coverage Note Footer */}
        <div className="mt-8 text-center text-xs text-[#546A72]">
          <span>Don't see your specific neighbourhood listed? We frequently service border postcodes across Greater Manchester. </span>
          <a href="tel:01618204912" className="text-[#0E8A7C] font-semibold hover:underline">
            Give us a call on 0161 820 4912
          </a>
        </div>
      </div>
    </section>
  );
};
