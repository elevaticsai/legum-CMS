import React from 'react';
import { Layout, FileText, BookOpen, SendHorizontal, FileUp, CreditCard, Users } from 'lucide-react';
import { TabButton } from './TabButton';

interface Tab {
  id: string;
  label: string;
  icon: any;
}

const tabs: Tab[] = [
  { id: 'license', label: 'License Registration', icon: Layout },
  { id: 'announcement', label: 'Abstract & Notices', icon: FileText },
  { id: 'register', label: 'Register & Records', icon: BookOpen },
  { id: 'return', label: 'Return', icon: SendHorizontal },
  { id: 'remittance', label: 'Remittance', icon: CreditCard },
  { id: 'employee', label: 'Employee Stats', icon: Users },
  { id: 'data', label: 'Data Upload', icon: FileUp },
];

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => (
  <div className="bg-white border-b">
    <div className="px-6">
      <h1 className="text-2xl font-bold py-6 mb-2">Compliance Dashboard</h1>
      <div className="flex space-x-4 mb-2">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
            icon={tab.icon}
            label={tab.label}
          />
        ))}
      </div>
    </div>
  </div>
);