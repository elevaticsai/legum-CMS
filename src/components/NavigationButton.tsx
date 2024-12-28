import React from 'react';

interface NavigationButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`w-full px-4 py-2 text-left rounded-lg ${active ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`}
  >
    {children}
  </button>
);