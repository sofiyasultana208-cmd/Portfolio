import { useState } from 'react';
import WalletShareDashboard from './dashboards/WalletShareDashboard';
import PortfolioRiskDashboard from './dashboards/PortfolioRiskDashboard';
import TextToSqlPlayground from './dashboards/TextToSqlPlayground';
import { BarChart3, TrendingUp, Terminal, Layers, Sparkles } from 'lucide-react';

export default function LiveDashboardsSection() {
  const [activeDashboard, setActiveDashboard] = useState<'wallet' | 'portfolio' | 'text2sql'>('wallet');

  const dashboards = [
    {
      id: 'wallet' as const,
      label: 'Wallet Share & Banking ($3B+)',
      tag: 'SQL Window Functions',
      description: 'LAG, DENSE_RANK, QoQ Variance & Churn Risk',
      icon: Layers,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'portfolio' as const,
      label: 'Quantitative Risk & Attribution',
      tag: 'Python / NumPy / 60-40 BM',
      description: 'Sharpe 1.82, Tracking Error & Drawdowns',
      icon: TrendingUp,
      color: 'from-indigo-500 to-emerald-500'
    },
    {
      id: 'text2sql' as const,
      label: 'Pharma GenAI Query Assistant',
      tag: 'Text-to-SQL Pipeline',
      description: 'Natural Language to Executable SQL with AST Verification',
      icon: Terminal,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="dashboards" className="py-16 md:py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Analytics Lab</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Live Production Dashboards
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl">
              Don’t just review static screenshots. Interact directly with functional analytic systems built to mirror the exact SQL window models, quantitative pipelines, and BI logic referenced in my resume.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono hidden md:block">
            <span>Click any model below to test live</span>
          </div>
        </div>

        {/* Dashboard Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {dashboards.map((dash) => {
            const isActive = activeDashboard === dash.id;
            const Icon = dash.icon;
            return (
              <button
                key={dash.id}
                id={`tab-dashboard-${dash.id}`}
                onClick={() => setActiveDashboard(dash.id)}
                className={`text-left p-4 rounded-xl border transition-all relative overflow-hidden ${
                  isActive
                    ? 'bg-slate-900 border-indigo-500 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-indigo-500/20 text-indigo-300 font-semibold' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {dash.tag}
                  </span>
                </div>
                <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                  {dash.label}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-normal line-clamp-1">
                  {dash.description}
                </div>
              </button>
            );
          })}
        </div>

        {/* Render Active Dashboard */}
        <div className="transition-all duration-300">
          {activeDashboard === 'wallet' && <WalletShareDashboard />}
          {activeDashboard === 'portfolio' && <PortfolioRiskDashboard />}
          {activeDashboard === 'text2sql' && <TextToSqlPlayground />}
        </div>
      </div>
    </section>
  );
}
