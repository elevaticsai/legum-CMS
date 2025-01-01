import React from 'react';
import { Table } from '../../components/common/Table';
import { Badge } from '../../components/common/Badge';
import { useClients } from '../../hooks/useClients';

const columns = [
  { key: 'clientId', label: 'Client ID' },
  { key: 'clientName', label: 'Client Name' },
  { key: 'industryType', label: 'Industry' },
  { key: 'location', label: 'Location' },
  { key: 'state', label: 'State' },
  { key: 'complianceStatus', label: 'Status' },
  { key: 'lastCheck', label: 'Last Check' },
  { key: 'tier', label: 'Tier' },
];

export const ClientList = () => {
  const { clients, isLoading } = useClients();

  const renderCell = (key: string, value: any) => {
    switch (key) {
      case 'complianceStatus':
        return (
          <Badge 
            variant={value === 'Compliant' ? 'success' : 'danger'}
            label={value}
          />
        );
      case 'tier':
        return (
          <Badge 
            variant={value === 'Premium' ? 'purple' : 'gray'}
            label={value}
          />
        );
      default:
        return value;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <Table 
        columns={columns}
        data={clients}
        isLoading={isLoading}
        renderCell={renderCell}
      />
    </div>
  );
};