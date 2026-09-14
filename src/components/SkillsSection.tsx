import { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Sparkles, Code, CheckCircle, Database, BarChart3, GitBranch, Cpu, Terminal } from 'lucide-react';

export default function SkillsSection() {
  const [activeSnippetTab, setActiveSnippetTab] = useState<'lag' | 'rank' | 'etl'>('lag');

  const snippets = {
    lag: {
      title: 'SQL: Quarter-over-Quarter Variance via LAG() & PARTITION BY',
      language: 'sql',
      code: `-- Computing Institutional Revenue Velocity & Growth Rates
SELECT 
  bank_id,
  bank_name,
  quarter_period,
  fee_revenue,
  -- Retrieve previous period revenue for same partner
  LAG(fee_revenue, 1) OVER (
    PARTITION BY bank_id 
    ORDER BY quarter_period
  ) AS prev_quarter_revenue,
  -- Safe calculation with NULLIF to prevent division by zero
  ROUND(
    ((fee_revenue - LAG(fee_revenue, 1) OVER (
        PARTITION BY bank_id ORDER BY quarter_period
      )) / NULLIF(LAG(fee_revenue, 1) OVER (
        PARTITION BY bank_id ORDER BY quarter_period
      ), 0)) * 100, 2
  ) AS qoq_growth_rate_pct
FROM enterprise_partner_revenues;`
    },
    rank: {
      title: 'SQL: DENSE_RANK() Tiering & Segment Distribution',
      language: 'sql',
      code: `-- Segmenting institutional counterparties by quarterly performance
WITH RegionalAggregates AS (
  SELECT 
    region,
    partner_name,
    SUM(total_volume_usd) AS regional_volume
  FROM institutional_trades
  WHERE trade_date >= '2024-01-01'
  GROUP BY region, partner_name
)
SELECT 
  region,
  partner_name,
  regional_volume,
  -- DENSE_RANK ensures no gaps in tier ranking
  DENSE_RANK() OVER (
    PARTITION BY region 
    ORDER BY regional_volume DESC
  ) AS regional_partner_rank,
  -- Cumulative share of region
  ROUND(
    (regional_volume / SUM(regional_volume) OVER (PARTITION BY region)) * 100, 2
  ) AS share_of_region_pct
FROM RegionalAggregates;`
    },
    etl: {
      title: 'Python / Pandas: Pre-flight Schema & Null Value Audit',
      language: 'python',
      code: `# Automated Data Quality Validation Routine (Infosys / Mahindra)
import pandas as pd
import numpy as np

def validate_operational_batch(df: pd.DataFrame) -> dict:
    """
    Audits raw input dataframe against schema constraints and quarantine rules.
    """
    issues = []
    
    # 1. Null value auditing on primary keys & critical financials
    critical_cols = ['transaction_id', 'account_id', 'amount_usd', 'timestamp']
    null_counts = df[critical_cols].isnull().sum()
    if null_counts.any():
        issues.append(f"Nulls detected in critical columns: {null_counts.to_dict()}")
        
    # 2. Financial range and negative anomaly check
    negative_trans = df[df['amount_usd'] < 0]
    if len(negative_trans) > 0:
        issues.append(f"Quarantined {len(negative_trans)} rows with negative values.")
        
    # 3. Type enforcement & ISO date standardization
    df['timestamp'] = pd.to_datetime(df['timestamp'], errors='coerce')
    invalid_dates = df['timestamp'].isnull().sum()
    
    return {
        "passed": len(issues) == 0 and invalid_dates == 0,
        "total_rows": len(df),
        "quarantined_rows": len(negative_trans) + invalid_dates,
        "audit_issues": issues
    }`
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills Matrix & Tool Arsenal
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl">
              From advanced SQL window functions and Python data pipelines to executive Power BI dashboards and quantitative modeling.
            </p>
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <h3 className="text-base font-bold text-white">
                  {group.category}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                {group.description}
              </p>

              <div className="space-y-2.5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 bg-slate-950/70 border border-slate-800/70 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="text-xs font-semibold text-slate-200">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {skill.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 text-slate-400 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className={`px-2 py-0.5 text-[10px] font-semibold uppercase rounded ${
                        skill.level === 'Expert'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive SQL & Code Showcase */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base font-bold text-white">
                  Signature SQL & Pipeline Implementation Patterns
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Review production patterns implemented across banking analysis, portfolio risk, and automated ETL.
              </p>
            </div>

            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 self-start sm:self-auto">
              <button
                onClick={() => setActiveSnippetTab('lag')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeSnippetTab === 'lag' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                SQL: LAG() QoQ
              </button>
              <button
                onClick={() => setActiveSnippetTab('rank')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeSnippetTab === 'rank' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                SQL: DENSE_RANK()
              </button>
              <button
                onClick={() => setActiveSnippetTab('etl')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeSnippetTab === 'etl' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Python: ETL Audit
              </button>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
              <span>{snippets[activeSnippetTab].title}</span>
              <span className="font-mono text-cyan-400 uppercase text-[11px]">{snippets[activeSnippetTab].language}</span>
            </div>
            <pre className="text-xs font-mono text-cyan-100 bg-slate-950 border border-slate-800/90 p-4 sm:p-5 rounded-xl overflow-x-auto leading-relaxed">
              {snippets[activeSnippetTab].code}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
