import { EXPERIENCES, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, FileText, Download, ExternalLink } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export default function ResumeSection({ onOpenResumeModal }: ResumeSectionProps) {
  return (
    <section id="resume" className="py-16 md:py-24 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Quick Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career & Background</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience & Education
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl">
              Professional internships in machine learning and data engineering, backed by an M.Sc. in Data Science and 93% B.Sc. academic distinction.
            </p>
          </div>

          <button
            onClick={onOpenResumeModal}
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md shadow-indigo-600/20"
          >
            <FileText className="w-4 h-4" />
            <span>Open 1-Page Printable Resume</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Work Experience Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-2 border-b border-slate-800">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              <span>Professional Experience</span>
            </h3>

            <div className="relative pl-6 space-y-8 border-l border-slate-800 ml-2">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors" />

                  <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-5 hover:border-slate-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div>
                        <h4 className="text-base font-bold text-white">
                          {exp.role}
                        </h4>
                        <div className="text-xs font-medium text-indigo-300">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tools used */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-2 border-b border-slate-800 mb-4">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Education</span>
              </h3>

              <div className="space-y-4">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {edu.degree}
                        </h4>
                        <div className="text-xs font-medium text-cyan-300 mt-0.5">
                          {edu.institution}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-400 shrink-0">
                        {edu.period}
                      </span>
                    </div>

                    {edu.grade && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span>{edu.grade}</span>
                      </div>
                    )}

                    <div className="mt-2.5 text-xs text-slate-300 space-y-1.5 leading-relaxed">
                      {edu.highlights.map((h, hIdx) => (
                        <p key={hIdx} className="text-slate-400">
                          • {h}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications preview */}
            <div id="certifications">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-2 border-b border-slate-800 mb-4">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Verified Certifications</span>
              </h3>

              <div className="space-y-3">
                {CERTIFICATIONS_DATA.map((cert, idx) => (
                  <div key={idx} className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-4 hover:border-slate-700 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {cert.name}
                      </h4>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                        Verified
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {cert.issuer}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
