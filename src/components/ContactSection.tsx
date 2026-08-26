import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    service: 'end-of-tenancy',
    message: '',
    preferredDate: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-[#E6EEED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-[#18B6A4]" />
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#18B6A4]">
                  Direct Contact
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D3A] tracking-tight mb-4">
                Speak With Renzo Cleaners
              </h2>
              <p className="text-base sm:text-lg text-[#142126] opacity-75 leading-relaxed font-normal">
                Need a fast quote, have specific property requirements, or want to discuss a regular domestic or commercial cleaning schedule? We’re here to help.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4">
              <a
                id="contact-phone-card"
                href="tel:01618204912"
                className="flex items-start gap-4 p-5 rounded-2xl border border-[#E6EEED] hover:border-[#18B6A4] hover:bg-[#F7FAF9] transition-all group hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0B2D3A] text-[#18B6A4] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#71878F] block">Phone (Direct Line)</span>
                  <span className="text-base font-extrabold text-[#0B2D3A] group-hover:text-[#18B6A4] transition-colors">
                    0161 820 4912
                  </span>
                  <span className="text-xs text-[#546A72] block mt-0.5 font-medium">Monday to Saturday, 8am – 7pm</span>
                </div>
              </a>

              <a
                id="contact-email-card"
                href="mailto:enquiries@renzocleaners.co.uk"
                className="flex items-start gap-4 p-5 rounded-2xl border border-[#E6EEED] hover:border-[#18B6A4] hover:bg-[#F7FAF9] transition-all group hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0B2D3A] text-[#18B6A4] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#71878F] block">Email Enquiries</span>
                  <span className="text-base font-extrabold text-[#0B2D3A] group-hover:text-[#18B6A4] transition-colors break-all">
                    enquiries@renzocleaners.co.uk
                  </span>
                  <span className="text-xs text-[#546A72] block mt-0.5 font-medium">Quotes returned within 2 hours</span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#E6EEED] bg-[#F7FAF9]">
                <div className="w-11 h-11 rounded-xl bg-[#0B2D3A] text-[#18B6A4] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#71878F] block">Head Office &amp; Dispatch</span>
                  <span className="text-sm font-extrabold text-[#0B2D3A]">
                    Manchester, Greater Manchester, UK
                  </span>
                  <span className="text-xs text-[#546A72] block mt-0.5 font-medium">
                    Teams deployed throughout all Manchester boroughs
                  </span>
                </div>
              </div>
            </div>

            {/* Reassurance Banner */}
            <div className="p-4 rounded-xl bg-[#E6F7F5] border border-[#BDEEE8] flex items-center gap-3 text-xs text-[#084C44]">
              <ShieldCheck className="w-5 h-5 text-[#18B6A4] flex-shrink-0" />
              <span>
                <strong>No Obligation Quotes:</strong> We provide detailed, upfront prices before any booking is confirmed.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F7FAF9] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#E6EEED] shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-[#E6F7F5] text-[#18B6A4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0B2D3A]">Enquiry Received!</h3>
                <p className="text-sm text-[#142126] opacity-75 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to <strong className="text-[#0B2D3A]">Renzo Cleaners Ltd</strong>. A member of our Manchester team will review your cleaning requirements and get in touch with you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        postcode: '',
                        service: 'end-of-tenancy',
                        message: '',
                        preferredDate: '',
                      });
                    }}
                    className="px-6 py-3 rounded-lg bg-[#0B2D3A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#143B48] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#E6EEED] pb-4 mb-4">
                  <h3 className="text-xl font-extrabold text-[#0B2D3A] tracking-tight">
                    Request a Cleaning Service
                  </h3>
                  <p className="text-xs text-[#142126] opacity-70 mt-0.5">
                    Fill in your details below and we’ll contact you with an accurate quote and availability.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#0B2D3A] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Davies"
                      className="w-full bg-white border border-[#E6EEED] rounded-xl px-3.5 py-3 text-sm text-[#0B2D3A] placeholder-[#8EAFA8] focus:outline-none focus:border-[#18B6A4]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#0B2D3A] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 07987 654321"
                      className="w-full bg-white border border-[#E6EEED] rounded-xl px-3.5 py-3 text-sm text-[#0B2D3A] placeholder-[#8EAFA8] focus:outline-none focus:border-[#18B6A4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#0B2D3A] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.co.uk"
                      className="w-full bg-white border border-[#E6EEED] rounded-xl px-3.5 py-3 text-sm text-[#0B2D3A] placeholder-[#8EAFA8] focus:outline-none focus:border-[#18B6A4]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#0B2D3A] uppercase tracking-wider mb-1.5">
                      Manchester Postcode *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      placeholder="e.g. M14 5LL"
                      className="w-full bg-white border border-[#E6EEED] rounded-xl px-3.5 py-3 text-sm text-[#0B2D3A] placeholder-[#8EAFA8] focus:outline-none focus:border-[#18B6A4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#0B2D3A] uppercase tracking-wider mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white border border-[#E6EEED] rounded-xl px-3.5 py-3 text-sm text-[#0B2D3A] focus:outline-none focus:border-[#18B6A4] cursor-pointer font-medium"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#0B2D3A] uppercase tracking-wider mb-1.5">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-white border border-[#E6EEED] rounded-xl px-3.5 py-3 text-sm text-[#0B2D3A] focus:outline-none focus:border-[#18B6A4]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#0B2D3A] uppercase tracking-wider mb-1.5">
                    Property details or questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the property size (e.g. 2-bed apartment, 3-bed semi-detached), current condition, key arrangements, or any specific requests..."
                    className="w-full bg-white border border-[#E6EEED] rounded-xl px-3.5 py-3 text-sm text-[#0B2D3A] placeholder-[#8EAFA8] focus:outline-none focus:border-[#18B6A4]"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-enquiry-btn"
                  className="w-full bg-[#18B6A4] hover:brightness-105 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-lg shadow-lg shadow-[#18B6A4]/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Cleaning Request</span>
                </button>

                <p className="text-[11px] text-center text-[#71878F] font-medium">
                  We protect your privacy. Your information is only used to respond to your cleaning enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
