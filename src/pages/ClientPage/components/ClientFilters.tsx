import React from 'react';
import { Search, Filter } from 'lucide-react';
import type { ClientFilters } from '../../../types/client';

interface ClientFiltersProps {
  filters: ClientFilters;
  onFilterChange: (key: keyof ClientFilters, value: string) => void;
}

export const ClientFilters: React.FC<ClientFiltersProps> = ({ filters, onFilterChange }) => (
  <div className="bg-white rounded-lg shadow p-4 mb-6">
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search clients..."
            className="pl-10 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
          />
        </div>
      </div>
      
      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.industryType}
        onChange={(e) => onFilterChange('industryType', e.target.value)}
      >
        <option value="">All Industries</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="IT">IT</option>
        <option value="Healthcare">Healthcare</option>
      </select>

      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.complianceStatus}
        onChange={(e) => onFilterChange('complianceStatus', e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Compliant">Compliant</option>
        <option value="Non-Compliant">Non-Compliant</option>
      </select>

      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.tier}
        onChange={(e) => onFilterChange('tier', e.target.value)}
      >
        <option value="">All Tiers</option>
        <option value="Premium">Premium</option>
        <option value="Standard">Standard</option>
      </select>
    </div>
  </div>
);