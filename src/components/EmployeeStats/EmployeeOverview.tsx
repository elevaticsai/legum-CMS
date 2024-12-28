import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { EmployeeData } from '../../types';

interface EmployeeOverviewProps {
  data: EmployeeData[];
}

export const EmployeeOverview: React.FC<EmployeeOverviewProps> = ({ data }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-4">Employee Overview</h3>
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="Month" 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '0.375rem'
            }}
          />
          <Legend 
            wrapperStyle={{ 
              paddingTop: '20px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="Total No of Employee" 
            stroke="#4f46e5" 
            strokeWidth={2}
            name="Total Employees"
            dot={{ strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="Total Joinee" 
            stroke="#22c55e" 
            strokeWidth={2}
            name="New Joiners"
            dot={{ strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="Total Resigned" 
            stroke="#ef4444" 
            strokeWidth={2}
            name="Resigned"
            dot={{ strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);