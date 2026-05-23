import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span className="font-bold tracking-tight">MiCasa</span>
          </div>
          <p className="text-black/30 text-[10px] font-bold uppercase tracking-widest">
            © 2026 MiCasa — Inspired by Living.
          </p>
        </div>

        <div className="flex gap-10">
          <a href="#" className="text-black/20 hover:text-black transition-colors text-[10px] font-bold uppercase tracking-widest">Twitter</a>
          <a href="#" className="text-black/20 hover:text-black transition-colors text-[10px] font-bold uppercase tracking-widest">GitHub</a>
          <a href="#" className="text-black/20 hover:text-black transition-colors text-[10px] font-bold uppercase tracking-widest">LinkedIn</a>
          <a href="#" className="text-black/20 hover:text-black transition-colors text-[10px] font-bold uppercase tracking-widest">Instagram</a>
        </div>

        <p className="text-black/20 text-[10px] font-bold uppercase tracking-widest">
          Built with static elegance.
        </p>
      </div>
    </footer>
  );
};
