export type Project = {
  slug: string
  rank: string
  title: string
  description: string
  tag: string
  statusLabel: string
  statusClass: string
  details: string
  timeline: string
  role: string
  stack: string[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: 'llm-knowledge-agent',
    rank: 'Consultancy',
    title: 'LLM-Powered Knowledge Agent',
    description: 'A retrieval-augmented system balancing cost, clarity, and control.',
    tag: 'AI / RAG',
    statusLabel: 'Quest Completed',
    statusClass: 'status-completed',
    details:
      'Designed a production-ready agent that blends hybrid search, reranking, and tool use with strict evaluation gates.',
    timeline: '2025 - Present',
    role: 'Lead engineer',
    stack: ['TypeScript', 'Python', 'Postgres', 'Vector DB', 'LLM APIs'],
    highlights: [
      'Built a retrieval pipeline with measurable recall and precision targets.',
      'Added guardrails for prompt injection and data leakage prevention.',
      'Reduced inference cost through caching and adaptive routing.',
    ],
  },
  {
    slug: 'financial-forecasting-lab',
    rank: 'Consultancy',
    title: 'Financial Forecasting Lab',
    description: 'Experimental models combining price trends with sentiment signals.',
    tag: 'ML / Time-Series',
    statusLabel: 'In Progress',
    statusClass: 'status-progress',
    details:
      'Exploring multi-horizon forecasting with market microstructure signals and sentiment-aware features.',
    timeline: '2025 - 2026',
    role: 'Research engineer',
    stack: ['Python', 'PyTorch', 'MLflow', 'Pandas'],
    highlights: [
      'Built a feature store for news + price signals.',
      'Evaluated probabilistic models with calibrated intervals.',
      'Automated backtesting across multiple time windows.',
    ],
  },
  {
    slug: 'personal-data-inventory',
    rank: 'Consultancy',
    title: 'Personal Data Inventory System',
    description: 'A structured pipeline to collect and classify knowledge sources.',
    tag: 'Data Engineering',
    statusLabel: 'Legendary Achievement',
    statusClass: 'status-legendary',
    details:
      'Created a metadata-first pipeline to ingest, classify, and search personal knowledge artifacts.',
    timeline: '2024 - 2025',
    role: 'System designer',
    stack: ['TypeScript', 'Node.js', 'SQLite', 'Search'],
    highlights: [
      'Unified notes, documents, and bookmarks into a single schema.',
      'Implemented automated tagging with human review loops.',
      'Delivered a fast, local-first search experience.',
    ],
  },
  {
    slug: 'tcmb-evds-financial-agent',
    rank: 'Consultancy',
    title: 'TCMB Financial Intelligence System',
    description: 'An AWS-native architecture for transforming complex Turkish Central Bank (EVDS) data into actionable insights.',
    tag: 'AI / FinTech / AWS Bedrock',
    statusLabel: 'Project Completed',
    statusClass: 'status-completed',
    details: 'Architected a multi-node AI system that bridges natural language and formal financial APIs. Leverages AWS Bedrock Agents for semantic series mapping, automated parameter extraction, and real-time visualization of economic trends.',
    timeline: '2026',
    role: 'Systems Architect & Developer',
    stack: [
      'AWS Bedrock',
      'AWS Lambda',
      'Python',
      'Pandas',
      'Knowledge Bases (RAG)',
      'TCMB EVDS API'
    ],
    highlights: [
      'Engineered a metadata-driven RAG pipeline to semantically map informal user queries to precise EVDS series codes.',
      'Implemented an automated data aggregation layer in Lambda to process high-volume time-series data while maintaining LLM context efficiency.',
      'Integrated Bedrock Code Interpreter to dynamically generate Matplotlib visualizations directly from fetched financial datasets.',
      'Optimized security and connectivity by transitioning API authentication to AWS Secrets Manager and modern HTTP header protocols.'
    ]
  }
]
