import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

interface ComplianceData {
  name: string;
  value: number;
}

interface CompliancePieChartProps {
  data: ComplianceData[];
}

export const CompliancePieChart: React.FC<CompliancePieChartProps> = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const getPercentage = (value: number) => ((value / total) * 100).toFixed(1);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Compliance Status Distribution</h2>
      <div className="flex justify-center">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? '#4CAF50' : '#f44336'} />
            ))}
            <Label
              content={({ viewBox: { cx, cy } }) => (
                <text
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-sm font-medium"
                >
                  {total > 0 ? `${getPercentage(data[0].value)}%` : '0%'}
                </text>
              )}
            />
          </Pie>
        </PieChart>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-2 ${
              index === 0 ? 'bg-green-500' : 'bg-red-500'
            }`} />
            <span className="text-sm">
              {entry.name} ({getPercentage(entry.value)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};