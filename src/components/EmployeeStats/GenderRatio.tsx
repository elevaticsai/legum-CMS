import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { EmployeeData } from '../../types';

interface GenderRatioProps {
  data: EmployeeData[];
}

export const GenderRatio: React.FC<GenderRatioProps> = ({ data }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-4">Gender Distribution</h3>
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
            dataKey="Male" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="Female" 
            stroke="#ec4899" 
            strokeWidth={2}
            dot={{ strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);