export type PromptCategory = 'vibecode' | 'content' | 'research' | 'data' | 'deploy' | 'design' | 'workflow';
export type AiTool = 'Claude' | 'Cursor AI' | 'ChatGPT' | 'Gemini' | 'v0.dev / Bolt' | 'Claude Code';

export interface PromptVar {
  name: string;
  desc: string;
}

export interface Prompt {
  id: string;
  num: string;
  category: PromptCategory;
  categoryLabel: string;
  tools: AiTool[];
  hot?: boolean;
  isNew?: boolean;
  title: string;
  desc: string;
  prompt: string;
  vars: PromptVar[];
  insight?: string;
  meta: string;
  date: string;
}

export const CATEGORY_LABELS: Record<PromptCategory, string> = {
  vibecode: 'VIBECODE',
  content: 'CONTENT',
  research: 'RESEARCH',
  data: 'DATA',
  deploy: 'DEPLOY',
  design: 'DESIGN',
  workflow: 'WORKFLOW',
};

export const CATEGORY_COUNTS: Record<string, number> = {
  'Tất cả': 150,
  'Vibecode': 48,
  'Content': 32,
  'Research': 20,
  'Data': 18,
  'Deploy': 14,
  'Design': 12,
  'Workflow': 6,
};

export const TOOLS_DATA = [
  { name: 'Claude', count: 68, desc: 'Anthropic · reasoning mạnh · viết tốt nhất' },
  { name: 'Cursor AI', count: 44, desc: 'IDE AI · Composer · Rules' },
  { name: 'ChatGPT', count: 26, desc: 'OpenAI · GPT-4o · phổ biến' },
  { name: 'Gemini', count: 8, desc: 'Google · tích hợp Workspace' },
  { name: 'v0.dev / Bolt', count: 6, desc: 'UI gen · prototype nhanh' },
];

export const PROMPTS_BY_CATEGORY: Record<string, string[]> = {
  vibecode: ['042', '043', '044', '045', '046', '047'],
  content: ['017', '018', '019'],
  research: ['089', '031'],
  data: ['103'],
  deploy: ['078'],
};
