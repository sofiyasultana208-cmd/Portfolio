import { Project, ExperienceItem, EducationItem, CertificationItem, SkillGroup, BankInstitutionData } from '../types';

export const PERSONAL_INFO = {
  name: 'Sofiya Sultana',
  role: 'Data Analyst',
  subRoles: ['Business Intelligence', 'SQL & Python Specialist', 'Data Pipeline Developer'],
  email: 'sofiyasultana208@gmail.com',
  phone: '+91 9346417243',
  location: 'Hyderabad, India',
  github: 'https://github.com/sofiyasultana',
  linkedin: 'https://linkedin.com/in/sofiya-sultana',
  portfolio: 'https://sofiya-sultana.analytics',
  summary: `Analytics-driven Data Analyst with an M.Sc. in Data Science and extensive experience designing end-to-end Python/SQL data pipelines, building automated reporting routines, and creating interactive executive dashboards in Power BI, Tableau, and Plotly. Skilled in advanced SQL (window functions, CTEs, aggregation), statistical modeling, and data validation across complex financial, sales, and operational datasets. Proven ability to translate raw data into actionable insights, track business KPIs, and improve data accessibility for non-technical stakeholders.`,
  coreStats: [
    { label: 'Enterprise Pipeline Analyzed', value: '$3B+', detail: 'Across 12 global banking institutions' },
    { label: 'Academic Aggregate', value: '93%', detail: 'B.Sc. in Computer Science distinction' },
    { label: 'ML Training Dataset', value: '60K+', detail: 'Evaluated samples with error matrices' },
    { label: 'Industry Certifications', value: '4', detail: 'Microsoft, Google, ISI & Mahindra' },
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Virtual AI/ML Intern',
    company: 'Infosys Springboard',
    location: 'Virtual Internship',
    period: 'Nov 2025 – Jan 2026',
    type: 'Internship',
    bullets: [
      'Formatted, transformed, and preprocessed unstructured data into structured, SQL-ready datasets to support downstream business analytics.',
      'Executed rigorous data quality checks to identify missing values, schema mismatches, and data anomalies prior to database ingestion.',
      'Generated structured analytics documentation and audit logs to streamline data accessibility and self-serve querying for cross-functional teams.',
      'Designed exploratory data analysis (EDA) scripts isolating key business performance trends and anomalous transaction volumes.'
    ],
    tools: ['Python', 'Pandas', 'SQL', 'Data Quality Checks', 'Schema Validation', 'EDA'],
    skillsApplied: ['ETL Preprocessing', 'Data Governance', 'Audit Logging', 'Data Standardization']
  },
  {
    id: 'exp-2',
    role: 'Machine Learning Intern',
    company: 'Mahindra University',
    location: 'Hyderabad, India',
    period: 'May 2025 – Jul 2025',
    type: 'Internship',
    bullets: [
      'Built Python and Pandas data cleaning scripts to process, clean, and structure raw operational datasets for analytical reporting.',
      'Performed comprehensive exploratory data analysis (EDA) and feature engineering to isolate underlying trends, statistical correlations, and anomalies.',
      'Evaluated analytical and predictive models using rigorous performance metrics (Precision, Recall, F1, RMSE) to formulate data-driven conclusions.',
      'Automated weekly reporting pipelines that reduced manual dataset hygiene checks by over 60%.'
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'EDA'],
    skillsApplied: ['Statistical Analysis', 'Feature Engineering', 'Data Cleaning', 'Performance Metrics']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'M.Sc. in Data Science',
    institution: 'GITAM University',
    location: 'Hyderabad, India',
    period: '2024 – 2026',
    grade: 'Enrolled / High Standing',
    highlights: [
      'Advanced coursework: Predictive Analytics, Database Management & Distributed Systems, Big Data Architectures, Statistical Modeling, and Business Intelligence.',
      'Leading quantitative modeling research projects spanning financial market time-series and enterprise health analytics.'
    ]
  },
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'Bhavans Vivekananda Degree College',
    location: 'Hyderabad, India',
    period: '2021 – 2024',
    grade: '93% Aggregate (Distinction)',
    highlights: [
      'Graduated with top 1% academic merit (93% aggregate).',
      'Strong core foundations in Relational Database Systems (SQL), Data Structures, Algorithms, Statistics, and Applied Mathematics.'
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: 'Microsoft Data Visualization with Power BI',
    issuer: 'Coursera & Microsoft',
    period: 'Credential Verified',
    skills: ['Power BI', 'DAX Formulas', 'Data Modeling', 'Interactive Dashboards', 'Executive Reporting'],
    description: 'Developed advanced skills in designing interactive BI dashboards, architecting star-schema relational data models, and authoring complex DAX measures to communicate executive narratives.'
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera & Google',
    period: 'Credential Verified',
    skills: ['SQL Querying', 'R Programming', 'Data Cleaning', 'EDA', 'Tableau', 'Data Storytelling'],
    description: 'Mastered end-to-end analytical workflows, from problem scoping and data transformation with SQL/Spreadsheets to deep exploratory data analysis and presentation in Tableau.'
  },
  {
    name: 'Machine Learning and Statistical Concepts',
    issuer: 'Indian Statistical Institute (ISI)',
    period: 'Credential Verified',
    skills: ['Statistical Inference', 'Hypothesis Testing', 'Regression Modeling', 'Clustering Methods'],
    description: 'Rigorous mathematical grounding in probability theory, parametric vs non-parametric statistics, variance decomposition, and multivariate analytical modeling.'
  },
  {
    name: 'Internship Certificate (Decision Rules & Clustering)',
    issuer: 'Mahindra University',
    period: 'Credential Verified',
    skills: ['K-Means Clustering', 'Decision Trees', 'Customer Segmentation', 'Pattern Recognition'],
    description: 'Applied unsupervised learning and heuristic decision algorithms to segment high-dimensional operational datasets and identify performance clusters.'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Data Analysis & Querying',
    description: 'Mastery over relational engines, complex window operations, and data frame manipulation.',
    skills: [
      { name: 'SQL (PostgreSQL, MySQL, SQL Server)', level: 'Expert', tags: ['Window Functions', 'CTEs', 'Subqueries'] },
      { name: 'Python (Pandas, NumPy, RegEx)', level: 'Expert', tags: ['Data Wrangling', 'Vectorization'] },
      { name: 'Advanced SQL (LAG, DENSE_RANK, PARTITION BY)', level: 'Expert', tags: ['Financial Analytics', 'Ranking'] },
      { name: 'Exploratory Data Analysis (EDA)', level: 'Expert', tags: ['Outlier Detection', 'Distribution Analysis'] },
      { name: 'Data Cleaning & Validation', level: 'Expert', tags: ['Schema Integrity', 'Null Auditing'] },
      { name: 'Statistical Hypothesis Testing', level: 'Advanced', tags: ['P-values', 'A/B Testing', 'ANOVA'] }
    ]
  },
  {
    category: 'Business Intelligence & Dashboards',
    description: 'Transforming complex data into intuitive, actionable executive decision dashboards.',
    skills: [
      { name: 'Power BI & DAX Modeling', level: 'Expert', tags: ['Star Schema', 'Measures', 'Row-Level Security'] },
      { name: 'Tableau Desktop', level: 'Advanced', tags: ['LOD Expressions', 'Calculated Fields', 'Storyboards'] },
      { name: 'Plotly & Streamlit', level: 'Advanced', tags: ['Interactive Web Apps', 'Dynamic Visuals'] },
      { name: 'Advanced Excel', level: 'Expert', tags: ['PivotTables', 'XLOOKUP', 'Power Query', 'Financial Models'] },
      { name: 'Matplotlib & Seaborn', level: 'Advanced', tags: ['Statistical Visuals', 'Heatmaps', 'Distributions'] },
      { name: 'KPI Architecture & Tracking', level: 'Expert', tags: ['Executive Scorecards', 'Variance Analysis'] }
    ]
  },
  {
    category: 'Data Engineering & ETL',
    description: 'Designing reliable, automated pipelines with rigorous quality safeguards.',
    skills: [
      { name: 'Python-SQL ETL Pipelines', level: 'Advanced', tags: ['Automated Extraction', 'Transformations'] },
      { name: 'Data Quality Auditing & Error Logging', level: 'Expert', tags: ['Constraint Validation', 'Alerting'] },
      { name: 'Schema Validation & Preprocessing', level: 'Expert', tags: ['Type Enforcement', 'Deduplication'] },
      { name: 'Automated Reporting Routines', level: 'Advanced', tags: ['Scheduled Batches', 'Export Workflows'] }
    ]
  },
  {
    category: 'Methodologies & Developer Tools',
    description: 'Industry-standard practices ensuring reproducibility, governance, and seamless collaboration.',
    skills: [
      { name: 'Git & GitHub Version Control', level: 'Advanced', tags: ['Branching', 'PR Review', 'CI/CD Basics'] },
      { name: 'Jupyter Notebooks & VS Code', level: 'Expert', tags: ['Interactive Exploration', 'Documentation'] },
      { name: 'Feature Engineering & Selection', level: 'Advanced', tags: ['Dimensionality Reduction', 'Scaling'] },
      { name: 'Supervised & Unsupervised ML', level: 'Proficient', tags: ['Regression', 'Classification', 'Clustering'] }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'wallet-share-analytics',
    title: 'Enterprise Relationship & Wallet Share Analytics System',
    category: 'Enterprise BI',
    subtitle: 'End-to-End Pipeline & Executive Scorecard for $3B+ Banking Portfolio',
    summary: 'Architected an end-to-end Python & SQL analytical data pipeline tracking over $3B in institutional wallet share across 12 global Tier-1 and Tier-2 banking partners. Formulated advanced window functions (LAG, DENSE_RANK) to calculate quarter-over-quarter growth rates, tier migration, and early warning churn indicators.',
    impactMetrics: [
      { label: 'Total Volume Tracked', value: '$3.2B+', trend: '12 Global Banks' },
      { label: 'Query Performance', value: '4.2x Faster', trend: 'Optimized CTEs & Indexing' },
      { label: 'At-Risk Revenue Identified', value: '$180M', trend: 'Saved via Early Churn Warnings' },
      { label: 'Automated KPI Refresh', value: 'Daily', trend: 'Replaced 12h Manual Excel Tasks' }
    ],
    technologies: ['SQL (PostgreSQL)', 'Python (Pandas)', 'Power BI', 'DAX Measures', 'Plotly', 'Advanced Window Functions'],
    businessProblem: 'Senior corporate treasury and relationship managers lacked centralized visibility into institutional wallet share across 12 tier-1 global banking counterparties. Revenue churn was discovered reactively after quarter-end books closed, costing an estimated $180M in uncaptured transaction spreads.',
    methodology: [
      'Ingested 1.8M multi-currency institutional trade and lending records using a normalized staging database in PostgreSQL.',
      'Engineered advanced SQL window functions (LAG, LEAD, DENSE_RANK over PARTITION BY bank_id, product_tier) to capture QoQ share velocity.',
      'Formulated custom DAX measures in Power BI to calculate weighted wallet share, churn risk coefficients, and fee margin variances.',
      'Created an interactive executive drill-down dashboard allowing regional relationship directors to isolate partner leakage by product asset class.'
    ],
    keyInsights: [
      'Top 3 global counterparties accounted for 64% of total transaction fees, revealing extreme partner concentration risk.',
      'Institutions exhibiting >8% QoQ wallet share contraction in Fixed Income had a 78% likelihood of full account dormancy within two quarters.',
      'Automating the scorecard reduced executive decision latency from 14 business days to instant real-time visibility.'
    ],
    sqlOrCodeSnippet: {
      language: 'sql',
      title: 'SQL Window Functions: QoQ Growth & Institutional Ranking',
      code: `WITH QuarterlyPerformance AS (
  SELECT 
    b.bank_id,
    b.bank_name,
    b.region,
    t.quarter_end_date,
    SUM(t.fee_revenue_usd) AS current_revenue,
    -- Compute prior quarter revenue using LAG() window function
    LAG(SUM(t.fee_revenue_usd), 1) OVER (
      PARTITION BY b.bank_id 
      ORDER BY t.quarter_end_date
    ) AS prior_quarter_revenue,
    -- Total enterprise pool for wallet share calculation
    SUM(SUM(t.fee_revenue_usd)) OVER (
      PARTITION BY t.quarter_end_date
    ) AS total_market_pool
  FROM enterprise_banking_partners b
  JOIN institutional_transactions t ON b.bank_id = t.bank_id
  WHERE t.quarter_end_date >= '2024-01-01'
  GROUP BY b.bank_id, b.bank_name, b.region, t.quarter_end_date
)
SELECT 
  bank_name,
  region,
  quarter_end_date,
  current_revenue,
  ROUND(((current_revenue - prior_quarter_revenue) / NULLIF(prior_quarter_revenue, 0)) * 100, 2) AS qoq_growth_pct,
  ROUND((current_revenue / NULLIF(total_market_pool, 0)) * 100, 2) AS wallet_share_pct,
  DENSE_RANK() OVER (
    PARTITION BY quarter_end_date 
    ORDER BY current_revenue DESC
  ) AS institutional_rank
FROM QuarterlyPerformance
ORDER BY quarter_end_date DESC, institutional_rank ASC;`
    },
    hasInteractiveDemo: true,
    interactiveDemoId: 'wallet-share'
  },
  {
    id: 'portfolio-risk-engine',
    title: 'Multi-Asset Portfolio Performance & Risk Attribution Engine',
    category: 'Quant & Finance',
    subtitle: 'Institutional Risk-Return & Benchmark Attribution Analytics in Python',
    summary: 'Engineered an end-to-end quantitative portfolio analytics system in Python (Pandas, NumPy) to track active multi-asset investment strategies against a standard 60/40 benchmark. Computed institutional metrics including Annualized Return, Volatility, Sharpe Ratio (1.82), Tracking Error, Information Ratio, and dynamic drawdowns.',
    impactMetrics: [
      { label: 'Active Strategy Sharpe', value: '1.82', trend: 'vs 1.15 60/40 Benchmark' },
      { label: 'Annualized Alpha', value: '+4.28%', trend: 'Statistically Significant (p < 0.01)' },
      { label: 'Max Drawdown Controlled', value: '-8.4%', trend: 'vs -15.6% Benchmark' },
      { label: 'Information Ratio', value: '0.94', trend: 'Superior Risk-Adjusted Selection' }
    ],
    technologies: ['Python (Pandas, NumPy)', 'Plotly Interactive', 'Statistical Modeling', 'Time Series Analysis', 'Risk Decomposition'],
    businessProblem: 'Institutional asset managers needed to decompose whether active excess returns were driven by genuine security selection (Alpha), market factor exposure (Beta), or tactical asset allocation drift, while maintaining strict downside risk parameters.',
    methodology: [
      'Collected and standardized 5 years of daily adjusted closing prices across equities, fixed income, commodities, and FX.',
      'Engineered rolling covariance matrices and returns distributions using NumPy vectorized array mathematics for low-latency computation.',
      'Built a risk attribution engine that separates systematic factor risk from idiosyncratic asset risk using multi-factor regression.',
      'Generated responsive visualization modules in Plotly displaying cumulative wealth growth, underwater drawdown charts, and rolling volatility envelopes.'
    ],
    keyInsights: [
      'The active strategy delivered a Sharpe Ratio of 1.82 with 11.8% annualized volatility compared to 14.1% for the benchmark.',
      'Dynamic duration hedging in fixed income mitigated 42% of tail risk during aggressive rate tightening cycles.',
      'Asset allocation attribution revealed that 68% of active return stemmed from selective overweighting in semiconductor and high-quality liquid sovereign debt.'
    ],
    sqlOrCodeSnippet: {
      language: 'python',
      title: 'Python (NumPy / Pandas): Risk Attribution & Sharpe Engine',
      code: `import numpy as np
import pandas as pd

def calculate_portfolio_metrics(daily_returns: pd.Series, benchmark_returns: pd.Series, risk_free_rate: float = 0.045):
    """
    Computes institutional risk-adjusted return metrics for active strategies.
    """
    trading_days = 252
    
    # Annualized Return & Volatility
    ann_return = daily_returns.mean() * trading_days
    ann_vol = daily_returns.std() * np.sqrt(trading_days)
    
    # Sharpe Ratio (Excess return over risk-free rate / volatility)
    sharpe_ratio = (ann_return - risk_free_rate) / ann_vol
    
    # Active Excess Returns & Tracking Error
    active_returns = daily_returns - benchmark_returns
    tracking_error = active_returns.std() * np.sqrt(trading_days)
    information_ratio = (active_returns.mean() * trading_days) / tracking_error
    
    # Maximum Drawdown
    cumulative_returns = (1 + daily_returns).cumprod()
    running_max = cumulative_returns.cummax()
    drawdown = (cumulative_returns - running_max) / running_max
    max_drawdown = drawdown.min()
    
    # Beta & Alpha calculation
    covariance = np.cov(daily_returns, benchmark_returns)[0][1]
    benchmark_variance = np.var(benchmark_returns)
    beta = covariance / benchmark_variance
    alpha = ann_return - (risk_free_rate + beta * (benchmark_returns.mean() * trading_days - risk_free_rate))
    
    return {
        "Annualized Return": f"{ann_return * 100:.2f}%",
        "Annualized Volatility": f"{ann_vol * 100:.2f}%",
        "Sharpe Ratio": round(sharpe_ratio, 2),
        "Information Ratio": round(information_ratio, 2),
        "Tracking Error": f"{tracking_error * 100:.2f}%",
        "Max Drawdown": f"{max_drawdown * 100:.2f}%",
        "Portfolio Beta": round(beta, 2),
        "Alpha (Jensens)": f"{alpha * 100:.2f}%"
    }`
    },
    hasInteractiveDemo: true,
    interactiveDemoId: 'portfolio-risk'
  },
  {
    id: 'pharma-genai-query-assistant',
    title: 'Pharma Analytics GenAI Query Assistant (Text-to-SQL)',
    category: 'GenAI & NLP',
    subtitle: 'Automated Natural Language to SQL Analytics Pipeline for Sales Metrics',
    summary: 'Engineered an automated Text-to-SQL analytics pipeline using Python and LLMs to query pharmaceutical product sales, margin performance, and regional dispensary metrics. Applied structured prompt engineering techniques and dynamic schema validation to translate plain business questions into executable, zero-syntax-error SQL queries.',
    impactMetrics: [
      { label: 'Syntax Accuracy', value: '99.4%', trend: 'Validated Against SQL AST' },
      { label: 'Avg Query Latency', value: '< 180ms', trend: 'Indexed Materialized Views' },
      { label: 'Ad-hoc Reporting Requests', value: '-65%', trend: 'Self-Serve Business Adoption' },
      { label: 'Supported Query Types', value: '45+', trend: 'Aggregations, Trends, Top-N' }
    ],
    technologies: ['Python', 'LLM Prompt Engineering', 'PostgreSQL', 'SQL AST Parser', 'FastAPI', 'Plotly'],
    businessProblem: 'Commercial pharmaceutical brand managers waited 3 to 5 business days for business intelligence analysts to author custom SQL queries regarding drug unit sales velocity, regional territory performance, and hospital formulary adoption.',
    methodology: [
      'Constructed a dynamic schema introspection catalog passing only relevant table definitions and foreign key maps into LLM context.',
      'Implemented few-shot structured prompting with explicit constraints preventing destructive commands (read-only transactions).',
      'Integrated an automated SQL validator that parses the generated query into an abstract syntax tree (AST) prior to execution.',
      'Equipped the pipeline with automated chart suggestion heuristics, returning both tabular data and suitable charts (bar, line, or heatmaps).'
    ],
    keyInsights: [
      'Providing schema definitions with sample categorical values reduced semantic hallucination by 87%.',
      'Enabled non-technical sales leads to independently run complex multi-join queries comparing territory sales targets.',
      'Significantly accelerated response times for executive requests during quarterly pharmaceutical formulary reviews.'
    ],
    sqlOrCodeSnippet: {
      language: 'sql',
      title: 'Sample Generated Query: Regional Oncology Growth with CTEs',
      code: `WITH ProductTerritorySales AS (
  SELECT 
    d.therapeutic_area,
    d.drug_name,
    t.territory_name,
    DATE_TRUNC('month', s.sale_date) AS sales_month,
    SUM(s.units_sold) AS total_units,
    SUM(s.net_revenue_usd) AS total_revenue
  FROM pharma_sales s
  JOIN pharma_drugs d ON s.drug_id = d.drug_id
  JOIN sales_territories t ON s.territory_id = t.territory_id
  WHERE d.therapeutic_area = 'Oncology'
    AND s.sale_date >= CURRENT_DATE - INTERVAL '12 months'
  GROUP BY 1, 2, 3, 4
)
SELECT 
  drug_name,
  territory_name,
  sales_month,
  total_revenue,
  -- 3-Month rolling average revenue
  AVG(total_revenue) OVER (
    PARTITION BY drug_name, territory_name 
    ORDER BY sales_month 
    ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
  ) AS rolling_3mo_avg_revenue,
  -- Rank within territory for current month
  DENSE_RANK() OVER (
    PARTITION BY territory_name, sales_month 
    ORDER BY total_revenue DESC
  ) AS territory_rank
FROM ProductTerritorySales
ORDER BY sales_month DESC, total_revenue DESC;`
    },
    hasInteractiveDemo: true,
    interactiveDemoId: 'text-to-sql'
  },
  {
    id: 'enterprise-etl-pipeline',
    title: 'Enterprise ETL Data Quality & Validation Pipeline',
    category: 'Data Engineering',
    subtitle: 'Automated Multi-Stage Audit, Schema Enforcement & Error Logging',
    summary: 'Constructed a robust Python and SQL ETL pipeline to clean, audit, and validate raw operational datasets against defined business and financial rules. Implemented automated data-quality checks, schema integrity enforcement, and dedicated error-logging tables capturing discrepancies prior to production database loading.',
    impactMetrics: [
      { label: 'Data Ingestion Reliability', value: '99.98%', trend: 'Zero Siloed Schema Drift' },
      { label: 'Dirty Records Quarantined', value: '42,000+', trend: 'Captured Without Pipeline Failure' },
      { label: 'Audit Log Traceability', value: '100%', trend: 'Full Transaction Lineage' },
      { label: 'Pipeline Speedup', value: '3.5x', trend: 'Chunked Batch Ingestion' }
    ],
    technologies: ['Python', 'Pandas', 'PostgreSQL', 'SQL DDL/DML', 'Data Quality Auditing', 'Schema Validation'],
    businessProblem: 'Upstream operational feeds frequently suffered from corrupted date strings, sudden schema mutations, negative revenue anomalies, and orphaned foreign keys, which silently contaminated executive reporting dashboards.',
    methodology: [
      'Built a staged ETL architecture: Raw Landing -> Quarantined Audit -> Staged Validation -> Gold Production Data Mart.',
      'Implemented automated pre-flight schema validations checking column data types, mandatory non-null constraints, and range bounds.',
      'Created an error-logging event ledger recording timestamp, violating row ID, rule name, and raw payload.',
      'Configured automated email alerts and summary metrics detailing ingestion pass/fail ratios for data governance reviews.'
    ],
    keyInsights: [
      'Quarantine-first architecture prevented 100% of pipeline downtime caused by unexpected vendor schema alterations.',
      'Audit logging identified that 82% of data validation errors originated from legacy POS system date formatting discrepancies.',
      'Empowered downstream analysts to query cleansed datasets with full confidence in metric validity.'
    ]
  },
  {
    id: 'research-paper-nlp',
    title: 'Research Paper Analysis & Summarization Engine',
    category: 'GenAI & NLP',
    subtitle: 'Unstructured Text Mining & NLP Preprocessing for Scholarly Literature',
    summary: 'Conducted end-to-end text analytics on large scientific publications. Preprocessed and cleaned noisy unstructured text, removed stop words, extracted key entity relationships, and synthesized analytical summaries to accelerate literature synthesis.',
    impactMetrics: [
      { label: 'Documents Processed', value: '500+', trend: 'Multi-Page PDF Publications' },
      { label: 'Text Extraction Accuracy', value: '96.2%', trend: 'Normalized Scientific Terms' },
      { label: 'Summarization Time', value: '< 4 sec', trend: 'Accelerated Literature Review' },
      { label: 'Key Term Extraction', value: 'TF-IDF & BERT', trend: 'High Precision Keywords' }
    ],
    technologies: ['Python', 'NLP Preprocessing', 'RegEx', 'NLTK', 'Pandas', 'Text Mining'],
    businessProblem: 'Researchers spent dozens of hours reading 40+ page papers to extract critical methodology sections, dataset characteristics, and baseline comparative metrics.',
    methodology: [
      'Constructed a text extraction pipeline converting messy PDF documents into structured token streams.',
      'Applied Regex and natural language parsing to isolate Methodology, Results, and Abstract sections.',
      'Computed term frequencies and semantic embeddings to highlight core statistical claims and conclusions.',
      'Formatted structured outputs into queryable JSON and SQL tables for automated meta-analyses.'
    ],
    keyInsights: [
      'Automated extraction enabled rapid indexing of over 500 academic articles into an interactive search matrix.',
      'Standardized terminology extraction reduced keyword ambiguity across disparate research domains.'
    ]
  },
  {
    id: 'fashion-pneumonia-ml',
    title: 'Computer Vision & Deep Learning Diagnostic Classifiers',
    category: 'Machine Learning',
    subtitle: 'CNN Architectures for 60,000+ Fashion-MNIST Samples & Medical X-Rays',
    summary: 'Trained and evaluated deep Convolutional Neural Network (CNN) classifiers across 60,000+ Fashion-MNIST samples and clinical chest X-ray images. Conducted comprehensive error matrix analysis, precision-recall trade-off evaluations, and feature map visualizations.',
    impactMetrics: [
      { label: 'Fashion-MNIST Accuracy', value: '92.4%', trend: 'Trained on 60,000 Samples' },
      { label: 'X-Ray Pneumonia Recall', value: '95.8%', trend: 'Minimized False Negatives' },
      { label: 'ROC-AUC Score', value: '0.97', trend: 'High Diagnostic Discrimination' },
      { label: 'Misclassifications Analyzed', value: '100%', trend: 'Isolated Confused Classes' }
    ],
    technologies: ['Python', 'CNNs', 'TensorFlow/Keras', 'Computer Vision', 'Confusion Matrices', 'EDA'],
    businessProblem: 'Evaluating classification performance beyond single macro-accuracy figures, identifying specific class boundary confusions (e.g., shirts vs coats) and prioritizing critical recall in medical diagnosis.',
    methodology: [
      'Engineered normalized image preprocessing pipelines with data augmentation (rotation, zoom, contrast shifts).',
      'Designed convolutional architectures utilizing Batch Normalization, Dropout, and Max Pooling layers to prevent overfitting.',
      'Plotted granular confusion matrices to isolate failure patterns across similar categorical textures.',
      'Evaluated precision vs recall curves to balance false positive rates against clinical safety thresholds.'
    ],
    keyInsights: [
      'In medical diagnosis, tuning decision thresholds to optimize sensitivity achieved 95.8% recall on pneumonia cases.',
      'Error analysis showed misclassifications in apparel classification were concentrated between visually ambiguous categories (Shirts vs T-shirts).'
    ]
  }
];

export const BANKING_PARTNERS_MOCK: BankInstitutionData[] = [
  {
    id: 'bnk-1',
    name: 'JPMorgan Chase & Co.',
    country: 'United States',
    tier: 'Tier 1 Global',
    annualRevenue: 540.8,
    walletSharePct: 22.4,
    prevQuarterRevenue: 498.2,
    qoqGrowth: 8.55,
    denseRank: 1,
    churnRisk: 'Low',
    productMix: [
      { name: 'Fixed Income', value: 185, color: '#3b82f6' },
      { name: 'Equities & Trading', value: 160, color: '#10b981' },
      { name: 'FX & Commodities', value: 95, color: '#8b5cf6' },
      { name: 'Custody & Clearing', value: 65, color: '#f59e0b' },
      { name: 'Advisory & Debt', value: 35.8, color: '#ec4899' }
    ],
    quarterlyTrends: [
      { quarter: 'Q1 24', revenue: 440, walletShare: 19.8, qoqGrowth: 5.2 },
      { quarter: 'Q2 24', revenue: 472, walletShare: 20.6, qoqGrowth: 7.27 },
      { quarter: 'Q3 24', revenue: 498, walletShare: 21.3, qoqGrowth: 5.51 },
      { quarter: 'Q4 24', revenue: 540.8, walletShare: 22.4, qoqGrowth: 8.55 }
    ]
  },
  {
    id: 'bnk-2',
    name: 'Goldman Sachs Group',
    country: 'United States',
    tier: 'Tier 1 Global',
    annualRevenue: 462.5,
    walletSharePct: 19.1,
    prevQuarterRevenue: 435.0,
    qoqGrowth: 6.32,
    denseRank: 2,
    churnRisk: 'Low',
    productMix: [
      { name: 'Fixed Income', value: 140, color: '#3b82f6' },
      { name: 'Equities & Trading', value: 175, color: '#10b981' },
      { name: 'FX & Commodities', value: 75, color: '#8b5cf6' },
      { name: 'Custody & Clearing', value: 42.5, color: '#f59e0b' },
      { name: 'Advisory & Debt', value: 30, color: '#ec4899' }
    ],
    quarterlyTrends: [
      { quarter: 'Q1 24', revenue: 395, walletShare: 17.8, qoqGrowth: 4.1 },
      { quarter: 'Q2 24', revenue: 418, walletShare: 18.2, qoqGrowth: 5.82 },
      { quarter: 'Q3 24', revenue: 435, walletShare: 18.6, qoqGrowth: 4.07 },
      { quarter: 'Q4 24', revenue: 462.5, walletShare: 19.1, qoqGrowth: 6.32 }
    ]
  },
  {
    id: 'bnk-3',
    name: 'Morgan Stanley',
    country: 'United States',
    tier: 'Tier 1 Global',
    annualRevenue: 388.2,
    walletSharePct: 16.0,
    prevQuarterRevenue: 374.0,
    qoqGrowth: 3.80,
    denseRank: 3,
    churnRisk: 'Low',
    productMix: [
      { name: 'Fixed Income', value: 110, color: '#3b82f6' },
      { name: 'Equities & Trading', value: 155, color: '#10b981' },
      { name: 'FX & Commodities', value: 58.2, color: '#8b5cf6' },
      { name: 'Custody & Clearing', value: 40, color: '#f59e0b' },
      { name: 'Advisory & Debt', value: 25, color: '#ec4899' }
    ],
    quarterlyTrends: [
      { quarter: 'Q1 24', revenue: 345, walletShare: 15.5, qoqGrowth: 3.2 },
      { quarter: 'Q2 24', revenue: 360, walletShare: 15.7, qoqGrowth: 4.35 },
      { quarter: 'Q3 24', revenue: 374, walletShare: 16.0, qoqGrowth: 3.89 },
      { quarter: 'Q4 24', revenue: 388.2, walletShare: 16.0, qoqGrowth: 3.80 }
    ]
  },
  {
    id: 'bnk-4',
    name: 'HSBC Holdings plc',
    country: 'United Kingdom',
    tier: 'Tier 1 Global',
    annualRevenue: 312.0,
    walletSharePct: 12.9,
    prevQuarterRevenue: 326.5,
    qoqGrowth: -4.44,
    denseRank: 4,
    churnRisk: 'Moderate',
    productMix: [
      { name: 'Fixed Income', value: 125, color: '#3b82f6' },
      { name: 'Equities & Trading', value: 65, color: '#10b981' },
      { name: 'FX & Commodities', value: 72, color: '#8b5cf6' },
      { name: 'Custody & Clearing', value: 35, color: '#f59e0b' },
      { name: 'Advisory & Debt', value: 15, color: '#ec4899' }
    ],
    quarterlyTrends: [
      { quarter: 'Q1 24', revenue: 330, walletShare: 14.8, qoqGrowth: 2.1 },
      { quarter: 'Q2 24', revenue: 335, walletShare: 14.6, qoqGrowth: 1.52 },
      { quarter: 'Q3 24', revenue: 326.5, walletShare: 13.9, qoqGrowth: -2.54 },
      { quarter: 'Q4 24', revenue: 312.0, walletShare: 12.9, qoqGrowth: -4.44 }
    ]
  },
  {
    id: 'bnk-5',
    name: 'BNP Paribas',
    country: 'France',
    tier: 'Tier 1 Global',
    annualRevenue: 245.4,
    walletSharePct: 10.1,
    prevQuarterRevenue: 232.0,
    qoqGrowth: 5.78,
    denseRank: 5,
    churnRisk: 'Low',
    productMix: [
      { name: 'Fixed Income', value: 102, color: '#3b82f6' },
      { name: 'Equities & Trading', value: 58.4, color: '#10b981' },
      { name: 'FX & Commodities', value: 45, color: '#8b5cf6' },
      { name: 'Custody & Clearing', value: 25, color: '#f59e0b' },
      { name: 'Advisory & Debt', value: 15, color: '#ec4899' }
    ],
    quarterlyTrends: [
      { quarter: 'Q1 24', revenue: 210, walletShare: 9.4, qoqGrowth: 3.5 },
      { quarter: 'Q2 24', revenue: 220, walletShare: 9.6, qoqGrowth: 4.76 },
      { quarter: 'Q3 24', revenue: 232, walletShare: 9.9, qoqGrowth: 5.45 },
      { quarter: 'Q4 24', revenue: 245.4, walletShare: 10.1, qoqGrowth: 5.78 }
    ]
  },
  {
    id: 'bnk-6',
    name: 'Deutsche Bank AG',
    country: 'Germany',
    tier: 'Tier 1 Global',
    annualRevenue: 198.6,
    walletSharePct: 8.2,
    prevQuarterRevenue: 214.0,
    qoqGrowth: -7.20,
    denseRank: 6,
    churnRisk: 'High',
    productMix: [
      { name: 'Fixed Income', value: 92, color: '#3b82f6' },
      { name: 'Equities & Trading', value: 38.6, color: '#10b981' },
      { name: 'FX & Commodities', value: 42, color: '#8b5cf6' },
      { name: 'Custody & Clearing', value: 16, color: '#f59e0b' },
      { name: 'Advisory & Debt', value: 10, color: '#ec4899' }
    ],
    quarterlyTrends: [
      { quarter: 'Q1 24', revenue: 225, walletShare: 10.1, qoqGrowth: -1.2 },
      { quarter: 'Q2 24', revenue: 222, walletShare: 9.7, qoqGrowth: -1.33 },
      { quarter: 'Q3 24', revenue: 214, walletShare: 9.1, qoqGrowth: -3.60 },
      { quarter: 'Q4 24', revenue: 198.6, walletShare: 8.2, qoqGrowth: -7.20 }
    ]
  },
  {
    id: 'bnk-7',
    name: 'Barclays Bank',
    country: 'United Kingdom',
    tier: 'Tier 2 Regional',
    annualRevenue: 145.2,
    walletSharePct: 6.0,
    prevQuarterRevenue: 139.0,
    qoqGrowth: 4.46,
    denseRank: 7,
    churnRisk: 'Low',
    productMix: [
      { name: 'Fixed Income', value: 65, color: '#3b82f6' },
      { name: 'Equities & Trading', value: 42.2, color: '#10b981' },
      { name: 'FX & Commodities', value: 24, color: '#8b5cf6' },
      { name: 'Custody & Clearing', value: 14, color: '#f59e0b' }
    ],
    quarterlyTrends: [
      { quarter: 'Q1 24', revenue: 130, walletShare: 5.8, qoqGrowth: 2.3 },
      { quarter: 'Q2 24', revenue: 134, walletShare: 5.9, qoqGrowth: 3.08 },
      { quarter: 'Q3 24', revenue: 139, walletShare: 5.9, qoqGrowth: 3.73 },
      { quarter: 'Q4 24', revenue: 145.2, walletShare: 6.0, qoqGrowth: 4.46 }
    ]
  },
  {
    id: 'bnk-8',
    name: 'UBS Group AG',
    country: 'Switzerland',
    tier: 'Tier 2 Regional',
    annualRevenue: 128.0,
    walletSharePct: 5.3,
    prevQuarterRevenue: 124.0,
    qoqGrowth: 3.23,
    denseRank: 8,
    churnRisk: 'Low',
    productMix: [
      { name: 'Fixed Income', value: 45, color: '#3b82f6' },
      { name: 'Equities & Trading', value: 52, color: '#10b981' },
      { name: 'FX & Commodities', value: 20, color: '#8b5cf6' },
      { name: 'Custody & Clearing', value: 11, color: '#f59e0b' }
    ],
    quarterlyTrends: [
      { quarter: 'Q1 24', revenue: 118, walletShare: 5.3, qoqGrowth: 1.7 },
      { quarter: 'Q2 24', revenue: 121, walletShare: 5.3, qoqGrowth: 2.54 },
      { quarter: 'Q3 24', revenue: 124, walletShare: 5.3, qoqGrowth: 2.48 },
      { quarter: 'Q4 24', revenue: 128.0, walletShare: 5.3, qoqGrowth: 3.23 }
    ]
  }
];

export const PORTFOLIO_BENCHMARK_MOCK = {
  activeMetrics: [
    { label: 'Annualized Return', strategyValue: '14.28%', benchmarkValue: '9.82%', difference: '+4.46%', description: 'Strategy vs 60/40 Equity/Bond Benchmark', status: 'positive' as const },
    { label: 'Annualized Volatility', strategyValue: '11.84%', benchmarkValue: '14.12%', difference: '-2.28%', description: 'Lower standard deviation of monthly returns', status: 'positive' as const },
    { label: 'Sharpe Ratio (Rf=4.5%)', strategyValue: '1.82', benchmarkValue: '1.15', difference: '+0.67', description: 'Superior excess risk-adjusted return', status: 'positive' as const },
    { label: 'Maximum Drawdown', strategyValue: '-8.40%', benchmarkValue: '-15.60%', difference: '+7.20%', description: 'Significantly reduced downside tail risk', status: 'positive' as const },
    { label: 'Information Ratio', strategyValue: '0.94', benchmarkValue: '0.00', difference: '+0.94', description: 'Consistency of active excess returns', status: 'positive' as const },
    { label: 'Portfolio Beta', strategyValue: '0.84', benchmarkValue: '1.00', difference: '-0.16', description: 'Defensive market sensitivity factor', status: 'neutral' as const },
  ],
  allocations: [
    { assetClass: 'US Large Cap Growth', weight: 35, benchmarkWeight: 36, annualReturn: 18.4, volatility: 16.2, color: '#3b82f6' },
    { assetClass: 'Global Quality Equities', weight: 25, benchmarkWeight: 24, annualReturn: 14.1, volatility: 13.8, color: '#10b981' },
    { assetClass: 'Short-Duration Treasuries', weight: 20, benchmarkWeight: 30, annualReturn: 5.2, volatility: 2.4, color: '#8b5cf6' },
    { assetClass: 'High-Yield & Private Credit', weight: 12, benchmarkWeight: 10, annualReturn: 9.8, volatility: 7.6, color: '#f59e0b' },
    { assetClass: 'Commodities & Gold (Macro)', weight: 8, benchmarkWeight: 0, annualReturn: 12.3, volatility: 11.2, color: '#ec4899' },
  ],
  historicalGrowth: [
    { month: 'Jan 24', strategy: 100.0, benchmark: 100.0, activeDrawdown: 0.0, benchmarkDrawdown: 0.0 },
    { month: 'Feb 24', strategy: 102.4, benchmark: 101.2, activeDrawdown: 0.0, benchmarkDrawdown: 0.0 },
    { month: 'Mar 24', strategy: 105.1, benchmark: 103.0, activeDrawdown: 0.0, benchmarkDrawdown: 0.0 },
    { month: 'Apr 24', strategy: 103.8, benchmark: 99.8, activeDrawdown: -1.24, benchmarkDrawdown: -3.11 },
    { month: 'May 24', strategy: 107.2, benchmark: 102.5, activeDrawdown: 0.0, benchmarkDrawdown: -0.49 },
    { month: 'Jun 24', strategy: 109.8, benchmark: 104.2, activeDrawdown: 0.0, benchmarkDrawdown: 0.0 },
    { month: 'Jul 24', strategy: 111.4, benchmark: 105.8, activeDrawdown: 0.0, benchmarkDrawdown: 0.0 },
    { month: 'Aug 24', strategy: 109.2, benchmark: 102.1, activeDrawdown: -1.97, benchmarkDrawdown: -3.50 },
    { month: 'Sep 24', strategy: 112.6, benchmark: 104.7, activeDrawdown: 0.0, benchmarkDrawdown: -1.04 },
    { month: 'Oct 24', strategy: 111.0, benchmark: 101.8, activeDrawdown: -1.42, benchmarkDrawdown: -3.78 },
    { month: 'Nov 24', strategy: 115.8, benchmark: 107.5, activeDrawdown: 0.0, benchmarkDrawdown: 0.0 },
    { month: 'Dec 24', strategy: 118.2, benchmark: 109.8, activeDrawdown: 0.0, benchmarkDrawdown: 0.0 },
  ]
};

export const TEXT_TO_SQL_QUERIES = [
  {
    id: 'q1',
    category: 'Sales Growth & Ranking',
    prompt: 'Show top 4 therapeutic categories by QoQ revenue growth with their current quarterly total',
    generatedSql: `SELECT 
  d.therapeutic_area,
  SUM(s.net_revenue_usd) AS current_q_revenue,
  LAG(SUM(s.net_revenue_usd), 1) OVER (
    PARTITION BY d.therapeutic_area 
    ORDER BY s.quarter_period
  ) AS prev_q_revenue,
  ROUND((
    (SUM(s.net_revenue_usd) - LAG(SUM(s.net_revenue_usd), 1) OVER (
      PARTITION BY d.therapeutic_area ORDER BY s.quarter_period
    )) / NULLIF(LAG(SUM(s.net_revenue_usd), 1) OVER (
      PARTITION BY d.therapeutic_area ORDER BY s.quarter_period
    ), 0)
  ) * 100, 2) AS qoq_growth_pct,
  DENSE_RANK() OVER (ORDER BY SUM(s.net_revenue_usd) DESC) AS revenue_rank
FROM pharma_sales s
JOIN pharma_drugs d ON s.drug_id = d.drug_id
WHERE s.quarter_period IN ('2024-Q3', '2024-Q4')
GROUP BY d.therapeutic_area, s.quarter_period
ORDER BY qoq_growth_pct DESC
LIMIT 4;`,
    executionTimeMs: 14.8,
    rowsReturned: 4,
    resultsTable: [
      { therapeutic_area: 'Oncology', current_q_revenue: '$48,240,000', qoq_growth_pct: '+14.2%', rank: 1 },
      { therapeutic_area: 'Immunology', current_q_revenue: '$32,150,000', qoq_growth_pct: '+11.8%', rank: 2 },
      { therapeutic_area: 'Cardiology', current_q_revenue: '$28,900,000', qoq_growth_pct: '+7.4%', rank: 3 },
      { therapeutic_area: 'Neurology', current_q_revenue: '$19,400,000', qoq_growth_pct: '+5.1%', rank: 4 }
    ],
    chartType: 'bar',
    chartData: [
      { name: 'Oncology', revenue: 48.24, growth: 14.2 },
      { name: 'Immunology', revenue: 32.15, growth: 11.8 },
      { name: 'Cardiology', revenue: 28.90, growth: 7.4 },
      { name: 'Neurology', revenue: 19.40, growth: 5.1 }
    ]
  },
  {
    id: 'q2',
    category: 'Regional Performance',
    prompt: 'Compare North America vs Europe dispensary distribution volumes and sales margin percentages',
    generatedSql: `SELECT 
  t.region_name,
  COUNT(DISTINCT s.dispensary_id) AS active_dispensaries,
  SUM(s.units_sold) AS total_units,
  ROUND(SUM(s.gross_margin_usd) / NULLIF(SUM(s.net_revenue_usd), 0) * 100, 2) AS gross_margin_pct,
  SUM(s.net_revenue_usd) AS net_revenue
FROM pharma_sales s
JOIN sales_territories t ON s.territory_id = t.territory_id
WHERE s.sales_year = 2024 AND t.region_name IN ('North America', 'Europe', 'Asia-Pacific')
GROUP BY t.region_name
ORDER BY net_revenue DESC;`,
    executionTimeMs: 18.2,
    rowsReturned: 3,
    resultsTable: [
      { region_name: 'North America', active_dispensaries: 1420, total_units: '8.42M', gross_margin_pct: '72.4%', net_revenue: '$62,400,000' },
      { region_name: 'Europe', active_dispensaries: 980, total_units: '5.18M', gross_margin_pct: '68.1%', net_revenue: '$38,900,000' },
      { region_name: 'Asia-Pacific', active_dispensaries: 740, total_units: '4.60M', gross_margin_pct: '64.5%', net_revenue: '$27,390,000' }
    ],
    chartType: 'bar',
    chartData: [
      { name: 'North America', revenue: 62.4, margin: 72.4 },
      { name: 'Europe', revenue: 38.9, margin: 68.1 },
      { name: 'Asia-Pacific', revenue: 27.39, margin: 64.5 }
    ]
  },
  {
    id: 'q3',
    category: 'Data Quality & Anomaly Detection',
    prompt: 'Identify transactions with negative quantities, zero pricing, or invalid dispensary codes quarantined in audit tables',
    generatedSql: `SELECT 
  e.error_id,
  e.source_table,
  e.rule_violated,
  e.violating_payload->>'dispensary_code' AS dispensary_code,
  e.severity_level,
  COUNT(*) OVER (PARTITION BY e.rule_violated) AS violation_frequency,
  e.logged_at
FROM etl_data_quality_audit_log e
WHERE e.logged_at >= CURRENT_DATE - INTERVAL '7 days'
ORDER BY e.logged_at DESC
LIMIT 4;`,
    executionTimeMs: 11.4,
    rowsReturned: 4,
    resultsTable: [
      { error_id: 'ERR-9402', source_table: 'pharma_orders_stg', rule_violated: 'NEGATIVE_QUANTITY_CHECK', dispensary_code: 'DSP-8819', severity_level: 'CRITICAL', violation_frequency: 14 },
      { error_id: 'ERR-9388', source_table: 'daily_feed_ingest', rule_violated: 'INVALID_NDC_FORMAT', dispensary_code: 'DSP-1042', severity_level: 'HIGH', violation_frequency: 38 },
      { error_id: 'ERR-9341', source_table: 'pricing_tier_map', rule_violated: 'ZERO_UNIT_PRICE_ANOMALY', dispensary_code: 'DSP-4921', severity_level: 'HIGH', violation_frequency: 8 },
      { error_id: 'ERR-9290', source_table: 'regional_settlement', rule_violated: 'FOREIGN_KEY_ORPHAN', dispensary_code: 'DSP-9901', severity_level: 'MEDIUM', violation_frequency: 22 }
    ],
    chartType: 'anomaly',
    chartData: [
      { name: 'Negative Qty', count: 14, severity: 'Critical' },
      { name: 'Invalid NDC', count: 38, severity: 'High' },
      { name: 'Zero Price', count: 8, severity: 'High' },
      { name: 'FK Orphan', count: 22, severity: 'Medium' }
    ]
  }
];
