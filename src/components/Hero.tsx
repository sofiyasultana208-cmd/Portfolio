import { PERSONAL_INFO } from '../data/portfolioData';
import { Database, TrendingUp, BarChart2, FileText, ArrowRight, Download, Mail, MapPin, Phone, Sparkles, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  return (
    <section id="hero-section" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glow & subtle data grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Open to Data Analyst & Business Intelligence Roles</span>
          </div>

          {/* Main Title & Value Proposition */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
            Turning Complex Data into <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Decisive Executive Action.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Hi, I’m <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. An analytics-driven Data Analyst with an <span className="text-cyan-300">M.Sc. in Data Science</span> specializing in advanced SQL window functions, automated Python ETL pipelines, and interactive executive dashboards in Power BI and Plotly.
          </p>

          {/* Contact Details Chip Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 text-xs text-slate-400 font-mono">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 rounded-lg text-slate-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 border border-slate-800 rounded-lg text-slate-300">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 border border-slate-800 rounded-lg text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            <a
              href="#dashboards"
              id="hero-explore-dashboards-cta"
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <BarChart2 className="w-4 h-4" />
              <span>Explore Live Dashboards</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </a>

            <button
              onClick={onOpenResumeModal}
              id="hero-resume-cta"
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>View & Print Resume</span>
            </button>

            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              <span>View Project Studies</span>
            </a>
          </div>
        </div>

        {/* Quantitative Core Stats Ribbon */}
        <div className="mt-14 sm:mt-18 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {PERSONAL_INFO.coreStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/90 rounded-xl backdrop-blur-sm transition-all hover:border-indigo-500/40 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-indigo-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-normal">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
