import React from 'react';
import { MoreVertical, AlertCircle } from 'lucide-react';
import type { Client } from '../../../types/client';

interface ClientTableProps {
  clients: Client[];
  onSort: (column: keyof Client) => void;
  sortColumn: keyof Client | null;
  sortDirection: 'asc' | 'desc' | null;
}

export const ClientTable: React.FC<ClientTableProps> = ({
  clients,
  onSort,
  sortColumn,
  sortDirection,
}) => {
  const getSortIcon = (column: keyof Client) => {
    if (sortColumn !== column) return null;
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {[
              { key: 'id', label: 'Client ID' },
              { key: 'name', label: 'Client Name' },
              { key: 'industryType', label: 'Industry' },
              { key: 'complianceStatus', label: 'Status' },
              { key: 'lastCheckDate', label: 'Last Check' },
              { key: 'tier', label: 'Tier' },
              { key: 'alerts', label: 'Alerts' },
              { key: 'actions', label: '' },
            ].map(({ key, label }) => (
              <th
                key={key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => key !== 'actions' && onSort(key as keyof Client)}
              >
                <div className="flex items-center space-x-1">
                  <span>{label}</span>
                  {key !== 'actions' && <span>{getSortIcon(key as keyof Client)}</span>}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {clients.map((client) => (
            <tr key={client.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {client.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {client.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {client.industryType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  client.complianceStatus === 'Compliant'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {client.complianceStatus}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {client.lastCheckDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  client.tier === 'Premium'
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {client.tier}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {client.alerts > 0 && (
                  <div className="flex items-center text-red-600">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm">{client.alerts}</span>
                  </div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-gray-400 hover:text-gray-500">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};