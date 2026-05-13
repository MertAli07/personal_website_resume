import awsGenAiContent from '../assets/notes/AWS GenAI.md?raw'
import awsStepFunctionsContent from '../assets/notes/AWS Step Functions.md?raw'
import claudeCodeContent from '../assets/notes/Claude Code.md?raw'
import fineTuningContent from '../assets/notes/Fine Tuning.md?raw'
import reinforcementLearningContent from '../assets/notes/Reinforcement Learning.md?raw'
import genaiMoreYouKnowContent from '../assets/notes/genai_The More You Know🌈.md?raw'
import dataEngineerMoreYouKnowContent from '../assets/notes/data_engineer_The More You Know🌈.md?raw'

export type Note = {
  rank: string
  title: string
  subtitle: string
  description: string
  date: string
  readTime: string
  tags: string[]
  rune: string
  slug?: string
  content?: string
}

export const notes: Note[] = [
  {
    rank: 'Field Log',
    title: 'Claude Code',
    subtitle: 'Settings, skills, hooks, and workflow notes',
    description:
      'Practical notes for configuring Claude Code, using project instructions, skills, hooks, subagents, and common commands.',
    date: 'May 12, 2026',
    readTime: '4 min read',
    tags: ['Claude Code', 'AI', 'Tools'],
    rune: '✹',
    slug: 'claude-code',
    content: claudeCodeContent,
  },
  {
    rank: 'Field Log',
    title: 'AWS GenAI Development',
    subtitle: 'Bedrock agents + Lambda streaming',
    description:
      'Quick configuration notes for streaming agent responses via invoke_agent, Lambda URLs, and WebSocket gateways.',
    date: 'Jan 27, 2026',
    readTime: '6 min read',
    tags: ['AWS', 'Bedrock', 'Agents'],
    rune: '✦',
    slug: 'aws-genai',
    content: awsGenAiContent,
  },
  {
    rank: 'Field Log',
    title: 'AWS Step Functions',
    subtitle: 'Serverless orchestration notes',
    description:
      'Practical notes on orchestration patterns, retries, and state machine design for Step Functions.',
    date: 'Jan 27, 2026',
    readTime: '7 min read',
    tags: ['AWS', 'Step Functions', 'Serverless'],
    rune: '✶',
    slug: 'aws-step-functions',
    content: awsStepFunctionsContent,
  },
  {
    rank: 'Theoretical',
    title: 'Fine Tuning',
    subtitle: 'Training notes and experiments',
    description:
      'Collected notes on data preparation, training loops, and evaluation for fine-tuning models.',
    date: 'Jan 27, 2026',
    readTime: '12 min read',
    tags: ['LLM', 'Training', 'ML'],
    rune: '✺',
    slug: 'fine-tuning',
    content: fineTuningContent,
  },
  {
    rank: 'Theoretical',
    title: 'Reinforcement Learning',
    subtitle: 'Policy optimization notes',
    description:
      'Concepts, algorithms, and practical notes on agents, rewards, and policy learning.',
    date: 'Jan 27, 2026',
    readTime: '18 min read',
    tags: ['RL', 'Agents', 'Theory'],
    rune: '✧',
    slug: 'reinforcement-learning',
    content: reinforcementLearningContent,
  },
  {
    rank: 'Field Log',
    title: 'GenAI: The More You Know',
    subtitle: 'Fast reference notes',
    description:
      'Short-form GenAI reminders and quick references captured as a living checklist.',
    date: 'Jan 27, 2026',
    readTime: '9 min read',
    tags: ['GenAI', 'Notes', 'Reference'],
    rune: '✷',
    slug: 'genai-the-more-you-know',
    content: genaiMoreYouKnowContent,
  },
  {
    rank: 'Field Log',
    title: 'Data Engineer: The More You Know',
    subtitle: 'Practical reference notes',
    description:
      'Quick data engineering reminders and operational notes for pipelines and systems.',
    date: 'Jan 27, 2026',
    readTime: '10 min read',
    tags: ['Data', 'Engineering', 'Reference'],
    rune: '✸',
    slug: 'data-engineer-the-more-you-know',
    content: dataEngineerMoreYouKnowContent,
  }
]
