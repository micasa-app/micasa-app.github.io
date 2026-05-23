export interface KnowledgeItem {
  id: string;
  filename: string;
  metadata: {
    title?: string;
    date?: string;
    tags?: string[];
    author?: string;
  };
  excerpt: string;
}

export interface FullKnowledgeItem {
  metadata: KnowledgeItem['metadata'];
  content: string;
}
