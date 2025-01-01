import React from 'react';
import { Tabs } from '../../components/common/Tabs';
import { UserManagement } from './sections/UserManagement';
import { SystemPreferences } from './sections/SystemPreferences';
import { ComplianceSettings } from './sections/ComplianceSettings';
import { SecuritySettings } from './sections/SecuritySettings';

const tabs = [
  { id: 'users', label: 'User Management', component: UserManagement },
  { id: 'preferences', label: 'System Preferences', component: SystemPreferences },
  { id: 'compliance', label: 'Compliance Settings', component: ComplianceSettings },
  { id: 'security', label: 'Security', component: SecuritySettings },
];

export const SettingsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};