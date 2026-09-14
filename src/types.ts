export interface Project {
  id: string;
  title: string;
  category: 'Enterprise BI' | 'Quant & Finance' | 'GenAI & NLP' | 'Data Engineering' | 'Machine Learning';
  subtitle: string;
  summary: string;
  impactMetrics: { label: string; value: string; trend?: string }[];
  technologies: string[];
  businessProblem: string;
  methodology: string[];
  keyInsights: string[];
  sqlOrCodeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
  hasInteractiveDemo?: boolean;
  interactiveDemoId?: 'wallet-share' | 'portfolio-risk' | 'text-to-sql';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  tools: string[];
  skillsApplied: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  period?: string;
  credentialId?: string;
  skills: string[];
  description: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    tags?: string[];
  }[];
}

export interface BankInstitutionData {
  id: string;
  name: string;
  country: string;
  tier: 'Tier 1 Global' | 'Tier 2 Regional';
  annualRevenue: number; // in millions
  walletSharePct: number;
  prevQuarterRevenue: number;
  qoqGrowth: number;
  denseRank: number;
  churnRisk: 'Low' | 'Moderate' | 'High';
  productMix: {
    name: string;
    value: number;
    color: string;
  }[];
  quarterlyTrends: {
    quarter: string;
    revenue: number;
    walletShare: number;
    qoqGrowth: number;
  }[];
}

export interface PortfolioAssetAllocation {
  assetClass: string;
  weight: number;
  benchmarkWeight: number;
  annualReturn: number;
  volatility: number;
  color: string;
}

export interface PortfolioMetric {
  label: string;
  strategyValue: string;
  benchmarkValue: string;
  difference: string;
  description: string;
  status: 'positive' | 'neutral' | 'negative';
}
