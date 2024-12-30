import React from 'react';
import { CheckCircle, XCircle, Filter } from 'lucide-react';

interface StatusFilterProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
}

export const StatusFilter: React.FC<StatusFilterProps> = ({ 
  selectedStatus, 
  onStatusChange 
}) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Filter className="w-4 h-4 text-gray-500" />
      <span className="text-sm font-medium text-gray-700">Status:</span>
      <div className="flex space-x-2">
        <button
          onClick={() => onStatusChange('all')}
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            selectedStatus === 'all'
              ? 'bg-gray-200 text-gray-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => onStatusChange('Compliance')}
          className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
            selectedStatus === 'Compliance'
              ? 'bg-green-200 text-green-800'
              : 'bg-green-50 text-green-600 hover:bg-green-100'
          }`}
        >
          <CheckCircle className="w-3 h-3" />
          <span>Compliant</span>
        </button>
        <button
          onClick={() => onStatusChange('Non-Compliance')}
          className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
            selectedStatus === 'Non-Compliance'
              ? 'bg-red-200 text-red-800'
              : 'bg-red-50 text-red-600 hover:bg-red-100'
          }`}
        >
          <XCircle className="w-3 h-3" />
          <span>Non-Compliant</span>
        </button>
      </div>
    </div>
  );
};