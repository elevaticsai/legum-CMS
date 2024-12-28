import { useState, useEffect } from 'react';
import type { ComplianceData, Filters, FileState, DataState } from '../types';

export const useDataManagement = () => {
  const [files, setFiles] = useState<FileState>({
    license: null,
    announcement: null,
    register: null,
    return: null,
    employee: null,
    remittance: null
  });

  const [data, setData] = useState<DataState>({
    license: [],
    announcement: [],
    register: [],
    return: [],
    employee: [],
    remittance: []
  });

  const [filteredData, setFilteredData] = useState<DataState>({
    license: [],
    announcement: [],
    register: [],
    return: [],
    employee: [],
    remittance: []
  });

  const [filters, setFilters] = useState<Filters>({
    clientId: 'All',
    clientName: 'All',
    location: 'All',
    state: 'All',
    section: 'All'
  });

  const handleFileUpload = (fileType: keyof FileState, file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const csvData = event.target?.result as string;
        const parsedData = parseCSV(csvData);
        setData(prev => ({ ...prev, [fileType]: parsedData }));
        setFilteredData(prev => ({ ...prev, [fileType]: parsedData }));
        setFiles(prev => ({ ...prev, [fileType]: file }));
      };
      reader.readAsText(file);
    }
  };

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const getUniqueValues = (field: keyof ComplianceData, dataSet: string): string[] => {
    if (!data[dataSet as keyof DataState]) return ['All'];
    const values = [...new Set(data[dataSet as keyof DataState].map(item => item[field]))];
    return ['All', ...values];
  };

  useEffect(() => {
    Object.keys(data).forEach(tab => {
      let filtered = data[tab as keyof DataState];
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== 'All') {
          const field = key === 'clientId' ? 'Clients ID' :
                       key === 'clientName' ? 'Clients Name' :
                       key === 'location' ? 'Location' :
                       key === 'state' ? 'State' :
                       'Section';
          filtered = filtered.filter(item => item[field] === value);
        }
      });
      setFilteredData(prev => ({ ...prev, [tab]: filtered }));
    });
  }, [filters, data]);

  return {
    files,
    data,
    filteredData,
    filters,
    handleFileUpload,
    handleFilterChange,
    getUniqueValues
  };
};

const parseCSV = (csvData: string): any[] => {
  const lines = csvData.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index]?.trim() || '';
      return obj;
    }, {} as any);
  });
};