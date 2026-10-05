const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'unpacked_tu_dien.html'), 'utf8');
const dMatch = content.match(/const D = (\[[\s\S]*?\]);/);
const cMatch = content.match(/const C = (\{[\s\S]*?\});/);

const D = eval('(' + dMatch[1] + ')');
const C = eval('(' + cMatch[1] + ')');

const tsContent = `export type DictionaryCategoryKey = 'code' | 'design' | 'infra' | 'data' | 'ai' | 'workflow';

export interface DictionaryCategoryInfo {
  name: string;
  dot: string;
}

export const DICTIONARY_CATEGORIES: Record<DictionaryCategoryKey, DictionaryCategoryInfo> = {
  code: { name: 'Code', dot: '#141414' },
  design: { name: 'Design', dot: '#E8772E' },
  infra: { name: 'Hạ tầng', dot: '#4F7FD1' },
  data: { name: 'Data', dot: '#C9A227' },
  ai: { name: 'AI', dot: '#B26AD6' },
  workflow: { name: 'Workflow', dot: '#5E9E57' }
};

export interface DictionaryTermItem {
  term: string;
  category: DictionaryCategoryKey;
  categoryName: string;
  dot: string;
  def: string;
  letter: string;
}

export const RAW_DICTIONARY_TERMS: Array<[string, DictionaryCategoryKey, string]> = ${JSON.stringify(D, null, 2)};

export const DICTIONARY_TERMS: DictionaryTermItem[] = RAW_DICTIONARY_TERMS.map(([term, catKey, def]) => {
  const catInfo = DICTIONARY_CATEGORIES[catKey];
  const letter = term[0].toUpperCase();
  return {
    term,
    category: catKey,
    categoryName: catInfo ? catInfo.name : catKey,
    dot: catInfo ? catInfo.dot : '#141414',
    def,
    letter
  };
});
`;

fs.writeFileSync(path.join(__dirname, '../src/lib/tuDienTerms.ts'), tsContent, 'utf8');
console.log('Successfully wrote src/lib/tuDienTerms.ts with', D.length, 'terms');
