import React from 'react';
import { FilterPanel } from '../FilterPanel';
import { DataTable } from '../DataTable';
import { EmployeeOverview } from '../EmployeeStats/EmployeeOverview';
import { GenderRatio } from '../EmployeeStats/GenderRatio';
import { StatsCards } from '../EmployeeStats/StatsCards';
import { getTableColumns } from '../../utils/tableColumns';
import type { EmployeeData, Filters } from '../../types';

interface EmployeeViewProps {
  data: EmployeeData[];
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string) => void;
  getUniqueValues: (field: keyof EmployeeData, dataSet: string) => string[];
  activeTab: string;
}

export const EmployeeView: React.FC<EmployeeViewProps> = ({
  data,
  filters,
  onFilterChange,
  getUniqueValues,
  activeTab,
}) => {
  const columns = getTableColumns(activeTab);

  return (
    <div className="p-6 space-y-6">
      <FilterPanel 
        filters={filters}
        onFilterChange={onFilterChange}
        getUniqueValues={getUniqueValues}
        activeTab={activeTab}
      />
      <StatsCards data={data} />
      <div className="grid grid-cols-2 gap-6">
        <EmployeeOverview data={data} />
        <GenderRatio data={data} />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Employee Details</h3>
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
};