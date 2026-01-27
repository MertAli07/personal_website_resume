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
    "slug": "metu-mail-assistant-ai",
    "rank": "Consultancy",
    "title": "METU Intelligent Mail & Information Assistant",
    "description": "An AWS-native multi-agent ecosystem designed to synthesize institutional knowledge from disparate sources including emails, web FAQs, and live RSS feeds.",
    "tag": "GenAI / RAG / AWS Bedrock",
    "statusLabel": "Project Completed",
    "statusClass": "status-completed",
    "details": "Architected a sophisticated multi-agent orchestration layer using Amazon Bedrock Flows. The system integrates real-time ingestion with long-term historical data processing, leveraging a specialized Knowledge Base (RAG) to provide an Operator Panel with high-fidelity, synthesized answers to complex campus inquiries.",
    "timeline": "2026",
    "role": "Lead AI Architect & Cloud Engineer",
    "stack": [
      "Amazon Bedrock (Agents & Flows)",
      "AWS Step Functions",
      "Amazon OpenSearch",
      "AWS Lambda",
      "Amazon S3",
      "EventBridge",
      "Python"
    ],
    "highlights": [
      "Designed a modular Multi-Agent Architecture featuring specialized agents for Mail, FAQ, and RSS feeds to ensure high-precision domain routing.",
      "Engineered an automated ETL pipeline using AWS Step Functions and EventBridge to process and vectorize historical email archives into Amazon OpenSearch.",
      "Implemented a sophisticated 'Final Answer Synthesizer' node within Bedrock Flows to merge context from live web crawlers and static knowledge bases.",
      "Optimized the human-in-the-loop workflow by delivering synthesized insights to a dedicated Operator Panel, reducing manual response latency by automating information retrieval."
    ]
  },
  {
    "slug": "meb-ttkb-educational-intelligence",
    "rank": "Consultancy",
    "title": "MEB TTKB AI Governance & Information System",
    "description": "A high-scale, multi-agent architecture designed to govern and retrieve information from the Turkish Ministry of National Education's vast regulatory and pedagogical repository.",
    "tag": "GenAI / Data Engineering",
    "statusLabel": "In Progress",
    "statusClass": "status-progress",
    "details": "Architected an enterprise-grade AI system for TTKB that processes unstructured PDFs, HTML, and news feeds through a Medallion data pipeline. The system features a 'Decision Agent' capable of routing queries to specialized sub-agents (Topics A-Z) and incorporates semantic caching to optimize performance for millions of potential users.",
    "timeline": "2026",
    "role": "Lead AI Solutions Architect",
    "stack": [
      "AWS Bedrock (Agents, Guardrails, KB)",
      "AWS Step Functions (Map Functions)",
      "Amazon OpenSearch (Vector & Cache)",
      "Amazon S3 (Medallion Architecture)",
      "AWS QuickSight",
      "Amazon DynamoDB",
      "Python"
    ],
    "highlights": [
      "Engineered a Medallion Data Pipeline using AWS Step Functions and Lambda to transform raw educational documents from 'Bronze' (raw) to 'Gold' (enriched) states.",
      "Implemented a Semantic Caching layer via Amazon OpenSearch that intercepts repeated queries to minimize LLM latency and operational costs.",
      "Architected a 'Decision Agent' orchestration layer that dynamically routes complex queries to over 20+ specialized Topic Agents (A-Z) for high-precision domain expertise.",
      "Integrated AWS QuickSight for real-time monitoring of usage statistics and frequently asked questions, providing administrative oversight into system health.",
      "Deployed advanced Amazon Bedrock Guardrails to ensure all generated responses adhere to strict educational standards and regulatory compliance."
    ]
  },
  {
    "slug": "gib-multimodal-tax-intelligence",
    "rank": "Consultancy",
    "title": "GİB Multimodal Revenue Intelligence System",
    "description": "An advanced multimodal AI platform for the Turkish Revenue Administration (GİB) that processes text, voice, and visual inputs to deliver precise tax-related guidance.",
    "tag": "GenAI / Multimodal / RAG",
    "statusLabel": "Project Completed",
    "statusClass": "status-completed",
    "details": "Architected a secure, citizen-facing AI solution leveraging Claude 3.7 Sonnet via Amazon Bedrock. The system features a multimodal entry point for diverse query types and a robust semantic caching layer to handle high-concurrency public traffic efficiently. It integrates strict regulatory compliance through Bedrock Guardrails to ensure responses are safe, accurate, and within legal bounds.",
    "timeline": "2026",
    "role": "AI Solutions Architect",
    "stack": [
      "Amazon Bedrock (Claude 3.7 Sonnet)",
      "Amazon OpenSearch (Semantic Cache & Vector Store)",
      "AWS Bedrock Guardrails",
      "AWS Lambda",
      "Amazon S3",
      "AWS QuickSight",
      "Python (Custom Scraping Utilities)"
    ],
    "highlights": [
      "Engineered a Multimodal Ingestion Layer capable of processing Text, Image, and Voice queries, significantly lowering the barrier for citizen interaction.",
      "Implemented a Semantic Caching mechanism using Amazon OpenSearch to intercept and serve repeat inquiries, reducing LLM API costs and improving response latency.",
      "Integrated AWS Bedrock Guardrails as a critical viability filter, ensuring the system remains compliant with institutional policies and refuses non-viable or unsafe queries.",
      "Developed an automated data ingestion pipeline that scrapes and vectorizes official tax PDFs and website content, keeping the knowledge base synchronized with the latest regulations.",
      "Deployed an AWS QuickSight dashboard to visualize usage statistics and common citizen inquiries, providing the administration with real-time data on public information needs."
    ]
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
  },
  {
    "slug": "smart-elevator-dqn",
    "rank": "Hobby",
    "title": "Autonomous Elevator Optimization via DQN",
    "description": "A Reinforcement Learning application using Deep Q-Networks to optimize elevator dispatching and energy efficiency in a simulated environment.",
    "tag": "Reinforcement Learning / Python",
    "statusLabel": "In Progress",
    "statusClass": "status-progress",
    "details": "Developed a custom Markov Decision Process (MDP) environment to train an intelligent agent for elevator management. The system utilizes a DQN architecture with experience replay to master the balance between passenger pickup speed and mechanical movement efficiency.",
    "timeline": "2026",
    "role": "Machine Learning Engineer",
    "stack": [
      "Python",
      "Keras / TensorFlow",
      "Pygame (Simulation)",
      "NumPy",
      "Deep Q-Networks (DQN)"
    ],
    "highlights": [
      "Engineered a 13-dimensional state space vector capturing current floor, direction, door status, and real-time passenger demand across multiple floors.",
      "Implemented a Deep Q-Network (DQN) featuring a Target Network and Experience Replay (size: 50,000) to stabilize the learning process and mitigate moving target problems.",
      "Designed a complex reward shaping mechanism that incentivizes passenger delivery (+10) and pickups (+5) while penalizing idle time and unnecessary mechanical wear.",
      "Developed a custom real-time rendering engine using Pygame to visualize the agent's decision-making and floor transitions during training episodes.",
      "Integrated a dual-model architecture using Mean Squared Error (MSE) loss and the Adam optimizer to converge on an optimal dispatching policy."
    ]
  },
  {
    "slug": "skincancer-ai-detection",
    "rank": "Academic",
    "title": "Intelligent Dermatological Diagnosis",
    "description": "A comprehensive web-based platform for early skin cancer detection, leveraging Deep Learning for lesion classification and Generative AI for patient guidance.",
    "tag": "Computer Vision / Medical AI",
    "statusLabel": "Project Completed",
    "statusClass": "status-completed",
    "details": "Developed an end-to-end diagnostic tool that allows users to upload dermoscopic images for real-time analysis. The system uses a fine-tuned Convolutional Neural Network (CNN) to classify lesions and integrates a GenAI-powered assistant to explain results and provide next-step health recommendations.",
    "timeline": "2024 - 2025",
    "role": "Lead AI & Full-Stack Developer",
    "stack": [
      "TensorFlow / Keras",
      "React / Next.js",
      "Python (Flask)",
      "Vercel"
    ],
    "highlights": [
      "Engineered a Deep Learning pipeline using VGG16/MobileNet architectures, trained on the HAM10000 dataset to detect 7+ types of skin lesions with high precision.",
      "Integrated Google’s Gemini API to create a context-aware medical chatbot that synthesizes AI predictions into human-readable health advice.",
      "Developed a high-performance web interface on Vercel featuring smooth GSAP animations and a responsive design for seamless mobile and desktop usage.",
      "Implemented automated image preprocessing (resizing, normalization, and augmentation) to ensure model robustness against varying camera qualities and lighting conditions.",
      "Designed a secure, serverless backend architecture to handle high-concurrency image uploads and inference requests with minimal latency."
    ]
}
]
