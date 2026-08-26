import React from 'react';
import { X, Check, Clock, Users, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#0A1A2C] text-white w-full max-w-2xl rounded-3xl shadow-2xl border border-white/15 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 relative border-b border-white/10">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E8F827]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E8F827]">
              SERVICE DETAILS
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {service.fullDescription || service.shortDescription}
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Metadata chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#081524] p-4 rounded-2xl border border-white/10 text-xs">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-[#E8F827]/10 flex items-center justify-center text-[#E8F827]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-[10px] text-slate-400 block">Typical Duration:</span>
                <span className="font-medium text-white">{service.estimatedDuration}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-[#E8F827]/10 flex items-center justify-center text-[#E8F827]">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-[10px] text-slate-400 block">Recommended For:</span>
                <span className="font-medium text-white">{service.idealFor}</span>
              </div>
            </div>
          </div>

          {/* Detailed Checklists */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8F827] mb-4">
              What Is Included in this Service
            </h4>
            <div className="space-y-4">
              {service.checklist?.map((cat, idx) => (
                <div key={idx} className="border border-white/10 rounded-2xl p-5 bg-[#081524]">
                  <h5 className="font-bold text-white text-sm mb-3 pb-2 border-b border-white/10">
                    {cat.category}
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#E8F827] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-[#081524] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectForQuote(service.id);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#E8F827] hover:bg-[#d8e720] text-[#081524] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#E8F827]/15"
          >
            <span>Request Quote for This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
