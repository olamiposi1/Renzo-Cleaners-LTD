import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ArrowRight } from 'lucide-react';

import kitchenImg from '../assets/images/gallery_clean_kitchen_1787738356961.jpg';
import bathroomImg from '../assets/images/gallery_fresh_bathroom_1787738372742.jpg';
import livingRoomImg from '../assets/images/gallery_bright_living_room_1787738387487.jpg';
import cleanerImg from '../assets/images/gallery_pro_cleaner_1787738408293.jpg';
import officeImg from '../assets/images/gallery_clean_office_1787738425141.jpg';
import detailImg from '../assets/images/gallery_deep_detail_1787738440143.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  spanClass: string;
  aspectClass: string;
}

interface GallerySectionProps {
  onOpenQuoteModal?: (serviceId?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenQuoteModal }) => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gallery-kitchen',
      title: 'Clean Kitchen',
      category: 'Residential & Deep Clean',
      description: 'Polished surfaces, degreased splashbacks, spotless hobs and sanitised worktops.',
      image: kitchenImg,
      spanClass: 'lg:col-span-7',
      aspectClass: 'aspect-[16/10] sm:aspect-[16/9]',
    },
    {
      id: 'gallery-bathroom',
      title: 'Fresh Bathroom',
      category: 'Sanitisation & Descaling',
      description: 'Crystal-clear glass screens, descaled chrome fittings and gleaming tile finishes.',
      image: bathroomImg,
      spanClass: 'lg:col-span-5',
      aspectClass: 'aspect-[4/3] sm:aspect-[16/11]',
    },
    {
      id: 'gallery-cleaner',
      title: 'Professional Cleaner',
      category: 'Trained & Vetted Staff',
      description: 'Experienced team working with proper equipment and high-touch care.',
      image: cleanerImg,
      spanClass: 'lg:col-span-4',
      aspectClass: 'aspect-[3/4] sm:aspect-[4/5]',
    },
    {
      id: 'gallery-living-room',
      title: 'Bright Living Room',
      category: 'Domestic & Tenancy',
      description: 'Dust-free skirting boards, vacuumed carpets, and pristine communal spaces.',
      image: livingRoomImg,
      spanClass: 'lg:col-span-8',
      aspectClass: 'aspect-[16/10]',
    },
    {
      id: 'gallery-office',
      title: 'Clean Office',
      category: 'Commercial Spaces',
      description: 'Tidy workstations, sanitized meeting rooms and welcoming client areas.',
      image: officeImg,
      spanClass: 'lg:col-span-6',
      aspectClass: 'aspect-[16/10] sm:aspect-[4/3]',
    },
    {
      id: 'gallery-detail',
      title: 'Deep-Clean Detail',
      category: 'High-Precision Focus',
      description: 'Limescale-free chrome fixtures, spotless corners and zero residual marks.',
      image: detailImg,
      spanClass: 'lg:col-span-6',
      aspectClass: 'aspect-[16/10] sm:aspect-[4/3]',
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-[#050E18] text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E8F827]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#E8F827]" />
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#E8F827]">
                GALLERY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              A spotless finish, every time
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300/80 max-w-sm md:text-right font-normal">
            Take a look at real results delivered across homes, apartments, and offices throughout Manchester.
          </p>
        </div>

        {/* Modern Asymmetric / Dynamic Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-item-${idx + 1}`}
              onClick={() => setActiveImage(item)}
              className={`${item.spanClass} group relative rounded-3xl overflow-hidden bg-[#081524] border border-white/10 hover:border-[#E8F827]/50 transition-all duration-500 shadow-xl cursor-pointer`}
            >
              {/* Image with zoom effect */}
              <div className={`w-full ${item.aspectClass} overflow-hidden bg-[#071320]`}>
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Gradient Overlay for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050E18]/90 via-[#050E18]/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              {/* Top Right Quick-Zoom Pill Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-9 h-9 rounded-full bg-[#081524]/80 backdrop-blur-md border border-white/20 text-[#E8F827] flex items-center justify-center shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Bottom Content Card Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col justify-end">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#E8F827] mb-1">
                  {item.category}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-300/85 line-clamp-2 max-w-lg leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 sm:mt-14 bg-[#081524] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F827]/10 border border-[#E8F827]/30 flex items-center justify-center text-[#E8F827] flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Want your space looking this spotless?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Request a fast, tailored quote for your property today.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal && onOpenQuoteModal()}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#E8F827] hover:bg-[#d9e821] active:scale-[0.98] text-[#081524] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 shadow-lg shadow-[#E8F827]/10"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox / Modal for Expanded Image Inspection */}
      {activeImage && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative bg-[#0A1A2C] border border-white/15 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#081524]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8F827] block">
                  {activeImage.category}
                </span>
                <h3 className="text-lg font-bold text-white">{activeImage.title}</h3>
              </div>

              <button
                onClick={() => setActiveImage(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview */}
            <div className="relative flex-grow bg-black flex items-center justify-center overflow-hidden max-h-[60vh]">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[60vh]"
              />
            </div>

            {/* Bottom Caption & Action */}
            <div className="p-6 bg-[#081524] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {activeImage.description}
              </p>

              <button
                onClick={() => {
                  setActiveImage(null);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="px-5 py-2.5 rounded-full bg-[#E8F827] text-[#081524] font-bold text-xs uppercase tracking-wider hover:bg-[#d9e821] transition-all cursor-pointer flex items-center justify-center gap-2 flex-shrink-0"
              >
                <span>Book this clean</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
