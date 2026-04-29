export type TipType = 'short' | 'long';
export type TipCategory = 'vibecode' | 'workflow' | 'deploy' | 'ai-tools' | 'prompt';

export interface Tip {
  id: number;
  slug: string;
  title: string;
  category: TipCategory;
  categoryLabel: string;
  type: TipType;
  date: string;
  readTime: string;
  isHot?: boolean;
  isNew?: boolean;
  popupContent?: {
    content: string;
    code?: string;
    insight?: string;
  };
  detailContent?: TipDetailContent;
}

export interface TipDetailContent {
  heroTitle: string;
  tools: string;
  difficulty: string;
  applyTime: string;
  tags: string[];
  sections: TipSection[];
  relatedTips: number[];
}

export interface TipSection {
  type: 'paragraph' | 'insight' | 'code' | 'step-list' | 'compare-table' | 'pull-quote' | 'h3' | 'divider';
  content?: string;
  language?: string;
  code?: string;
  steps?: TipStep[];
  headers?: string[];
  rows?: string[][];
  source?: string;
}

export interface TipStep {
  num: string;
  title: string;
  desc: string;
}

export const CATEGORY_COUNTS: Record<string, number> = {
  'Tất cả': 60,
  'Vibecode': 24,
  'Workflow': 12,
  'Deploy': 8,
  'AI Tools': 10,
  'Prompt': 6,
};

export const CATEGORY_LABELS: Record<TipCategory, string> = {
  'vibecode': 'VIBECODE',
  'workflow': 'WORKFLOW',
  'deploy': 'DEPLOY',
  'ai-tools': 'AI TOOLS',
  'prompt': 'PROMPT',
};
