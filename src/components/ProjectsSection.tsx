import { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { Layers, ArrowRight, Sparkles, ExternalLink, Code, Database, TrendingUp, CheckCircle } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Enterprise BI', 'Quant & Finance', 'GenAI & NLP', 'Data Engineering', 'Machine Learning'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Database className="w-3.5 h-3.5" />
              <span>Analytical Case Studies</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Data Projects & Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl">
              End-to-end data pipelines, quantitative engines, and business intelligence models built using SQL, Python, Power BI, and statistical modeling.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-slate-900/70 hover:bg-slate-900 border border-slate-800/90 hover:border-slate-700 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 group"
            >
              <div>
                {/* Category & Demo Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 font-mono">
                    {project.category}
                  </span>
                  {project.hasInteractiveDemo && (
                    <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live Demo
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                  {project.subtitle}
                </p>

                {/* Impact Metrics Banner */}
                <div className="grid grid-cols-2 gap-2 my-4 p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl">
                  {project.impactMetrics.slice(0, 2).map((m, idx) => (
                    <div key={idx}>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                      <div className="text-base font-bold text-white font-mono mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {project.summary}
                </p>
              </div>

              {/* Card Footer: Technologies & CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-950 text-slate-400 border border-slate-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] text-slate-500 font-mono">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/70">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {project.hasInteractiveDemo && (
                    <a
                      href="#dashboards"
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <span>Try Model</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
