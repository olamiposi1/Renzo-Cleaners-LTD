import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenContactModal?: () => void;
  onOpenQuoteModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContactModal, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#081524] text-white pt-6 pb-4 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Logo (Renzo in modern bold typography with yellow accent) */}
        <a
          id="brand-logo"
          href="#home"
          className="flex items-center gap-1 group focus:outline-none select-none"
        >
          <span className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-white">
            Renzo
          </span>
          <span className="w-2 h-2 rounded-full bg-[#E8F827] mt-1.5" />
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[14px] font-medium text-white/80">
          <a
            id="nav-link-services"
            href="#services"
            className="hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            id="nav-link-tenancy"
            href="#featured-tenancy"
            className="hover:text-white transition-colors"
          >
            End of Tenancy
          </a>
          <a
            id="nav-link-gallery"
            href="#gallery"
            className="hover:text-white transition-colors"
          >
            Gallery
          </a>
          <a
            id="nav-link-why"
            href="#why-renzo"
            className="hover:text-white transition-colors"
          >
            Why Renzo
          </a>
          <a
            id="nav-link-how"
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            How It Works
          </a>
          <a
            id="nav-link-areas"
            href="#service-area"
            className="hover:text-white transition-colors"
          >
            Areas
          </a>
          <a
            id="nav-link-faq"
            href="#faq"
            className="hover:text-white transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Right: Contact Us Button */}
        <div className="hidden md:flex items-center">
          <button
            id="header-contact-btn"
            onClick={onOpenContactModal || onOpenQuoteModal}
            className="bg-white text-[#081524] hover:bg-slate-100 active:scale-[0.98] px-7 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-200 shadow-sm cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            id="mobile-contact-btn"
            onClick={onOpenContactModal || onOpenQuoteModal}
            className="bg-white text-[#081524] px-4 py-1.5 rounded-full text-xs font-bold"
          >
            Contact
          </button>
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-white hover:text-[#E8F827] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1A2C] border border-white/10 rounded-2xl p-5 mt-4 space-y-4 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3 text-sm font-medium text-white/90">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#E8F827]"
            >
              Services
            </a>
            <a
              href="#featured-tenancy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#E8F827]"
            >
              End of Tenancy
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#E8F827]"
            >
              Gallery
            </a>
            <a
              href="#why-renzo"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#E8F827]"
            >
              Why Renzo
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#E8F827]"
            >
              How It Works
            </a>
            <a
              href="#service-area"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#E8F827]"
            >
              Areas Covered
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#E8F827]"
            >
              FAQ
            </a>
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-full bg-[#E8F827] text-[#081524] font-bold text-sm text-center"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContactModal) onOpenContactModal();
              }}
              className="w-full py-3 rounded-full bg-white text-[#081524] font-bold text-sm text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

