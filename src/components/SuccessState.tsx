'use client';

import { ReactNode, useState } from 'react';

interface SuccessStateProps {
  icon?: string;
  title: string;
  description: string;
  className?: string;
}

export default function SuccessState({ 
  icon = '✳', 
  title, 
  description, 
  className = '' 
}: SuccessStateProps) {
  return (
    <div className={`success-state ${className}`}>
      <div className="success-icon">{icon}</div>
      <div className="success-title">{title}</div>
      <div className="success-desc">{description}</div>
    </div>
  );
}
