import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ 
  icon: Icon, 
  label, 
  active = false,
  onClick 
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center px-4 py-2 text-sm ${
      active 
        ? 'text-indigo-600 bg-indigo-50' 
        : 'text-gray-600 hover:bg-gray-50'
    }`}
  >
    <Icon className="w-5 h-5 mr-3" />
    {label}
  </button>
);