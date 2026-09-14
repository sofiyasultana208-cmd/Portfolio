import { PERSONAL_INFO } from '../data/portfolioData';
import { Database, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
              SS
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[11px] text-slate-400">
                M.Sc. Data Science • Data Analyst & Business Intelligence
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#dashboards" className="hover:text-white transition-colors">Live Dashboards</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#resume" className="hover:text-white transition-colors">Experience & Education</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills Matrix</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built for professional Data Analyst & BI opportunities.
          </div>
          <div className="font-mono flex items-center gap-2 text-slate-400">
            <span>SQL Window Functions • Python NumPy/Pandas • Power BI • Plotly</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
