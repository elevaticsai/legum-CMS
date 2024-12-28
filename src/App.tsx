import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { DataUploadPanel } from './components/DataUploadPanel';
import { ComplianceView } from './components/ComplianceView';
import { EmployeeView } from './components/EmployeeView';
import { Auth } from './pages/Auth';
import { useDataManagement } from './hooks/useDataManagement';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('license');
  const { files, data, filteredData, filters, handleFileUpload, handleFilterChange, getUniqueValues } = useDataManagement();

  if (!isAuthenticated) {
    return <Auth onAuthSuccess={() => setIsAuthenticated(true)} />;
  }

  const renderContent = () => {
    if (activeTab === 'data') {
      return <DataUploadPanel files={files} onFileUpload={handleFileUpload} />;
    }

    if (activeTab === 'employee') {
      return (
        <EmployeeView 
          data={filteredData.employee}
          filters={filters}
          onFilterChange={handleFilterChange}
          getUniqueValues={getUniqueValues}
          activeTab={activeTab}
        />
      );
    }

    return (
      <ComplianceView 
        data={filteredData[activeTab as keyof typeof filteredData] || []}
        filters={filters}
        onFilterChange={handleFilterChange}
        getUniqueValues={getUniqueValues}
        activeTab={activeTab}
      />
    );
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;