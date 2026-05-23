import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { FullKnowledgeItem } from '../types';

interface ContentAreaProps {
  selectedId: string | null;
  selectedItem: FullKnowledgeItem | null;
  onBack: () => void;
}

export const ContentArea: React.FC<ContentAreaProps> = ({
  selectedId,
  selectedItem,
  onBack
}) => {
  if (!selectedId) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md"
        >
          <div className="w-24 h-24 bg-black/[0.02] rounded-[40px] flex items-center justify-center mx-auto mb-10">
            <BookOpen size={40} className="text-black/10" />
          </div>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">Knowledge Hub</h2>
          <p className="text-black/30 leading-relaxed mb-12 font-medium">
            A curated space for learnings, insights, and actionable knowledge.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-black/[0.02] rounded-3xl text-left border border-black/[0.03]">
              <div className="font-bold text-[10px] uppercase tracking-widest mb-2 text-black/20">Authentic</div>
              <div className="text-xs text-black/40 leading-relaxed">Real-world experience and genuine insights.</div>
            </div>
            <div className="p-6 bg-black/[0.02] rounded-3xl text-left border border-black/[0.03]">
              <div className="font-bold text-[10px] uppercase tracking-widest mb-2 text-black/20">Actionable</div>
              <div className="text-xs text-black/40 leading-relaxed">Practical tips you can apply immediately.</div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {selectedItem ? (
        <motion.article
          key={selectedId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="p-8 md:p-20 flex-1"
        >
          <header className="mb-16">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-black/20 hover:text-black mb-12 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <ArrowLeft size={14} />
              Back
            </button>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedItem.metadata.tags?.map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-black/[0.03] rounded-full text-[10px] font-bold uppercase tracking-widest text-black/40 border border-black/[0.03]">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 leading-[1.05]">
              {selectedItem.metadata.title}
            </h1>

            <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-black/20">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                {selectedItem.metadata.date}
              </div>
              {selectedItem.metadata.author && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-black/[0.05] rounded-full" />
                  {selectedItem.metadata.author}
                </div>
              )}
            </div>
          </header>

          <div className="prose prose-neutral max-w-none">
            <ReactMarkdown>{selectedItem.content}</ReactMarkdown>
          </div>

          <footer className="mt-32 pt-16 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-8 text-black/20 text-[10px] font-bold uppercase tracking-widest">
            <p>© 2026 Knowledge Hub — Authentic & Actionable</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-black transition-colors">Twitter</a>
              <a href="#" className="hover:text-black transition-colors">GitHub</a>
            </div>
          </footer>
        </motion.article>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-black/5 border-t-black rounded-full animate-spin" />
        </div>
      )}
    </AnimatePresence>
  );
};
