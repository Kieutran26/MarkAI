import React from 'react';
import { motion } from 'motion/react';

export default function VibecodeShowcase() {
  return (
    <div className="relative w-full aspect-[1/0.8] max-w-[500px] mx-auto scale-110 md:scale-100">
      {/* Lightbulb (Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-[5%] left-[5%] z-20"
      >
        <div className="relative">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-4 bg-accent rounded-full blur-xl opacity-30"
          />
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20C36.19 20 25 31.19 25 45C25 53.64 29.39 61.26 36 65.73V75C36 76.66 37.34 78 39 78H61C62.66 78 64 76.66 64 75V65.73C70.61 61.26 75 53.64 75 45C75 31.19 63.81 20 50 20Z" stroke="var(--ink)" strokeWidth="3" fill="var(--bg)" />
            <path d="M40 85H60" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
            <path d="M42 92H58" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="45" r="12" fill="var(--accent)" />
            <path d="M50 10V15" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
            <path d="M25 25L28 28" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 50H15" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
            <path d="M25 75L28 72" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
            <path d="M75 25L72 28" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
            <path d="M90 50H85" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
            <path d="M75 75L72 72" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>

      {/* Dashed Line from Bulb */}
      <svg className="absolute top-[15%] left-[15%] w-[40%] h-[30%] pointer-events-none" viewBox="0 0 200 100">
        <motion.path 
          d="M0,50 Q100,0 200,50" 
          stroke="var(--border)" 
          strokeWidth="1.5" 
          strokeDasharray="4 4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </svg>

      {/* Main Browser Window */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-[10%] right-[10%] w-[75%] h-[75%] bg-white border-2 border-ink z-10 overflow-hidden"
      >
        {/* Title Bar */}
        <div className="h-8 bg-ink flex items-center px-4 gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
          <div className="ml-4 flex-1 h-5 bg-white/10 rounded-sm" />
        </div>
        
        {/* Browser Content */}
        <div className="p-6 h-full flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 h-[50%]">
            <div className="border-2 border-dashed border-border flex items-center justify-center bg-bg2">
              <div className="relative w-full h-full p-4 overflow-hidden">
                {/* Mountain Graphic */}
                <div className="absolute bottom-0 left-0 w-full h-[75%] bg-accent/5">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                    {/* Background Mountain */}
                    <path d="M-10,100 L25,45 L60,100 Z" fill="var(--ink)" opacity="0.1" />
                    {/* Main Dark Mountain */}
                    <path d="M5,100 L40,40 L80,100 Z" fill="var(--ink)" opacity="0.8" />
                    {/* Orange Mountain */}
                    <path d="M30,100 L65,50 L110,100 Z" fill="var(--accent)" opacity="0.9" />
                    {/* Sun */}
                    <circle cx="85" cy="30" r="10" fill="var(--accent)" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-4 bg-accent w-full" />
              <div className="h-4 bg-ink w-[80%]" />
              <div className="mt-2 flex flex-col gap-1.5">
                <div className="h-2 bg-border w-full" />
                <div className="h-2 bg-border w-full" />
                <div className="h-2 bg-border w-[60%]" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 flex-1 pb-10">
            <div className="border-2 border-ink p-3 flex flex-col gap-2">
              <div className="w-full aspect-square bg-ink" />
              <div className="h-2 bg-border w-full" />
              <div className="h-2 bg-border w-[60%]" />
            </div>
            <div className="border-2 border-accent p-3 flex flex-col gap-2 bg-accent/5">
              <div className="w-full aspect-square bg-accent" />
              <div className="h-2 bg-border w-full" />
              <div className="h-2 bg-border w-[60%]" />
            </div>
            <div className="border-2 border-dashed border-border p-3 flex items-center justify-center">
              <span className="text-2xl text-border">+</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Tool Panel (Left) */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] left-[2%] z-30 w-24 bg-white border-2 border-ink p-2 flex flex-col gap-2"
      >
        <div className="flex gap-1.5 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-square bg-bg2 flex items-center justify-center font-serif text-accent font-bold">T</div>
          <div className="aspect-square bg-accent flex items-center justify-center">
             <div className="w-3 h-3 bg-white rotate-45" />
          </div>
          <div className="aspect-square border border-border" />
          <div className="aspect-square bg-bg2" />
        </div>
      </motion.div>

      {/* Terminal Window (Right) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[-5%] z-30 w-32 bg-ink border-2 border-ink p-2 text-white font-mono text-[10px]"
      >
        <div className="flex gap-1 mb-2 border-b border-white/10 pb-1">
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-white/20" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-accent">{"</>"}</div>
          <div className="w-full h-1 bg-white/10" />
          <div className="w-80% h-1 bg-white/10" />
        </div>
      </motion.div>

      {/* Smaller Browser (Bottom Right) */}
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-[10%] right-[2%] z-40 w-[180px] h-[120px] bg-white border-2 border-ink overflow-hidden"
      >
        <div className="h-6 bg-border/20 flex items-center px-3 gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
        </div>
        <div className="p-3 flex gap-3">
          <div className="w-10 h-10 bg-accent" />
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="w-full h-2 bg-ink" />
            <div className="w-[60%] h-2 bg-border" />
            <div className="mt-1 flex gap-1">
               <div className="w-1.5 h-1.5 rounded-full bg-border" />
               <div className="w-1.5 h-1.5 rounded-full bg-border" />
               <div className="w-1.5 h-1.5 rounded-full bg-border" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3D Blocks (Bottom Left) */}
      <div className="absolute bottom-[10%] left-[10%] z-20 flex items-end">
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }}
          className="w-12 h-12 bg-accent border-2 border-ink -mb-2 z-10" 
        />
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }}
          className="w-16 h-16 bg-ink -ml-4 z-0" 
        />
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}
          className="w-10 h-10 bg-white border-2 border-ink -ml-2 mb-4 z-20" 
        />
      </div>

      {/* Cursor */}
      <motion.div
        animate={{ 
          x: [240, 260, 240], 
          y: [160, 180, 160],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[45%] left-[55%] z-50 pointer-events-none"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="var(--ink)" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Decorative Dots */}
      <div className="absolute top-0 right-[20%] text-border opacity-50">✳</div>
      <div className="absolute bottom-[20%] left-0 text-accent opacity-50">✳</div>
      <div className="absolute top-[15%] left-0 text-accent text-sm opacity-50">○</div>
      <div className="absolute top-[5%] right-5 text-ink text-sm opacity-50">○</div>
      <div className="absolute bottom-5 right-[40%] text-border text-lg opacity-50">+</div>
    </div>
  );
}
