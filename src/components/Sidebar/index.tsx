import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings,
  Bell
} from 'lucide-react';
import { Logo } from './Logo';
import { MenuItem } from './MenuItem';

export const Sidebar: React.FC = () => (
  <div className="w-64 bg-white border-r h-full flex flex-col">
    <Logo />
    
    <div className="flex-1 py-4">
      <div className="space-y-1">
        <MenuItem icon={LayoutDashboard} label="Dashboard" active />
        <MenuItem icon={Users} label="Clients" />
        <MenuItem icon={FileText} label="Reports" />
        <MenuItem icon={Bell} label="Notifications" />
      </div>
    </div>

    <div className="p-4 border-t">
      <MenuItem icon={Settings} label="Settings" />
    </div>
  </div>
);