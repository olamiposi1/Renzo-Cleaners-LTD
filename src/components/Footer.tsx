import React, { useState } from 'react';
import { Phone, MapPin, ArrowUp, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal?: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact', href: '#final-cta' },
  ];

  const serviceLinks = [
    { label: 'Domestic Cleaning', id: 'domestic' },
    { label: 'End of Tenancy Cleaning', id: 'end-of-tenancy' },
    { label: 'Office Cleaning', id: 'office' },
    { label: 'Deep Cleaning', id: 'deep-cleaning' },
    { label: 'One-Off Cleaning', id: 'one-off' },
  ];

  return (
    <footer id="contact" className="bg-[#050E18] text-white border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-white">
                Renzo Cleaners Ltd
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E8F827] mt-1.5" />
            </div>

            <p className="text-sm sm:text-[15px] text-slate-300/90 leading-relaxed max-w-md font-normal">
              Professional cleaning services in Manchester and surrounding areas.
            </p>

            {/* Contact Details */}
            <div className="pt-3 space-y-2.5 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#E8F827]/10 flex items-center justify-center text-[#E8F827] flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Business Telephone:</span>
                  <a
                    id="footer-phone-link"
                    href="tel:07593799323"
                    className="text-white hover:text-[#E8F827] transition-colors font-bold tracking-wide"
                  >
                    07593 799323
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <div className="w-7 h-7 rounded-lg bg-[#E8F827]/10 flex items-center justify-center text-[#E8F827] flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-300">
                  Serving Manchester, Salford &amp; Greater Manchester
                </span>
              </div>
            </div>

            {/* Direct Free Quote Trigger Button */}
            <div className="pt-2">
              <button
                id="footer-quote-btn"
                onClick={() => onOpenQuoteModal && onOpenQuoteModal()}
                className="px-6 py-2.5 rounded-full bg-[#E8F827] hover:bg-[#d9e821] text-[#081524] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Get a Free Quote
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8F827] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300/80">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8F827] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300/80">
              {serviceLinks.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => onOpenQuoteModal && onOpenQuoteModal(svc.id)}
                    className="hover:text-white hover:translate-x-0.5 transition-all text-left py-0.5 cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#E8F827] transition-colors" />
                    <span>{svc.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar with Legal Policies & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-center sm:text-left">
            <p className="font-medium text-slate-400">
              © 2026 Renzo Cleaners Ltd. All rights reserved.
            </p>
            
            <div className="flex items-center justify-center gap-4 text-xs">
              <button
                id="footer-privacy-btn"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <span className="text-white/20">•</span>
              <button
                id="footer-terms-btn"
                onClick={() => setLegalModal('terms')}
                className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer font-bold uppercase tracking-wider text-[11px]"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy & Terms Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-[#0A1A2C] border border-white/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-white relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                {legalModal === 'privacy' ? (
                  <Shield className="w-5 h-5 text-[#E8F827]" />
                ) : (
                  <FileText className="w-5 h-5 text-[#E8F827]" />
                )}
                <h3 className="text-lg font-bold">
                  {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                </h3>
              </div>
              <button
                onClick={() => setLegalModal(null)}
                className="text-slate-400 hover:text-white text-xs font-bold uppercase cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Renzo Cleaners Ltd is committed to safeguarding the privacy of our customers in accordance with UK GDPR.
                  </p>
                  <p>
                    <strong>Information We Collect:</strong> When you submit a quote request, we collect contact information (name, phone number, email address) and property location details solely to provide service quotes and schedule cleaning appointments.
                  </p>
                  <p>
                    <strong>Data Usage:</strong> We do not sell or distribute personal information to third parties. Your details are used strictly for service communication and booking coordination.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to Renzo Cleaners Ltd. By booking our services or requesting quotes, you agree to our standard terms of service.
                  </p>
                  <p>
                    <strong>Quotes &amp; Bookings:</strong> All quotes are provided free of obligation based on property descriptions and specifications. Final booking times are confirmed upon mutual agreement.
                  </p>
                  <p>
                    <strong>Property Access:</strong> Customers are responsible for providing safe access to water, electricity, and the designated cleaning areas at the agreed schedule.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-full bg-[#E8F827] text-[#081524] font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
