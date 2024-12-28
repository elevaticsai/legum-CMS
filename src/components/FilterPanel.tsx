import React from 'react';
import type { Filters, ComplianceData, DataState } from '../types';

interface FilterPanelProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string) => void;
  getUniqueValues: (field: keyof ComplianceData, dataSet: keyof DataState) => string[];
  activeTab: keyof DataState;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ 
  filters, 
  onFilterChange, 
  getUniqueValues, 
  activeTab 
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <div className="grid grid-cols-5 gap-4">
      {Object.entries(filters).map(([key, value]) => (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {key.charAt(0).toUpperCase() + key.slice(1).replace('Id', ' ID')}
          </label>
          <select
            className="w-full border rounded-md p-2"
            value={value}
            onChange={(e) => onFilterChange(key as keyof Filters, e.target.value)}
          >
            {getUniqueValues(
              key === 'clientId' ? 'Clients ID' :
              key === 'clientName' ? 'Clients Name' :
              key === 'location' ? 'Location' :
              key === 'state' ? 'State' : 'Section',
              activeTab
            ).map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  </div>
);