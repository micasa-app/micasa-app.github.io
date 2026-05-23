import { useState, useEffect, useMemo } from 'react';
import { KnowledgeItem, FullKnowledgeItem } from '../types';
import { knowledgeService } from '../services/knowledgeService';

export function useKnowledge() {
  const [items, setItems] = useState<KnowledgeItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<FullKnowledgeItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const data = await knowledgeService.getAll();
        setItems(data);
      } catch (err) {
        setError('Failed to load knowledge base');
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  useEffect(() => {
    if (selectedId) {
      const fetchOne = async () => {
        setSelectedItem(null);
        try {
          const data = await knowledgeService.getById(selectedId);
          setSelectedItem(data);
        } catch (err) {
          setError('Failed to load item detail');
        }
      };
      fetchOne();
    } else {
      setSelectedItem(null);
    }
  }, [selectedId]);

  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.metadata.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.metadata.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [items, searchQuery]);

  return {
    items,
    filteredItems,
    selectedId,
    setSelectedId,
    selectedItem,
    searchQuery,
    setSearchQuery,
    loading,
    error
  };
}
