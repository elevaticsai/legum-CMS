import React, { useState } from 'react';
import { ClientHeader } from './components/ClientHeader';
import { ClientFilters } from './components/ClientFilters';
import { ClientTable } from './components/ClientTable';
import type { Client, ClientFilters as ClientFilterType } from '../../types/client';

export const ClientPage = () => {
  const [filters, setFilters] = useState<ClientFilterType>({
    search: '',
    industryType: '',
    location: '',
    state: '',
    complianceStatus: '',
    tier: '',
  });

  const [sortConfig, setSortConfig] = useState<{
    column: keyof Client | null;
    direction: 'asc' | 'desc' | null;
  }>({
    column: null,
    direction: null,
  });

  const handleFilterChange = (key: keyof ClientFilterType, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSort = (column: keyof Client) => {
    setSortConfig(prev => ({
      column,
      direction: 
        prev.column === column && prev.direction === 'asc' ? 'desc' :
        prev.column === column && prev.direction === 'desc' ? null : 'asc',
    }));
  };

  return (
    <div className="p-6">
      <ClientHeader />
      <ClientFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      <ClientTable
        clients={[]} // Add your client data here
        onSort={handleSort}
        sortColumn={sortConfig.column}
        sortDirection={sortConfig.direction}
      />
    </div>
  );
};