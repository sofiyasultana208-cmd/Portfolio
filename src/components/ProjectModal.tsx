import { useState } from 'react';
import { Project } from '../types';
import { X, CheckCircle, Code, Copy, Check, ExternalLink, Lightbulb, Target, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onJumpToDashboard?: (demoId: string) => void;
}

export default function ProjectModal({ project, onClose, onJumpToDashboard }: ProjectModalProps) {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.sqlOrCodeSnippet) {
      navigator.clipboard.writeText(project.sqlOrCodeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                {project.category}
              </span>
              {project.hasInteractiveDemo && (
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Live Interactive Demo Available
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors ml-4 shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
          {/* Impact Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.impactMetrics.map((m, idx) => (
              <div key={idx} className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
                <div className="text-xs text-slate-400">{m.label}</div>
                <div className="text-lg sm:text-xl font-bold text-white mt-0.5 font-mono">
                  {m.value}
                </div>
                {m.trend && (
                  <div className="text-[11px] text-emerald-400 mt-0.5">{m.trend}</div>
                )}
              </div>
            ))}
          </div>

          {/* Business Problem */}
          <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Target className="w-4 h-4 text-rose-400" />
              <span>Business Context & Challenge</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {project.businessProblem}
            </p>
          </div>

          {/* Methodology */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 mb-3">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Analytical Architecture & Methodology</span>
            </h4>
            <div className="space-y-2.5">
              {project.methodology.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-950/40 border border-slate-800/60 rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Key Business Insights & Actionable Findings</span>
            </h4>
            <ul className="space-y-2">
              {project.keyInsights.map((insight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code or SQL Implementation */}
          {project.sqlOrCodeSnippet && (
            <div>
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    {project.sqlOrCodeSnippet.title}
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>
              <pre className="text-xs font-mono text-cyan-100 bg-slate-950 border border-slate-800 p-4 rounded-xl overflow-x-auto leading-relaxed max-h-60">
                {project.sqlOrCodeSnippet.code}
              </pre>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Tech Stack & Libraries:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-950 border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono hidden sm:block">
            M.Sc. Data Science Project Portfolio
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {project.hasInteractiveDemo && (
              <a
                href="#dashboards"
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
              >
                <span>Launch Interactive Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
