import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Technology } from './components/Technology';
import { CaseStudy } from './components/CaseStudy';
import { Services } from './components/Services';
import { ValueProposition } from './components/ValueProposition';
import { EnergyTransition } from './components/EnergyTransition';
import { VisionMission } from './components/VisionMission';
import { CTASection } from './components/CTASection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-dark bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Technology />
        <CaseStudy />
        <Services />
        <ValueProposition />
        <EnergyTransition />
        <VisionMission />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>);

}