/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedTenancy } from './components/FeaturedTenancy';
import { WhyRenzo } from './components/WhyRenzo';
import { GallerySection } from './components/GallerySection';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialSection } from './components/TestimonialSection';
import { ServiceArea } from './components/ServiceArea';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { InstantQuoteModal } from './components/InstantQuoteModal';
import { servicesData } from './data/servicesData';
import { ServiceItem } from './types';

export default function App() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteModalServiceId, setQuoteModalServiceId] = useState<string>('end-of-tenancy');
  const [quoteModalArea, setQuoteModalArea] = useState<string>('');

  const handleOpenQuoteModal = (serviceId?: string, areaName?: string) => {
    if (serviceId) setQuoteModalServiceId(serviceId);
    if (areaName) setQuoteModalArea(areaName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuoteModalArea('');
  };

  const handleSelectServiceModal = (serviceId: string) => {
    const found = servicesData.find((s) => s.id === serviceId) || {
      id: serviceId,
      title: serviceId === 'one-off-regular' ? 'One-Off & Regular Cleaning' : 'Moving-In / Moving-Out Cleaning',
      shortDescription: 'Professional cleaning tailored to your property schedule and checklist.',
      fullDescription: 'Customized cleaning designed to fit your unique requirements, leaving every room refreshed and spotless.',
      idealFor: 'Homeowners, tenants, and busy households in Manchester',
      estimatedDuration: '3 - 6 hours',
      features: ['Full room sanitation', 'Surface polishing', 'Vacuuming & mopping'],
      checklist: [
        {
          category: 'General Areas',
          items: ['Dusting reachable surfaces and ledges', 'Vacuuming carpets and mopping hard floors', 'Emptying bins and wiping high-touch switches'],
        },
        {
          category: 'Kitchen & Bathrooms',
          items: ['Sanitizing countertops and sink areas', 'Disinfecting toilets, showers and tubs', 'Buffing mirrors and fixtures'],
        },
      ],
    };
    setSelectedServiceForModal(found);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#081524] text-white selection:bg-[#E8F827]/30 selection:text-white">
      {/* Navigation Header with Renzo branding */}
      <Header
        onOpenContactModal={() => handleOpenQuoteModal('contact')}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Content Sections */}
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Compact Trust / Value Strip */}
        <TrustStrip />

        {/* Services Section with 6 Tailored Cards */}
        <ServicesSection
          onOpenQuoteModal={(svcId) => handleOpenQuoteModal(svcId)}
          onSelectServiceModal={handleSelectServiceModal}
        />

        {/* Featured Service / End-of-Tenancy Split Section */}
        <FeaturedTenancy
          onOpenQuoteModal={(svcId) => handleOpenQuoteModal(svcId)}
        />

        {/* Spotless Visual Gallery Section */}
        <GallerySection onOpenQuoteModal={(svcId) => handleOpenQuoteModal(svcId)} />

        {/* Why Renzo 4-Benefits Section */}
        <WhyRenzo />

        {/* How It Works 3-Step Process */}
        <HowItWorks onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Honest Testimonial / Review Placeholder Section */}
        <TestimonialSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Manchester Service Area Section */}
        <ServiceArea onOpenQuoteModal={(svcId, area) => handleOpenQuoteModal(svcId, area)} />

        {/* FAQ Accordion Section */}
        <FaqSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Final High-Conversion CTA Section */}
        <FinalCtaSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* Comprehensive Clean Footer */}
      <Footer onOpenQuoteModal={(svcId) => handleOpenQuoteModal(svcId)} />

      {/* Service Detailed Checklist Modal */}
      <ServiceModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onSelectForQuote={(svcId) => handleOpenQuoteModal(svcId)}
      />

      {/* Instant Free Quote Modal */}
      <InstantQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialServiceId={quoteModalServiceId}
        initialArea={quoteModalArea}
      />
    </div>
  );
}
