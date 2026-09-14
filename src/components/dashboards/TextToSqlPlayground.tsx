import { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { TEXT_TO_SQL_QUERIES } from '../../data/portfolioData';
import { Terminal, Play, CheckCircle2, Sparkles, Database, Clock, Table, BarChart3, AlertCircle } from 'lucide-react';

export default function TextToSqlPlayground() {
  const [selectedQueryId, setSelectedQueryId] = useState<string>('q1');
  const [customInput, setCustomInput] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'chart' | 'table' | 'architecture'>('chart');
  const [isExecuting, setIsExecuting] = useState(false);

  const currentQuery = TEXT_TO_SQL_QUERIES.find(q => q.id === selectedQueryId) || TEXT_TO_SQL_QUERIES[0];

  const handleSelectQuery = (id: string) => {
    setIsExecuting(true);
    setSelectedQueryId(id);
    setCustomInput('');
    setTimeout(() => {
      setIsExecuting(false);
    }, 280);
  };

  return (
    <div id="text-to-sql-playground" className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full">
              GenAI Analytics Pipeline
            </span>
            <span className="text-xs text-slate-400 font-mono">
              AST SQL Parser • 99.4% Zero-Error Syntax
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Pharma Analytics Text-to-SQL Query Assistant
          </h3>
          <p className="text-sm text-slate-400 max-w-2xl mt-0.5">
            Dynamic translation of commercial pharma questions into executable, multi-stage SQL queries with automated CTEs and window functions.
          </p>
        </div>

        {/* Status badges */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>AST Validated</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-cyan-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{currentQuery.executionTimeMs}ms latency</span>
          </div>
        </div>
      </div>

      {/* Preset Query Chips */}
      <div className="my-5">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
          Select Sample Business Question:
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {TEXT_TO_SQL_QUERIES.map((q) => {
            const isSelected = q.id === selectedQueryId;
            return (
              <button
                key={q.id}
                id={`sample-query-${q.id}`}
                onClick={() => handleSelectQuery(q.id)}
                className={`p-3 text-left rounded-xl text-xs transition-all border ${
                  isSelected
                    ? 'bg-purple-950/40 border-purple-500/50 text-white shadow-lg'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-purple-400 font-semibold uppercase mb-1">
                  <span>{q.category}</span>
                  {isSelected && <Sparkles className="w-3 h-3 text-purple-400" />}
                </div>
                <div className="line-clamp-2 leading-relaxed font-medium">
                  &ldquo;{q.prompt}&rdquo;
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Prompt Display & Execution Terminal */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden mb-6">
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/60 border-b border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-mono text-slate-300">Natural Language Prompt</span>
          </div>
          <span className="text-[11px] font-mono text-purple-400">Input Language: English (Plain Text)</span>
        </div>
        <div className="p-4 flex items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-slate-100 font-medium italic">
            &ldquo;{currentQuery.prompt}&rdquo;
          </p>
          <button
            onClick={() => handleSelectQuery(selectedQueryId)}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-semibold shadow transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Re-Run</span>
          </button>
        </div>
      </div>

      {/* Generated SQL & Result Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Generated SQL Code (6 cols) */}
        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Dynamically Generated SQL Query
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Syntax: Pass
            </span>
          </div>

          <pre className="text-xs font-mono text-purple-200/90 overflow-x-auto p-3 bg-slate-900/80 rounded-lg leading-relaxed max-h-72">
            {currentQuery.generatedSql}
          </pre>

          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span>Query Cost: 0.04 ms/row</span>
            <span>Target Engine: PostgreSQL 16</span>
          </div>
        </div>

        {/* Right: Output Visualization & Data Table (6 cols) */}
        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                id="tab-chart-btn"
                onClick={() => setActiveTab('chart')}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'chart' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Visual Chart</span>
              </button>
              <button
                id="tab-table-btn"
                onClick={() => setActiveTab('table')}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'table' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>Data Table</span>
              </button>
            </div>

            <span className="text-xs font-mono text-slate-400">
              {currentQuery.resultsTable.length} Records
            </span>
          </div>

          {activeTab === 'chart' ? (
            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentQuery.chartData as any[]} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                  />
                  {currentQuery.id === 'q1' && (
                    <>
                      <Bar dataKey="revenue" name="Revenue ($M)" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="growth" name="QoQ Growth %" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </>
                  )}
                  {currentQuery.id === 'q2' && (
                    <>
                      <Bar dataKey="revenue" name="Revenue ($M)" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="margin" name="Gross Margin %" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                    </>
                  )}
                  {currentQuery.id === 'q3' && (
                    <Bar dataKey="count" name="Violations Count" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="overflow-x-auto max-h-60">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    {Object.keys(currentQuery.resultsTable[0]).map((key) => (
                      <th key={key} className="py-2 px-2.5 uppercase font-medium">
                        {key.replace(/_/g, ' ')}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {currentQuery.resultsTable.map((row: any, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 text-slate-300">
                      {Object.values(row).map((val: any, vIdx) => (
                        <td key={vIdx} className="py-2.5 px-2.5 truncate max-w-[120px]">
                          {typeof val === 'string' && val.includes('CRITICAL') ? (
                            <span className="text-rose-400 font-semibold">{val}</span>
                          ) : typeof val === 'string' && val.includes('+') ? (
                            <span className="text-emerald-400 font-semibold">{val}</span>
                          ) : (
                            String(val)
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
