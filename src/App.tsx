/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ApproachSection } from './components/ApproachSection';
import { ContactSection, type EnquiryMode } from './components/ContactSection';
import { CorporateSection } from './components/CorporateSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { ProgramsSection } from './components/ProgramsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrustStrip } from './components/TrustStrip';
import { WhyChooseSection } from './components/WhyChooseSection';
import type { TrainingProgram } from './data/sadiContent';

export default function App() {
  const [activeProgram, setActiveProgram] = useState<TrainingProgram | null>(null);
  const [enquiryMode, setEnquiryMode] = useState<EnquiryMode>('individual');
  const [selectedProgramId, setSelectedProgramId] = useState<string>('');

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    setEnquiryMode('individual');
    scrollTo('#contact');
  };

  const handleCorporateEnquiry = () => {
    setEnquiryMode('corporate');
    setSelectedProgramId('corporate-training');
    scrollTo('#contact');
  };

  const handleEnquireProgram = (program: TrainingProgram) => {
    setActiveProgram(null);
    setEnquiryMode(program.id === 'corporate-training' ? 'corporate' : 'individual');
    setSelectedProgramId(program.id);
    scrollTo('#contact');
  };

  return (
    <div className="min-h-screen bg-white text-[#252D35]">
      <Navbar onGetStarted={handleGetStarted} />

      <main>
        <HeroSection
          onExplorePrograms={() => scrollTo('#programs')}
          onPartnerWithSadi={handleCorporateEnquiry}
        />

        <TrustStrip />

        <AboutSection onDiscoverApproach={() => scrollTo('#approach')} />

        <ProgramsSection onSelectProgram={setActiveProgram} />

        <WhyChooseSection />

        <ApproachSection />

        <CorporateSection onDiscussCorporate={handleCorporateEnquiry} />

        <TestimonialsSection />

        <FinalCtaSection
          onGetInTouch={handleGetStarted}
          onExploreTraining={() => scrollTo('#programs')}
        />

        <ContactSection
          selectedMode={enquiryMode}
          selectedProgramId={selectedProgramId}
          onModeChange={setEnquiryMode}
          onProgramChange={setSelectedProgramId}
        />
      </main>

      <Footer onSelectCorporate={handleCorporateEnquiry} />

      <ProgramDetailModal
        program={activeProgram}
        onClose={() => setActiveProgram(null)}
        onEnquireProgram={handleEnquireProgram}
      />
    </div>
  );
}
