import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface TableProps {
  columns: Array<{ key: string; label: string }>;
  data: any[];
  isLoading?: boolean;
  renderCell?: (key: string, value: any) => React.ReactNode;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  isLoading,
  renderCell,
}) => {
  if (isLoading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map(({ key, label }) => (
              <th
                key={key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center space-x-1">
                  <span>{label}</span>
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map(({ key }) => (
                <td key={key} className="px-6 py-4 whitespace-nowrap">
                  {renderCell ? renderCell(key, row[key]) : row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};