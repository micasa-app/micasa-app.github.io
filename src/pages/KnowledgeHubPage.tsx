import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { ContentArea } from '../components/ContentArea';
import { useKnowledge } from '../hooks/useKnowledge';

export const KnowledgeHubPage: React.FC = () => {
  const {
    filteredItems,
    selectedId,
    setSelectedId,
    selectedItem,
    searchQuery,
    setSearchQuery,
    loading
  } = useKnowledge();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-[calc(100vh-80px)] mt-20 overflow-hidden relative">
      {/* Mobile Sidebar Toggle Overlay */}
      {!isSidebarOpen && (
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="fixed bottom-8 right-8 z-50 p-4 bg-black text-white rounded-full shadow-2xl md:hidden"
        >
          <Menu size={24} />
        </button>
      )}

      {isSidebarOpen && window.innerWidth < 768 && (
        <button 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed top-24 right-4 z-50 p-2 bg-white rounded-full shadow-lg md:hidden"
        >
          <X size={20} />
        </button>
      )}

      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        items={filteredItems}
        selectedId={selectedId}
        onSelect={handleSelect}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        loading={loading}
      />

      <div className="flex-1 overflow-y-auto bg-white relative">
        <div className="max-w-4xl mx-auto min-h-full">
          <ContentArea 
            selectedId={selectedId}
            selectedItem={selectedItem}
            onBack={() => setSelectedId(null)}
          />
        </div>
      </div>
    </div>
  );
};
