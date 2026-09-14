import { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Check } from 'lucide-react';

interface ResumePrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumePrintModal({ isOpen, onClose }: ResumePrintModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-4 max-h-[94vh] flex flex-col">
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="no-print flex items-center justify-between px-6 py-3.5 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Official Executive Resume Preview • Ready to Print / Save as PDF
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              id="print-resume-btn"
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors ml-2"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans leading-normal text-slate-900 bg-white">
          {/* Header */}
          <div className="text-center border-b-2 border-slate-900 pb-3 mb-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-slate-900">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5 tracking-wide">
              Data Analyst | SQL | Python | Power BI | Tableau | Business Intelligence
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] text-slate-600 mt-1.5 font-medium">
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <span>GitHub: {PERSONAL_INFO.github}</span>
              <span>•</span>
              <span>LinkedIn: {PERSONAL_INFO.linkedin}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
              Professional Summary
            </h2>
            <p className="text-[11.5px] leading-relaxed text-slate-800 text-justify">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2">
              Professional Experience
            </h2>
            <div className="space-y-3">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline text-xs font-bold text-slate-900">
                    <div>
                      <span className="uppercase">{exp.role}</span>
                      <span className="font-normal text-slate-700"> — {exp.company}, {exp.location}</span>
                    </div>
                    <span className="font-normal text-slate-600 text-[11px]">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-[11px] text-slate-800 leading-snug">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
              Technical Skills
            </h2>
            <div className="text-[11px] text-slate-800 space-y-1 leading-snug">
              <p>
                <strong className="text-slate-900">Data Analysis & Querying:</strong> SQL (MySQL, PostgreSQL, SQL Server), Python (Pandas, NumPy, RegEx), Advanced SQL (LAG, DENSE_RANK, CTEs, Window Functions), EDA, Data Cleaning, Data Validation.
              </p>
              <p>
                <strong className="text-slate-900">Business Intelligence & Dashboards:</strong> Power BI, Tableau, Plotly, Streamlit, Excel (PivotTables, Lookups, Advanced Reporting), Matplotlib, Seaborn.
              </p>
              <p>
                <strong className="text-slate-900">Data Engineering & ETL:</strong> Python-SQL ETL Pipelines, Automated Reporting, Schema Validation, Error Logging, Data Quality Auditing.
              </p>
              <p>
                <strong className="text-slate-900">Methodologies & Tools:</strong> Statistical Analysis, KPI Tracking, Feature Engineering, Git, GitHub, Jupyter Notebook, VS Code.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2">
              Featured Analytics Projects
            </h2>
            <div className="space-y-2.5">
              {PROJECTS_DATA.slice(0, 4).map((proj) => (
                <div key={proj.id}>
                  <div className="text-xs font-bold text-slate-900">
                    {proj.title}
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-0.5 space-y-0.5 text-[11px] text-slate-800 leading-snug">
                    {proj.methodology.slice(0, 2).map((m, mIdx) => (
                      <li key={mIdx}>{m}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
              Education
            </h2>
            <div className="space-y-1 text-[11px] text-slate-800">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline">
                  <div>
                    <strong className="text-slate-900">{edu.institution}</strong> — {edu.degree}
                    {edu.grade && <span className="font-semibold text-slate-700"> ({edu.grade})</span>}
                  </div>
                  <span className="text-slate-600 text-[10.5px]">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
              Certifications
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] text-slate-800 leading-snug">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <li key={idx}>
                  <strong className="text-slate-900">{cert.name}</strong> — {cert.issuer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
