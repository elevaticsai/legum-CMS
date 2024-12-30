import React from 'react';
import { FilterPanel } from '../FilterPanel';
import { DataTable } from '../DataTable';
import { CompliancePieChart } from '../CompliancePieChart';
import { getTableColumns } from '../../utils/tableColumns';
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import type { ComplianceData, Filters } from '../../types';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${color}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${color.replace('border-', 'bg-').replace('-600', '-100')}`}>
        {icon}
      </div>
    </div>
  </div>
);

export const ComplianceView: React.FC<ComplianceViewProps> = ({
  data,
  filters,
  onFilterChange,
  getUniqueValues,
  activeTab,
}) => {
  const columns = getTableColumns(activeTab);
  const totalRecords = data.length;
  const compliantRecords = data.filter(item => item['Compliance Status'] === 'Compliance').length;
  const nonCompliantRecords = totalRecords - compliantRecords;

  const complianceData = [
    { name: 'Compliant', value: compliantRecords },
    { name: 'Non-Compliant', value: nonCompliantRecords }
  ];

  return (
    <div className="p-6 space-y-6">
      <FilterPanel 
        filters={filters}
        onFilterChange={onFilterChange}
        getUniqueValues={getUniqueValues}
        activeTab={activeTab}
      />
      
      <div className="grid grid-cols-3 gap-6">
        <StatCard
          title="Total Records"
          value={totalRecords}
          icon={<FileText className="w-6 h-6 text-blue-600" />}
          color="border-blue-600"
        />
        <StatCard
          title="Compliant"
          value={compliantRecords}
          icon={<CheckCircle className="w-6 h-6 text-green-600" />}
          color="border-green-600"
        />
        <StatCard
          title="Non-Compliant"
          value={nonCompliantRecords}
          icon={<AlertTriangle className="w-6 h-6 text-red-600" />}
          color="border-red-600"
        />
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Compliance Records</h2>
          <DataTable data={data} columns={columns} />
        </div>
        <div>
          <CompliancePieChart data={complianceData} />
        </div>
      </div>
    </div>
  );
};