import React from 'react';
import { motion } from 'motion/react';
import { Info, Mail, Github, Twitter } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 bg-black/[0.02] rounded-2xl flex items-center justify-center mb-8">
          <Info className="text-black/20" size={32} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-10 leading-none">
          Crafting clarity <br />
          <span className="text-black/20">through design.</span>
        </h1>
        
        <div className="prose prose-neutral max-w-none mb-20 text-lg">
          <p>
            MiCasa was born from the idea that our digital environments should be as 
            refined as our physical ones. It's a platform built for those who value 
            minimalism, speed, and meaningful content.
          </p>
          <p>
            Whether you're organizing professional insights or personal learnings, 
            MiCasa provides the quiet space necessary for focused engagement. No noise, 
            no distractions—just pure static elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black/[0.03] pt-16">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-black/20 mb-6">Connect</h3>
            <ul className="space-y-4">
              {[
                { icon: Twitter, label: '@MiCasaDesign' },
                { icon: Github, label: 'micasa-org/hub' },
                { icon: Mail, label: 'hello@micasa.design' },
              ].map(link => (
                <li key={link.label}>
                  <a href="#" className="flex items-center gap-3 text-black/40 hover:text-black transition-all font-medium">
                    <link.icon size={18} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-black/20 mb-6">Philosophy</h3>
            <p className="text-sm text-black/40 leading-relaxed font-medium">
              We believe that good software should disappear. It should be a 
              transparent layer between your thoughts and your actions. MiCasa 
              embodies this through architectural simplicity and intentional UX.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
