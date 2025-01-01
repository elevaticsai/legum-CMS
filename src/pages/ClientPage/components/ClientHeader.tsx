import React from 'react';
import { PlusCircle } from 'lucide-react';

export const ClientHeader = () => (
  <div className="flex justify-between items-center mb-6">
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Client Management</h1>
      <p className="text-gray-500 mt-1">Manage and monitor client compliance status</p>
    </div>
    <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
      <PlusCircle className="w-5 h-5 mr-2" />
      Add New Client
    </button>
  </div>
);