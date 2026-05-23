import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, BookOpen, Calendar, ChevronRight, X, Sparkles } from 'lucide-react';
import { KnowledgeItem } from '../types';
import { cn } from '../utils/cn';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: KnowledgeItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  loading: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  items,
  selectedId,
  onSelect,
  searchQuery,
  onSearchChange,
  loading
}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.aside
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="absolute inset-y-0 left-0 z-30 w-80 bg-white border-r border-black/[0.03] flex flex-col md:relative"
        >
          <div className="p-8 border-b border-black/[0.03]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center shadow-lg shadow-black/10">
                <BookOpen className="text-white" size={20} />
              </div>
              <h1 className="font-semibold text-xl tracking-tight">Knowledge</h1>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20" size={16} />
              <input 
                type="text"
                placeholder="Search learnings..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-black/[0.02] border border-transparent focus:border-black/5 rounded-2xl text-sm focus:ring-0 transition-all placeholder:text-black/20"
              />
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {loading ? (
              <div className="flex flex-col gap-4 p-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-16 bg-black/[0.02] rounded-2xl animate-pulse" />
                ))}
              </div>
            ) : items.length > 0 ? (
              items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-2xl transition-all group relative",
                    selectedId === item.id 
                      ? "bg-black text-white shadow-xl shadow-black/10" 
                      : "hover:bg-black/[0.03]"
                  )}
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="font-medium text-sm leading-snug">
                      {item.metadata.title || item.id}
                    </span>
                    <div className="flex items-center gap-2 opacity-40 text-[10px] uppercase tracking-widest font-bold">
                      <Calendar size={10} />
                      {item.metadata.date || 'No Date'}
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-12 text-center text-black/20 text-sm font-medium">
                No items found
              </div>
            )}
          </nav>

          <div className="p-4 border-top border-black/5">
            <div className="p-4 bg-black/5 rounded-2xl">
              <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-black/40">
                <Sparkles size={12} />
                AI Assistant
              </div>
              <p className="text-[11px] text-black/60 leading-relaxed">
                Add files to <code className="bg-black/10 px-1 rounded">/knowledge</code> to update your hub.
              </p>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
