import React, { useState, useMemo } from 'react';
import { SortableHeader } from './SortableHeader';
import { StatusFilter } from './StatusFilter';
import { sortData } from '../../utils/sorting';
import type { ComplianceData } from '../../types';

interface DataTableProps {
  data: ComplianceData[];
  columns: string[];
}

export const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc' | null;
  }>({
    key: '',
    direction: null,
  });
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const handleSort = (key: string) => {
    setSortConfig(current => ({
      key,
      direction: 
        current.key === key && current.direction === 'asc' ? 'desc' :
        current.key === key && current.direction === 'desc' ? null : 'asc',
    }));
  };

  const filteredData = useMemo(() => {
    if (statusFilter === 'all') return data;
    return data.filter(item => item['Compliance Status'] === statusFilter);
  }, [data, statusFilter]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return filteredData;
    return sortData(filteredData, sortConfig.key, sortConfig.direction);
  }, [filteredData, sortConfig]);

  return (
    <div className="space-y-4">
      <StatusFilter
        selectedStatus={statusFilter}
        onStatusChange={setStatusFilter}
      />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map(col => (
                <th key={col} className="px-4 py-3 text-left">
                  <SortableHeader
                    column={col}
                    sortConfig={sortConfig}
                    onSort={handleSort}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                {columns.map(col => (
                  <td key={col} className="px-4 py-3 whitespace-pre-wrap">
                    {col === 'Compliance Status' ? (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        row[col] === 'Compliance' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {row[col]}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-900">{row[col] || '-'}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};