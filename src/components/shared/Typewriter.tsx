import React from 'react';
import { motion } from 'motion/react';

interface CharProps {
  children: string;
  delay: number;
}

const Char: React.FC<CharProps> = ({ children, delay }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0 }}
    >
      {children}
    </motion.span>
  );
};

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export const TypewriterText = ({ 
  text, 
  delay = 0, 
  speed = 0.015, 
  className = "" 
}: TypewriterTextProps) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <Char key={i} delay={delay + i * speed}>{char}</Char>
      ))}
    </span>
  );
};
