import React from 'react';
import type { ComplianceData } from '../types';

interface DataTableProps {
  data: ComplianceData[];
  columns: string[];
}

export const DataTable: React.FC<DataTableProps> = ({ data, columns }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full">
      <thead>
        <tr className="bg-gray-50">
          {columns.map(col => (
            <th key={col} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-gray-50">
            {columns.map(col => (
              <td key={col} className="px-4 py-2 whitespace-pre-wrap">
                {col === 'Compliance Status' ? (
                  <span className={`px-2 py-1 rounded-full text-xs ${
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
);