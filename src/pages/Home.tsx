import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, Layout as LayoutIcon, Zap } from 'lucide-react';
import { NavLink } from 'react-router';

export const Home: React.FC = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 bg-black rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-black/20">
            <Sparkles className="text-white" size={32} />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Welcome to <br />
            <span className="text-black/20 italic">MiCasa.</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/30 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
            A minimalist workspace designed for clarity, ideas, and refined productivity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink 
              to="/articles" 
              className="px-10 py-4 bg-black text-white rounded-2xl font-semibold shadow-xl shadow-black/10 hover:scale-105 transition-transform"
            >
              Read Articles
            </NavLink>
            <NavLink 
              to="/about" 
              className="px-10 py-4 bg-black/[0.03] text-black rounded-2xl font-semibold hover:bg-black/[0.05] transition-all"
            >
              Learn More
            </NavLink>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: BookOpen, title: 'Deep Insights', desc: 'Curated articles with real-world application and depth.' },
          { icon: LayoutIcon, title: 'Minimal UI', desc: 'Focus on what matters most with a clean, clutter-free interface.' },
          { icon: Zap, title: 'Static Speed', desc: 'Blazing fast load times optimized for performance and reliability.' },
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-10 bg-black/[0.02] border border-black/[0.03] rounded-[40px] hover:bg-black/[0.03] transition-all"
          >
            <feature.icon className="text-black/10 mb-6" size={40} />
            <h3 className="text-2xl font-semibold mb-4 tracking-tight">{feature.title}</h3>
            <p className="text-black/40 leading-relaxed font-medium">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
