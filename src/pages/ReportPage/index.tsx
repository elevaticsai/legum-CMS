import React from 'react';
import { ReportFilters } from './ReportFilters';
import { ReportList } from './ReportList';
import { ReportStats } from './ReportStats';

export const ReportPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Compliance Reports</h1>
      <ReportStats />
      <ReportFilters />
      <ReportList />
    </div>
  );
};