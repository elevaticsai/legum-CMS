import React from 'react';
import { FilterPanel } from '../FilterPanel';
import { DataTable } from '../DataTable';
import { CompliancePieChart } from '../CompliancePieChart';
import { getTableColumns } from '../../utils/tableColumns';
import type { ComplianceData, Filters } from '../../types';

interface ComplianceViewProps {
  data: ComplianceData[];
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string) => void;
  getUniqueValues: (field: keyof ComplianceData, dataSet: string) => string[];
  activeTab: string;
}

export const ComplianceView: React.FC<ComplianceViewProps> = ({
  data,
  filters,
  onFilterChange,
  getUniqueValues,
  activeTab,
}) => {
  const columns = getTableColumns(activeTab);
  const complianceData = [
    { name: 'Compliant', value: data.filter(item => item['Compliance Status'] === 'Compliance').length },
    { name: 'Non-Compliant', value: data.filter(item => item['Compliance Status'] === 'Non-Compliance').length }
  ];

  return (
    <div className="p-6 space-y-6">
      <FilterPanel 
        filters={filters}
        onFilterChange={onFilterChange}
        getUniqueValues={getUniqueValues}
        activeTab={activeTab}
      />
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3 bg-white rounded-lg shadow-md p-6">
          <DataTable data={data} columns={columns} />
        </div>
        <CompliancePieChart data={complianceData} />
      </div>
    </div>
  );
};