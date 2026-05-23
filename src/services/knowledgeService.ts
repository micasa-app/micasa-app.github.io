import { KnowledgeItem, FullKnowledgeItem } from '../types';

// Simple front-matter parser for browser compatibility
const parseFrontMatter = (text: string) => {
  const fmRegex = /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)$/;
  const match = text.match(fmRegex);
  
  if (!match) return { data: {}, content: text };
  
  const yaml = match[1];
  const content = match[2];
  const data: Record<string, any> = {};
  
  yaml.split(/\r?\n/).forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      let value = valueParts.join(':').trim();
      
      // Basic array parsing for tags like [tag1, tag2]
      if (value.startsWith('[') && value.endsWith(']')) {
        data[key.trim()] = value.slice(1, -1).split(',').map(s => s.trim());
      } else {
        data[key.trim()] = value;
      }
    }
  });
  
  return { data, content };
};

// Vite feature to import all markdown files at build time
const markdownFiles = import.meta.glob('../../knowledge/*.md', { as: 'raw', eager: true });

export const knowledgeService = {
  async getAll(): Promise<KnowledgeItem[]> {
    const items: KnowledgeItem[] = Object.entries(markdownFiles).map(([path, content]) => {
      const filename = path.split('/').pop() || '';
      const id = filename.replace('.md', '');
      const { data, content: body } = parseFrontMatter(content as string);
      
      return {
        id,
        filename,
        metadata: data as any,
        excerpt: body.slice(0, 150).replace(/[#*`]/g, '') + "...",
      };
    });
    
    // Sort by date descending
    return items.sort((a, b) => {
      const dateA = new Date(a.metadata.date || 0).getTime();
      const dateB = new Date(b.metadata.date || 0).getTime();
      return dateB - dateA;
    });
  },

  async getById(id: string): Promise<FullKnowledgeItem> {
    // Find the matching path in the globbed files
    const matchingPath = Object.keys(markdownFiles).find(path => path.endsWith(`${id}.md`));
    const content = matchingPath ? markdownFiles[matchingPath] : null;
    
    if (!content) throw new Error('Knowledge item not found');
    
    const { data, content: body } = parseFrontMatter(content as string);
    return {
      metadata: data as any,
      content: body
    };
  }
};
