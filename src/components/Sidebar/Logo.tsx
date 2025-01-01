import React from 'react';
import { Shield } from 'lucide-react';

export const Logo: React.FC = () => (
  <div className="flex items-center p-4 border-b">
    <Shield className="w-8 h-8 text-indigo-600" />
    <div className="ml-2">
      <h1 className="text-lg font-bold text-gray-900">ComplianceHub</h1>
      <p className="text-xs text-gray-500">Enterprise Suite</p>
    </div>
  </div>
);