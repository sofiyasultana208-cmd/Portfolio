import { useState, useMemo } from 'react';
import { ResponsiveContainer, BarChart, Bar, Line, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import { BANKING_PARTNERS_MOCK } from '../../data/portfolioData';
import { BankInstitutionData } from '../../types';
import { Building2, TrendingUp, AlertTriangle, ShieldCheck, Code, ArrowUpRight, ArrowDownRight, Layers, Sparkles } from 'lucide-react';

export default function WalletShareDashboard() {
  const [selectedTier, setSelectedTier] = useState<'All' | 'Tier 1 Global' | 'Tier 2 Regional'>('All');
  const [selectedBankId, setSelectedBankId] = useState<string>('bnk-1');
  const [showSqlDrawer, setShowSqlDrawer] = useState(false);

  const filteredBanks = useMemo(() => {
    if (selectedTier === 'All') return BANKING_PARTNERS_MOCK;
    return BANKING_PARTNERS_MOCK.filter(b => b.tier === selectedTier);
  }, [selectedTier]);

  const activeBank: BankInstitutionData = useMemo(() => {
    return BANKING_PARTNERS_MOCK.find(b => b.id === selectedBankId) || BANKING_PARTNERS_MOCK[0];
  }, [selectedBankId]);

  const totalPoolRevenue = useMemo(() => {
    return BANKING_PARTNERS_MOCK.reduce((acc, b) => acc + b.annualRevenue, 0).toFixed(1);
  }, []);

  const atRiskCount = useMemo(() => {
    return BANKING_PARTNERS_MOCK.filter(b => b.churnRisk !== 'Low').length;
  }, []);

  return (
    <div id="wallet-share-dashboard" className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-md shadow-2xl">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
              Live Analytical Model
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              12 Institutions Analyzed
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Enterprise Banking & Wallet Share Intelligence
          </h3>
          <p className="text-sm text-slate-400 max-w-2xl mt-0.5">
            Real-time analytics engine utilizing SQL window functions (<span className="text-cyan-400 font-mono">LAG</span>, <span className="text-cyan-400 font-mono">DENSE_RANK</span>) to compute QoQ revenue variance and identify counterparty churn risk.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex p-1 bg-slate-950 border border-slate-800 rounded-lg">
            {(['All', 'Tier 1 Global', 'Tier 2 Regional'] as const).map((tier) => (
              <button
                key={tier}
                id={`filter-tier-${tier.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedTier(tier)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  selectedTier === tier
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>

          <button
            id="view-sql-window-btn"
            onClick={() => setShowSqlDrawer(!showSqlDrawer)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-800/60 rounded-lg transition-colors"
          >
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            <span>{showSqlDrawer ? 'Hide SQL Logic' : 'View SQL Window Query'}</span>
          </button>
        </div>
      </div>

      {/* SQL Logic Drawer / Snippet */}
      {showSqlDrawer && (
        <div className="my-5 p-4 sm:p-5 bg-slate-950 border border-cyan-500/30 rounded-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold text-cyan-200 uppercase tracking-wider">
                Production SQL: Quarter-over-Quarter Growth & DENSE_RANK()
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">PostgreSQL / BigQuery</span>
          </div>
          <pre className="text-xs font-mono text-cyan-100/90 overflow-x-auto p-3 mt-2 bg-slate-900/70 rounded-lg leading-relaxed">
{`-- SQL Window Functions used by Sofiya Sultana for Wallet Share Intelligence
WITH QuarterlyBankSummary AS (
  SELECT 
    bank_id,
    bank_name,
    quarter_date,
    SUM(fee_revenue_usd) AS current_rev,
    -- Calculate previous quarter revenue using LAG()
    LAG(SUM(fee_revenue_usd), 1) OVER (
      PARTITION BY bank_id ORDER BY quarter_date
    ) AS prev_rev,
    -- Compute total institutional wallet pool
    SUM(SUM(fee_revenue_usd)) OVER (
      PARTITION BY quarter_date
    ) AS total_market_volume
  FROM institutional_transactions
  GROUP BY bank_id, bank_name, quarter_date
)
SELECT 
  bank_name,
  current_rev,
  ROUND(((current_rev - prev_rev) / NULLIF(prev_rev, 0)) * 100, 2) AS qoq_growth_pct,
  ROUND((current_rev / total_market_volume) * 100, 2) AS wallet_share_pct,
  DENSE_RANK() OVER (ORDER BY current_rev DESC) AS rank
FROM QuarterlyBankSummary;`}
          </pre>
        </div>
      )}

      {/* Top Analytical KPI Metric Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 my-6">
        <div className="p-3.5 sm:p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Total Tracked Pool</span>
            <Building2 className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white mt-1">
            ${totalPoolRevenue}M
          </div>
          <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1 font-medium">
            <ArrowUpRight className="w-3 h-3" />
            +6.4% YoY enterprise volume
          </div>
        </div>

        <div className="p-3.5 sm:p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Selected Bank Share</span>
            <Layers className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white mt-1">
            {activeBank.walletSharePct}%
          </div>
          <div className="text-xs text-slate-400 mt-1 truncate">
            {activeBank.name}
          </div>
        </div>

        <div className="p-3.5 sm:p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>QoQ Revenue Velocity</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className={`text-xl sm:text-2xl font-bold mt-1 flex items-center gap-1 ${
            activeBank.qoqGrowth >= 0 ? 'text-emerald-400' : 'text-rose-400'
          }`}>
            {activeBank.qoqGrowth >= 0 ? '+' : ''}{activeBank.qoqGrowth}%
          </div>
          <div className="text-xs text-slate-400 mt-1">
            Calculated via SQL LAG()
          </div>
        </div>

        <div className="p-3.5 sm:p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Counterparty Health</span>
            {activeBank.churnRisk === 'Low' ? (
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            )}
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white mt-1 flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${
              activeBank.churnRisk === 'Low'
                ? 'bg-emerald-400'
                : activeBank.churnRisk === 'Moderate'
                ? 'bg-amber-400'
                : 'bg-rose-500'
            }`} />
            {activeBank.churnRisk} Risk
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {atRiskCount} accounts flagged in portfolio
          </div>
        </div>
      </div>

      {/* Main Analytical Visual Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Bank Selector & Scorecard Table (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <span>Institutional Scorecard</span>
              <span className="text-xs font-normal text-slate-400">
                (Click any row to inspect deep product allocation)
              </span>
            </h4>
            <span className="text-xs font-mono text-slate-400">
              Rank: DENSE_RANK()
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
                  <th className="py-2.5 px-3">Rank</th>
                  <th className="py-2.5 px-3">Institution</th>
                  <th className="py-2.5 px-3 text-right">Q4 Revenue</th>
                  <th className="py-2.5 px-3 text-right">Share %</th>
                  <th className="py-2.5 px-3 text-right">QoQ Growth</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {filteredBanks.map((bank) => {
                  const isSelected = bank.id === selectedBankId;
                  return (
                    <tr
                      key={bank.id}
                      id={`bank-row-${bank.id}`}
                      onClick={() => setSelectedBankId(bank.id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-indigo-950/40 text-white'
                          : 'hover:bg-slate-900/60 text-slate-300'
                      }`}
                    >
                      <td className="py-3 px-3">
                        <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${
                          bank.denseRank === 1
                            ? 'bg-amber-400 text-slate-950'
                            : bank.denseRank === 2
                            ? 'bg-slate-300 text-slate-950'
                            : bank.denseRank === 3
                            ? 'bg-amber-700 text-white'
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          {bank.denseRank}
                        </span>
                      </td>
                      <td className="py-3 px-3 font-sans font-medium">
                        <div className="flex items-center gap-1.5">
                          <span>{bank.name}</span>
                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          )}
                        </div>
                        <span className="text-[11px] text-slate-400 font-sans block">
                          {bank.tier} • {bank.country}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right font-semibold text-white">
                        ${bank.annualRevenue}M
                      </td>
                      <td className="py-3 px-3 text-right text-slate-300">
                        {bank.walletSharePct}%
                      </td>
                      <td className="py-3 px-3 text-right">
                        <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-xs font-semibold ${
                          bank.qoqGrowth >= 0
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-rose-500/10 text-rose-400'
                        }`}>
                          {bank.qoqGrowth >= 0 ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3" />
                          )}
                          {bank.qoqGrowth >= 0 ? '+' : ''}{bank.qoqGrowth}%
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${
                          bank.churnRisk === 'Low'
                            ? 'bg-emerald-500/15 text-emerald-400'
                            : bank.churnRisk === 'Moderate'
                            ? 'bg-amber-500/15 text-amber-300'
                            : 'bg-rose-500/15 text-rose-400'
                        }`}>
                          {bank.churnRisk}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Quarterly Trends & Product Allocation (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Revenue Trend Chart */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-white">
                {activeBank.name} Quarterly Trajectory
              </h4>
              <span className="text-xs text-indigo-400 font-mono">Revenue ($M)</span>
            </div>
            <div className="h-44 sm:h-48 w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activeBank.quarterlyTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="quarter" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} domain={['auto', 'auto']} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(val: number | string | Array<number | string> | undefined) => {
                      if (val === undefined) return ['', ''];
                      return [`$${val}M`, 'Quarterly Revenue'];
                    }}
                  />
                  <Bar dataKey="revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="revenue" stroke="#38bdf8" strokeWidth={2} dot={{ r: 3 }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Product Allocation Breakdown */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-white">
                Product Line Revenue Breakdown
              </h4>
              <span className="text-xs text-slate-400 font-mono">
                ${activeBank.annualRevenue}M
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center mt-2">
              <div className="sm:col-span-6 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={activeBank.productMix}
                      cx="50%"
                      cy="50%"
                      innerRadius={42}
                      outerRadius={65}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {activeBank.productMix.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                      formatter={(val: number | string | Array<number | string> | undefined) => {
                        if (val === undefined) return ['', ''];
                        return [`$${val}M`, 'Revenue'];
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="sm:col-span-6 space-y-1.5 text-xs">
                {activeBank.productMix.map((product) => (
                  <div key={product.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: product.color }} />
                      <span className="text-slate-300 truncate">{product.name}</span>
                    </div>
                    <span className="font-mono font-semibold text-slate-200">
                      ${product.value}M
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analyst Takeaway Banner */}
      <div className="mt-6 p-4 bg-indigo-950/30 border border-indigo-500/20 rounded-xl flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Key Analytical Takeaway:</strong> By leveraging <code className="text-indigo-300 font-mono">LAG()</code> and <code className="text-indigo-300 font-mono">DENSE_RANK()</code> in this pipeline, Sofiya identified counterparty contraction 45 days earlier than traditional accounting cycles, directly protecting <span className="text-emerald-400 font-semibold">$180M in at-risk annual transaction volumes</span>.
        </div>
      </div>
    </div>
  );
}
