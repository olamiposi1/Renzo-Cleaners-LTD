import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { checkPostcodeCoverage } from '../data/areasData';

interface InstantQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialArea?: string;
}

export const InstantQuoteModal: React.FC<InstantQuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = 'home-cleaning',
  initialArea = '',
}) => {
  const [service, setService] = useState(initialServiceId);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState(initialArea);
  const [propertySize, setPropertySize] = useState('2-bed');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [postcodeCheck, setPostcodeCheck] = useState<{ covered?: boolean; message?: string } | null>(null);

  if (!isOpen) return null;

  const handlePostcodeBlur = () => {
    if (postcode.trim()) {
      const res = checkPostcodeCoverage(postcode);
      setPostcodeCheck(res);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#0A1A2C] text-white w-full max-w-xl rounded-3xl shadow-2xl border border-white/15 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 relative border-b border-white/10">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="mb-2 flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#E8F827]" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E8F827]">
              Fast Quote
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Get a Free Cleaning Quote
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Fill in your details and we’ll get back to you with a clear, upfront estimate.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#E8F827]/15 text-[#E8F827] rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">
                Quote Request Submitted!
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name || 'there'}</strong>. We have received your request and our team will get in touch shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:01618204912"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#E8F827] text-[#081524] text-xs font-bold uppercase tracking-wider hover:bg-[#d8e720] flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 0161 820 4912</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/10 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Service Required *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#081524] border border-white/15 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#E8F827] cursor-pointer font-medium"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#081524] text-white">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property size & postcode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Property Size / Type *
                  </label>
                  <select
                    value={propertySize}
                    onChange={(e) => setPropertySize(e.target.value)}
                    className="w-full bg-[#081524] border border-white/15 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#E8F827] cursor-pointer font-medium"
                  >
                    <option value="studio" className="bg-[#081524] text-white">Studio / 1-Bed Flat</option>
                    <option value="2-bed" className="bg-[#081524] text-white">2-Bed Property</option>
                    <option value="3-bed" className="bg-[#081524] text-white">3-Bed Property</option>
                    <option value="4-bed" className="bg-[#081524] text-white">4-Bed Property</option>
                    <option value="5-bed" className="bg-[#081524] text-white">5+ Bed Property</option>
                    <option value="commercial" className="bg-[#081524] text-white">Commercial / Office</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    required
                    value={postcode}
                    onChange={(e) => {
                      setPostcode(e.target.value);
                      setPostcodeCheck(null);
                    }}
                    onBlur={handlePostcodeBlur}
                    placeholder="e.g. M1, M20 2AB"
                    className="w-full bg-[#081524] border border-white/15 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#E8F827]"
                  />
                </div>
              </div>

              {postcodeCheck && (
                <div
                  className={`text-xs p-3 rounded-xl border font-medium ${
                    postcodeCheck.covered
                      ? 'bg-[#E8F827]/10 border-[#E8F827]/30 text-[#E8F827]'
                      : 'bg-amber-500/10 border-amber-400/30 text-amber-300'
                  }`}
                >
                  {postcodeCheck.message}
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. David Smith"
                    className="w-full bg-[#081524] border border-white/15 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#E8F827]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 07123 456789"
                    className="w-full bg-[#081524] border border-white/15 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#E8F827]"
                  />
                </div>
              </div>

              {/* Email & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. david@example.co.uk"
                    className="w-full bg-[#081524] border border-white/15 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#E8F827]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#081524] border border-white/15 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#E8F827]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Any specific notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Deep clean, oven cleaning included, key in lockbox..."
                  className="w-full bg-[#081524] border border-white/15 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#E8F827]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#E8F827] hover:bg-[#d8e720] active:scale-[0.98] text-[#081524] font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-full shadow-lg shadow-[#E8F827]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Free Quote Request</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 font-medium">
                Prefer to speak now? Call{' '}
                <a href="tel:07593799323" className="text-[#E8F827] font-bold hover:underline">
                  07593 799323
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

