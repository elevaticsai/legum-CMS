import React from 'react';
import type { FileState } from '../types';

interface DataUploadPanelProps {
  files: FileState;
  onFileUpload: (fileType: keyof FileState, file: File) => void;
}

export const DataUploadPanel: React.FC<DataUploadPanelProps> = ({ files, onFileUpload }) => (
  <div className="grid grid-cols-2 gap-6 p-6">
    {Object.entries({
      'license': 'License Registration Data',
      'announcement': 'Abstract & Notice Data',
      'register': 'Register & Records Data',
      'return': 'Return Data',
      'remittance': 'Remittance Data',
      'employee': 'Employee Statistics Data'
    }).map(([key, title]) => (
      <div key={key} className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => e.target.files && onFileUpload(key as keyof FileState, e.target.files[0])}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
        {files[key as keyof FileState] && (
          <p className="mt-2 text-sm text-gray-600">
            Uploaded: {files[key as keyof FileState]?.name}
          </p>
        )}
      </div>
    ))}
  </div>
);