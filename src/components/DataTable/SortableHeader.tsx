import React from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

interface SortableHeaderProps {
  column: string;
  sortConfig: {
    key: string;
    direction: 'asc' | 'desc' | null;
  };
  onSort: (key: string) => void;
}

export const SortableHeader: React.FC<SortableHeaderProps> = ({ 
  column, 
  sortConfig, 
  onSort 
}) => {
  const getSortIcon = () => {
    if (sortConfig.key !== column) {
      return <ArrowUpDown className="w-4 h-4 opacity-0 group-hover:opacity-100" />;
    }
    return sortConfig.direction === 'asc' ? 
      <ArrowUp className="w-4 h-4 text-indigo-600" /> : 
      <ArrowDown className="w-4 h-4 text-indigo-600" />;
  };

  return (
    <button
      onClick={() => onSort(column)}
      className="flex items-center space-x-2 text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-indigo-600 group transition-colors"
    >
      <span>{column}</span>
      {getSortIcon()}
    </button>
  );
};