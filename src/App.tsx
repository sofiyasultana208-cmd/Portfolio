/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveDashboardsSection from './components/LiveDashboardsSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumePrintModal from './components/ResumePrintModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Live Analytical Stats */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Live Interactive Analytics Dashboards ($3B+ Banking, Quant Risk, Text-to-SQL) */}
        <LiveDashboardsSection />

        {/* Projects & Case Studies */}
        <ProjectsSection />

        {/* Experience & Education Timeline */}
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Technical Skills Matrix & Implementation Snippets */}
        <SkillsSection />

        {/* Contact & Recruiter Opportunities */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter-Ready 1-Page Printable Resume Modal */}
      <ResumePrintModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

