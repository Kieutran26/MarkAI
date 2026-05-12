'use client';

import { useState, useCallback } from 'react';
import FilterSearchBar from '../components/prompts/FilterSearchBar';
import AllPromptsList from '../components/prompts/AllPromptsList';
import PromptPopup from '../components/prompts/PromptPopup';
import { Prompt } from '../lib/prompts-types';
import { promptsData, allPromptsList } from '../lib/prompts-data';

export default function AllPrompts() {
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
      <section className="hero-section" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="hero-inner" style={{ padding: '6rem 2rem 4rem' }}>
          <p className="hero-label"><span>✳</span> Thư viện đầy đủ</p>
          <h1 className="hero-h1">Toàn bộ 150+ Prompts — <em>lấy về xài liền.</em></h1>
          <p className="hero-p" style={{ maxWidth: '700px' }}>
            Tổng hợp tất cả các prompt từ Vibecode, Content Marketing, Research, Data và nhiều hơn thế nữa. 
            Được kiểm chứng và tối ưu cho các dòng AI mới nhất.
          </p>
        </div>
      </section>

      <FilterSearchBar />
      
      <AllPromptsList promptIds={allPromptsList} onPromptClick={handlePromptClick} />

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
