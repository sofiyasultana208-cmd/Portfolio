import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BarChart3, FileText, Briefcase, Award, Mail, Menu, X, Github, Linkedin, ExternalLink, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export default function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Dashboards', href: '#dashboards', icon: BarChart3 },
    { label: 'Projects', href: '#projects', icon: Briefcase },
    { label: 'Experience & Edu', href: '#resume', icon: FileText },
    { label: 'Skills', href: '#skills', icon: Sparkles },
    { label: 'Certifications', href: '#certifications', icon: Award },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            SS
          </div>
          <div>
            <div className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <span>Data Analyst</span>
              <span>•</span>
              <span className="text-indigo-400">SQL & BI Specialist</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/60 p-1.5 border border-slate-800/80 rounded-full backdrop-blur-sm">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all"
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Controls: Resume & Socials */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            id="nav-resume-btn"
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm shadow-indigo-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Interactive Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenResumeModal}
            className="p-2 text-xs font-medium text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 rounded-lg"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2.5 backdrop-blur-xl">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
            >
              <item.icon className="w-4 h-4 text-indigo-400" />
              <span>{item.label}</span>
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>View / Print Resume</span>
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
            >
              Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
