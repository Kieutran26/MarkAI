'use client';

'use client';

import { useState, useCallback } from 'react';
import PromptsHero from '../components/prompts/PromptsHero';
import FilterSearchBar from '../components/prompts/FilterSearchBar';

import PromptCategorySection from '../components/prompts/PromptCategorySection';
import ToolsBand from '../components/prompts/ToolsBand';
import SubmitPromptSection from '../components/prompts/SubmitPromptSection';
import PromptsCTA from '../components/prompts/PromptsCTA';
import PromptPopup from '../components/prompts/PromptPopup';
import { Prompt } from '../lib/prompts-types';
import { promptsData, vibecodePrompts, contentPrompts } from '../lib/prompts-data';

export default function Prompts() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState<Prompt | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const promptIds = Object.keys(promptsData);

  const handlePromptClick = useCallback((prompt: Prompt) => {
    const idx = promptIds.indexOf(prompt.id);
    setCurrentPrompt(prompt);
    setCurrentIndex(idx >= 0 ? idx : 0);
    setIsPopupOpen(true);
  }, [promptIds]);

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  const handleNavigate = useCallback((prompt: Prompt, index: number) => {
    setCurrentPrompt(prompt);
    setCurrentIndex(index);
  }, []);

  return (
    <div className="prompts-page">
      <PromptsHero />
      <FilterSearchBar />
      
      <PromptCategorySection
        id="vibecode"
        num="02 · vibecode"
        title="Prompt <em>code nhanh hơn.</em>"
        promptIds={vibecodePrompts}
        variant="light"
        onPromptClick={handlePromptClick}
      />

      <PromptCategorySection
        id="content"
        num="03 · content marketing"
        title="Prompt <em>content ra nhanh hơn.</em>"
        promptIds={contentPrompts}
        variant="cream"
        onPromptClick={handlePromptClick}
      />

      <ToolsBand />
      
      <SubmitPromptSection />
      <PromptsCTA />

      <PromptPopup
        isOpen={isPopupOpen}
        prompt={currentPrompt}
        promptIds={promptIds}
        currentIndex={currentIndex}
        onClose={handleClosePopup}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
