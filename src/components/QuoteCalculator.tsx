import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Shield, Sparkles, CheckCircle2, Clock, MapPin, Send } from 'lucide-react';
import { ServiceId } from '../types';
import { servicesData } from '../data/servicesData';
import { checkPostcodeCoverage } from '../data/areasData';

export const QuoteCalculator: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceId>('end-of-tenancy');
  const [propertyType, setPropertyType] = useState<'flat' | 'terraced' | 'semi-detached' | 'detached' | 'commercial'>('flat');
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const [frequency, setFrequency] = useState<'one-off' | 'weekly' | 'fortnightly' | 'monthly'>('one-off');
  
  // Addons
  const [addons, setAddons] = useState({
    ovenClean: false,
    insideWindows: false,
    carpetClean: false,
    fridgeInterior: false,
  });

  // Contact info
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  const [postcodeStatus, setPostcodeStatus] = useState<{ covered?: boolean; message?: string } | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Price estimate calculation logic (realistic transparent UK cleaning rates)
  const calculateEstimate = () => {
    let base = 70;
    let minHours = 2.5;
    let maxHours = 3.5;

    // Service base factors
    switch (selectedService) {
      case 'end-of-tenancy':
        base = 130 + (bedrooms - 1) * 35 + (bathrooms - 1) * 25;
        minHours = 4 + (bedrooms - 1) * 0.8;
        maxHours = 6 + (bedrooms - 1) * 1.0;
        break;
      case 'deep-cleaning':
        base = 120 + (bedrooms - 1) * 30 + (bathrooms - 1) * 20;
        minHours = 3.5 + (bedrooms - 1) * 0.8;
        maxHours = 5.5 + (bedrooms - 1) * 1.0;
        break;
      case 'domestic':
      case 'regular':
        base = 40 + (bedrooms - 1) * 15 + (bathrooms - 1) * 10;
        minHours = 2 + (bedrooms - 1) * 0.5;
        maxHours = 3 + (bedrooms - 1) * 0.5;
        if (frequency === 'weekly') base *= 0.9;
        if (frequency === 'fortnightly') base *= 0.95;
        break;
      case 'post-construction':
        base = 160 + (bedrooms - 1) * 45 + (bathrooms - 1) * 30;
        minHours = 5 + (bedrooms - 1) * 1.0;
        maxHours = 8 + (bedrooms - 1) * 1.2;
        break;
      case 'moving-in-out':
        base = 125 + (bedrooms - 1) * 30 + (bathrooms - 1) * 20;
        minHours = 3.5 + (bedrooms - 1) * 0.8;
        maxHours = 5.5 + (bedrooms - 1) * 1.0;
        break;
      case 'office':
        base = 90 + (bathrooms - 1) * 20;
        minHours = 2.5;
        maxHours = 4.5;
        break;
      case 'one-off':
        base = 65 + (bedrooms - 1) * 20 + (bathrooms - 1) * 15;
        minHours = 2.5 + (bedrooms - 1) * 0.5;
        maxHours = 4.0 + (bedrooms - 1) * 0.7;
        break;
    }

    // Addons
    if (addons.ovenClean) {
      base += 45;
      minHours += 0.8;
      maxHours += 1.0;
    }
    if (addons.insideWindows) {
      base += 25;
      minHours += 0.5;
      maxHours += 0.8;
    }
    if (addons.carpetClean) {
      base += 50;
      minHours += 1.0;
      maxHours += 1.5;
    }
    if (addons.fridgeInterior) {
      base += 25;
      minHours += 0.4;
      maxHours += 0.6;
    }

    const minPrice = Math.round(base * 0.95);
    const maxPrice = Math.round(base * 1.15);

    return {
      minPrice,
      maxPrice,
      duration: `${minHours.toFixed(1)} – ${maxHours.toFixed(1)} hrs`,
    };
  };

  const estimate = calculateEstimate();

  const handlePostcodeBlur = () => {
    if (postcode.trim()) {
      const result = checkPostcodeCoverage(postcode);
      setPostcodeStatus(result);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const currentServiceObj = servicesData.find((s) => s.id === selectedService) || servicesData[0];

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-[#F7FAF9] border-b border-[#E2EBE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="w-6 h-[2px] bg-[#18B6A4]" />
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#18B6A4]">
              Manchester Price Estimator
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D3A] tracking-tight mb-4">
            Get an Instant Cleaning Estimate
          </h2>
          <p className="text-base sm:text-lg text-[#142126] opacity-75 leading-relaxed font-normal">
            Select your requirements below to see an instant guide estimate. No hidden fees, clear pricing, and flexible options for Manchester homes and workplaces.
          </p>
        </div>

        {isSubmitted ? (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 sm:p-12 text-center border border-[#18B6A4]/30 shadow-xl">
            <div className="w-16 h-16 bg-[#E6F7F5] text-[#18B6A4] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B2D3A] mb-3">
              Quote Request Received!
            </h3>
            <p className="text-[#546A72] mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-[#0B2D3A]">{name || 'there'}</span>. We have received your cleaning details for <span className="font-semibold text-[#0B2D3A]">{currentServiceObj.title}</span> in <span className="font-semibold text-[#0B2D3A]">{postcode.toUpperCase() || 'Manchester'}</span>.
            </p>
            <div className="bg-[#F7FAF9] border border-[#E2EBE9] rounded-xl p-5 mb-8 text-left text-sm text-[#546A72] space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-[#0B2D3A]">Service:</span>
                <span>{currentServiceObj.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#0B2D3A]">Guide Estimate:</span>
                <span className="font-bold text-[#0E8A7C]">£{estimate.minPrice} – £{estimate.maxPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#0B2D3A]">Estimated Time:</span>
                <span>{estimate.duration}</span>
              </div>
              {preferredDate && (
                <div className="flex justify-between">
                  <span className="font-medium text-[#0B2D3A]">Requested Date:</span>
                  <span>{preferredDate}</span>
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0B2D3A] text-white font-semibold text-sm hover:bg-[#143B48] transition-colors cursor-pointer"
              >
                Calculate Another Quote
              </button>
              <a
                href="tel:01618204912"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E6F7F5] text-[#0E8A7C] font-semibold text-sm hover:bg-[#D5F2EE] transition-colors"
              >
                Call to Confirm (0161 820 4912)
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Options Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E6EEED] shadow-xs space-y-8">
              {/* Step 1: Service Type */}
              <div>
                <label className="block text-[13px] font-extrabold text-[#0B2D3A] uppercase tracking-wider mb-3">
                  1. Select Cleaning Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {servicesData.map((svc) => (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => setSelectedService(svc.id)}
                      className={`text-left p-3.5 rounded-xl border text-sm transition-all duration-150 cursor-pointer flex items-start justify-between gap-2 ${
                        selectedService === svc.id
                          ? 'border-[#18B6A4] bg-[#E6F7F5]/50 text-[#0B2D3A] font-extrabold shadow-xs'
                          : 'border-[#E6EEED] hover:border-[#BDEEE8] hover:bg-[#FAFDFC] text-[#546A72] font-semibold'
                      }`}
                    >
                      <span className="leading-snug">{svc.title}</span>
                      {selectedService === svc.id && (
                        <div className="w-4 h-4 rounded-full bg-[#18B6A4] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Property Type & Size */}
              <div>
                <label className="block text-[13px] font-extrabold text-[#0B2D3A] uppercase tracking-wider mb-3">
                  2. Property Type &amp; Size
                </label>
                
                {/* Property Type Radio */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {[
                    { id: 'flat', label: 'Flat / Studio' },
                    { id: 'terraced', label: 'Terraced' },
                    { id: 'semi-detached', label: 'Semi-Detached' },
                    { id: 'detached', label: 'Detached' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setPropertyType(type.id as any)}
                      className={`py-2.5 px-3 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
                        propertyType === type.id
                          ? 'bg-[#0B2D3A] text-white border-[#0B2D3A] shadow-xs'
                          : 'bg-[#F7FAF9] text-[#546A72] border-[#E6EEED] hover:bg-[#EAEFEF]'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Bedrooms Counter */}
                  <div className="bg-[#F7FAF9] p-4 rounded-xl border border-[#E6EEED]">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#546A72] mb-2">Number of Bedrooms</span>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-extrabold text-[#0B2D3A]">{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                          className="w-8 h-8 rounded-lg bg-white border border-[#CBDAD6] text-[#0B2D3A] font-extrabold flex items-center justify-center hover:bg-[#EAEFEF] cursor-pointer"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => setBedrooms(Math.min(6, bedrooms + 1))}
                          className="w-8 h-8 rounded-lg bg-white border border-[#CBDAD6] text-[#0B2D3A] font-extrabold flex items-center justify-center hover:bg-[#EAEFEF] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bathrooms Counter */}
                  <div className="bg-[#F7FAF9] p-4 rounded-xl border border-[#E6EEED]">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#546A72] mb-2">Number of Bathrooms</span>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-extrabold text-[#0B2D3A]">{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                          className="w-8 h-8 rounded-lg bg-white border border-[#CBDAD6] text-[#0B2D3A] font-extrabold flex items-center justify-center hover:bg-[#EAEFEF] cursor-pointer"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => setBathrooms(Math.min(5, bathrooms + 1))}
                          className="w-8 h-8 rounded-lg bg-white border border-[#CBDAD6] text-[#0B2D3A] font-extrabold flex items-center justify-center hover:bg-[#EAEFEF] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Frequency */}
              <div>
                <label className="block text-[13px] font-extrabold text-[#0B2D3A] uppercase tracking-wider mb-3">
                  3. Cleaning Frequency
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'one-off', label: 'One-Off Clean' },
                    { id: 'weekly', label: 'Weekly (-10%)' },
                    { id: 'fortnightly', label: 'Fortnightly (-5%)' },
                    { id: 'monthly', label: 'Monthly' },
                  ].map((freq) => (
                    <button
                      key={freq.id}
                      type="button"
                      onClick={() => setFrequency(freq.id as any)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
                        frequency === freq.id
                          ? 'border-[#18B6A4] bg-[#E6F7F5] text-[#0B2D3A]'
                          : 'border-[#E6EEED] bg-[#F7FAF9] text-[#546A72] hover:bg-[#EAEFEF]'
                      }`}
                    >
                      {freq.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Optional Add-ons */}
              <div>
                <label className="block text-[13px] font-extrabold text-[#0B2D3A] uppercase tracking-wider mb-3">
                  4. Optional Extras
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { key: 'ovenClean', label: 'Oven Deep Clean', price: '+£45', desc: 'Racks, glass & degreased interior' },
                    { key: 'insideWindows', label: 'Inside Windows & Sills', price: '+£25', desc: 'Streak-free glass & wipe down' },
                    { key: 'carpetClean', label: 'Carpet Machine Shampoo', price: '+£50', desc: 'Deep stain & dust extraction' },
                    { key: 'fridgeInterior', label: 'Fridge & Freezer Interior', price: '+£25', desc: 'Shelves, drawers & sanitize' },
                  ].map((item) => {
                    const isChecked = addons[item.key as keyof typeof addons];
                    return (
                      <div
                        key={item.key}
                        onClick={() =>
                          setAddons({
                            ...addons,
                            [item.key]: !isChecked,
                          })
                        }
                        className={`p-3.5 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                          isChecked
                            ? 'border-[#18B6A4] bg-[#E6F7F5]/60 shadow-xs'
                            : 'border-[#E6EEED] hover:bg-[#FAFDFC]'
                        }`}
                      >
                        <div>
                          <div className="font-extrabold text-[#0B2D3A] flex items-center gap-1.5 text-[13px]">
                            <span>{item.label}</span>
                            <span className="text-[#0E8A7C] font-bold">({item.price})</span>
                          </div>
                          <span className="text-[11px] text-[#71878F]">{item.desc}</span>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-[#18B6A4] border-[#18B6A4] text-white'
                              : 'border-[#CBDAD6] bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary & Booking Box (5 cols) */}
            <div className="lg:col-span-5 bg-[#0B2D3A] text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#0B2D3A] sticky top-24">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#18B6A4] font-bold">
                    Transparent Guide
                  </span>
                  <h3 className="text-xl font-extrabold text-white">Your Estimate</h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#18B6A4]">
                    £{estimate.minPrice} – £{estimate.maxPrice}
                  </span>
                  <span className="block text-[11px] text-[#93B8B1] uppercase tracking-wider font-semibold">estimated range</span>
                </div>
              </div>

              {/* Estimate Details */}
              <div className="space-y-3 bg-[#081F28] p-4 rounded-xl border border-white/10 mb-6 text-xs text-[#C4D9D5]">
                <div className="flex justify-between">
                  <span className="text-[#8EAFA8] font-medium">Selected Service:</span>
                  <span className="font-bold text-white">{currentServiceObj.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8EAFA8] font-medium">Property:</span>
                  <span className="font-bold text-white capitalize">
                    {propertyType} ({bedrooms} Bed, {bathrooms} Bath)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8EAFA8] font-medium">Estimated Time:</span>
                  <span className="font-bold text-[#18B6A4] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {estimate.duration}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8EAFA8] font-medium">Frequency:</span>
                  <span className="font-bold text-white capitalize">{frequency}</span>
                </div>
              </div>

              {/* Direct Booking Request Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#C4D9D5] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-[#081F28] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#5A7E89] focus:outline-none focus:border-[#18B6A4]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#C4D9D5] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07123 456789"
                      className="w-full bg-[#081F28] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#5A7E89] focus:outline-none focus:border-[#18B6A4]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#C4D9D5] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@example.co.uk"
                      className="w-full bg-[#081F28] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#5A7E89] focus:outline-none focus:border-[#18B6A4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#C4D9D5] mb-1">
                      Manchester Postcode *
                    </label>
                    <input
                      type="text"
                      required
                      value={postcode}
                      onChange={(e) => {
                        setPostcode(e.target.value);
                        setPostcodeStatus(null);
                      }}
                      onBlur={handlePostcodeBlur}
                      placeholder="e.g. M20 2AB"
                      className="w-full bg-[#081F28] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#5A7E89] focus:outline-none focus:border-[#18B6A4]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#C4D9D5] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#081F28] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#5A7E89] focus:outline-none focus:border-[#18B6A4]"
                    />
                  </div>
                </div>

                {postcodeStatus && (
                  <div
                    className={`text-xs p-2.5 rounded-lg border ${
                      postcodeStatus.covered
                        ? 'bg-[#18B6A4]/15 border-[#18B6A4]/40 text-[#8CEEE4]'
                        : 'bg-amber-900/20 border-amber-600/40 text-amber-200'
                    }`}
                  >
                    {postcodeStatus.message}
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#C4D9D5] mb-1">
                    Special notes or instructions (optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Key handover instructions, parking notes, pets, or priority focus areas..."
                    className="w-full bg-[#081F28] border border-white/15 rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#5A7E89] focus:outline-none focus:border-[#18B6A4]"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-calculator-quote-btn"
                  className="w-full bg-[#18B6A4] hover:bg-[#149E8F] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-widest py-4 px-4 rounded-lg shadow-lg shadow-[#18B6A4]/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Free Quote Confirmation</span>
                </button>

                <p className="text-[11px] text-center text-[#7F9E98] leading-tight">
                  No credit card required. Final fixed quote confirmed prior to clean.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
