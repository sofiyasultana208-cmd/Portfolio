import { useState, useMemo } from 'react';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { PORTFOLIO_BENCHMARK_MOCK } from '../../data/portfolioData';
import { TrendingUp, Shield, Activity, PieChart as PieIcon, Code, CheckCircle2, Sliders } from 'lucide-react';

export default function PortfolioRiskDashboard() {
  const [techWeight, setTechWeight] = useState(35);
  const [bondsWeight, setBondsWeight] = useState(20);
  const [showCode, setShowCode] = useState(false);
  const [viewMode, setViewMode] = useState<'wealth' | 'drawdown'>('wealth');

  // Dynamic calculation based on weight adjustment
  const dynamicMetrics = useMemo(() => {
    // Base Sharpe is 1.82, adjusting slightly with weights for interactivity
    const equityRatio = techWeight / 35;
    const bondRatio = bondsWeight / 20;
    const simulatedReturn = (14.28 * (0.7 * equityRatio + 0.3 * bondRatio)).toFixed(2);
    const simulatedVol = (11.84 * (0.8 * equityRatio + 0.2 * bondRatio)).toFixed(2);
    const sharpe = ((Number(simulatedReturn) - 4.5) / Number(simulatedVol)).toFixed(2);
    return {
      returnVal: simulatedReturn,
      volVal: simulatedVol,
      sharpeVal: sharpe
    };
  }, [techWeight, bondsWeight]);

  return (
    <div id="portfolio-risk-dashboard" className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-md shadow-2xl">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full">
              Quantitative Risk Engine
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Benchmark: 60/40 Equity-Treasury Index
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Multi-Asset Performance & Risk Attribution Engine
          </h3>
          <p className="text-sm text-slate-400 max-w-2xl mt-0.5">
            Python/Pandas-based quantitative portfolio analysis tracking risk-adjusted returns, Sharpe ratios, tracking error, and maximum drawdown envelopes.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex p-1 bg-slate-950 border border-slate-800 rounded-lg">
            <button
              id="portfolio-wealth-view-btn"
              onClick={() => setViewMode('wealth')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                viewMode === 'wealth'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Cumulative Wealth Index
            </button>
            <button
              id="portfolio-drawdown-view-btn"
              onClick={() => setViewMode('drawdown')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                viewMode === 'drawdown'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Underwater Drawdown
            </button>
          </div>

          <button
            id="view-python-quant-code-btn"
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-300 bg-indigo-950/50 hover:bg-indigo-900/60 border border-indigo-800/60 rounded-lg transition-colors"
          >
            <Code className="w-3.5 h-3.5 text-indigo-400" />
            <span>{showCode ? 'Hide Python Code' : 'View Python Engine'}</span>
          </button>
        </div>
      </div>

      {/* Code Snippet Drawer */}
      {showCode && (
        <div className="my-5 p-4 sm:p-5 bg-slate-950 border border-indigo-500/30 rounded-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">
                Production Python (NumPy/Pandas): Annualized Risk & Sharpe Engine
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">Python 3.11 / Vectorized Math</span>
          </div>
          <pre className="text-xs font-mono text-indigo-100/90 overflow-x-auto p-3 mt-2 bg-slate-900/70 rounded-lg leading-relaxed">
{`# Built by Sofiya Sultana for Institutional Quantitative Risk Attribution
import numpy as np
import pandas as pd

def calculate_portfolio_attribution(returns_df: pd.DataFrame, benchmark_series: pd.Series):
    trading_days = 252
    rf_rate = 0.045
    
    # Vectorized return & volatility metrics
    ann_return = returns_df['strategy'].mean() * trading_days
    ann_vol = returns_df['strategy'].std() * np.sqrt(trading_days)
    sharpe_ratio = (ann_return - rf_rate) / ann_vol
    
    # Active risk metrics
    active_excess = returns_df['strategy'] - benchmark_series
    tracking_error = active_excess.std() * np.sqrt(trading_days)
    info_ratio = (active_excess.mean() * trading_days) / tracking_error
    
    # Rolling peak and underwater drawdown
    cum_returns = (1 + returns_df['strategy']).cumprod()
    max_drawdown = ((cum_returns - cum_returns.cummax()) / cum_returns.cummax()).min()
    
    return {
        "sharpe": round(sharpe_ratio, 2),
        "information_ratio": round(info_ratio, 2),
        "max_drawdown": f"{max_drawdown*100:.2f}%"
    }`}
          </pre>
        </div>
      )}

      {/* Metric Cards Comparison Strip */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 my-6">
        {PORTFOLIO_BENCHMARK_MOCK.activeMetrics.map((m, idx) => (
          <div key={idx} className="p-3 sm:p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-xl">
            <div className="text-[11px] font-medium text-slate-400 truncate">
              {m.label}
            </div>
            <div className="text-lg sm:text-xl font-bold text-white mt-1">
              {idx === 0 ? `${dynamicMetrics.returnVal}%` : idx === 1 ? `${dynamicMetrics.volVal}%` : idx === 2 ? dynamicMetrics.sharpeVal : m.strategyValue}
            </div>
            <div className="text-[11px] text-emerald-400 font-mono mt-0.5 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>{m.difference} vs BM</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1">
              BM: {m.benchmarkValue}
            </div>
          </div>
        ))}
      </div>

      {/* Main Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Performance Area Chart (8 cols) */}
        <div className="lg:col-span-8 bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <span>{viewMode === 'wealth' ? 'Cumulative Wealth Growth (Base = 100)' : 'Underwater Drawdown Trajectory'}</span>
              </h4>
              <p className="text-xs text-slate-400">
                {viewMode === 'wealth'
                  ? 'Active quantitative strategy outperforming 60/40 benchmark by +8.4% over 12 months.'
                  : 'Demonstrating strictly controlled downside: Maximum active drawdown limited to -8.4% vs -15.6% benchmark.'}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-indigo-400">
                <span className="w-3 h-1 bg-indigo-500 rounded" /> Active Strategy
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-3 h-1 bg-slate-500 rounded" /> 60/40 Benchmark
              </span>
            </div>
          </div>

          <div className="h-64 sm:h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              {viewMode === 'wealth' ? (
                <AreaChart data={PORTFOLIO_BENCHMARK_MOCK.historicalGrowth} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="activeStrategyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="benchmarkGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#64748b" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#64748b" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="month" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} domain={['auto', 'auto']} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(val: number | string | Array<number | string> | undefined) => {
                      if (val === undefined) return ['', ''];
                      return [`$${val}`, 'Index Value'];
                    }}
                  />
                  <Area type="monotone" dataKey="strategy" name="Active Strategy" stroke="#6366f1" strokeWidth={2.5} fillOpacity={1} fill="url(#activeStrategyGrad)" />
                  <Area type="monotone" dataKey="benchmark" name="60/40 Benchmark" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#benchmarkGrad)" />
                </AreaChart>
              ) : (
                <AreaChart data={PORTFOLIO_BENCHMARK_MOCK.historicalGrowth} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="activeDdGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="month" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} domain={[-5, 0]} unit="%" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(val: number | string | Array<number | string> | undefined) => {
                      if (val === undefined) return ['', ''];
                      return [`${val}%`, 'Drawdown'];
                    }}
                  />
                  <Area type="stepAfter" dataKey="activeDrawdown" name="Strategy Drawdown" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#activeDdGrad)" />
                  <Area type="stepAfter" dataKey="benchmarkDrawdown" name="Benchmark Drawdown" stroke="#64748b" strokeWidth={1.5} strokeDasharray="3 3" fillOpacity={0} />
                </AreaChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: Asset Allocation & Interactive Sliders (4 cols) */}
        <div className="lg:col-span-4 space-y-5">
          {/* Interactive Allocation Sliders */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-indigo-400" />
                <span>Simulate Allocation Weights</span>
              </h4>
              <span className="text-[11px] text-indigo-300 font-mono">Interactive</span>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>US Large Cap Growth ({techWeight}%)</span>
                  <span className="font-mono text-indigo-400 font-semibold">{techWeight}%</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="60"
                  value={techWeight}
                  onChange={(e) => setTechWeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Short-Duration Treasuries ({bondsWeight}%)</span>
                  <span className="font-mono text-indigo-400 font-semibold">{bondsWeight}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="45"
                  value={bondsWeight}
                  onChange={(e) => setBondsWeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div className="p-3 bg-indigo-950/40 border border-indigo-500/20 rounded-lg">
                <div className="text-[11px] text-slate-400">Simulated Sharpe Ratio:</div>
                <div className="text-xl font-bold text-white font-mono flex items-center gap-2 mt-0.5">
                  <span>{dynamicMetrics.sharpeVal}</span>
                  <span className="text-xs font-normal text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Optimal Frontier
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Allocation Breakdown List */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center justify-between">
              <span>Strategy Asset Allocation</span>
              <span className="text-xs font-mono text-slate-400">Annual Vol</span>
            </h4>
            <div className="space-y-2.5 text-xs">
              {PORTFOLIO_BENCHMARK_MOCK.allocations.map((a) => (
                <div key={a.assetClass} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: a.color }} />
                    <span className="text-slate-300 truncate">{a.assetClass}</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono">
                    <span className="font-semibold text-white">{a.weight}%</span>
                    <span className="text-slate-400">{a.volatility}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
