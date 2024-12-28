import React from 'react';
import { Users, UserPlus, UserMinus } from 'lucide-react';
import type { EmployeeData } from '../../types';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    label: string;
  };
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</p>
        {trend && (
          <p className={`text-sm font-medium flex items-center ${
            trend.value >= 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            <span className="mr-1">
              {trend.value >= 0 ? '↑' : '↓'}
            </span>
            {Math.abs(trend.value).toFixed(1)}% {trend.label}
          </p>
        )}
      </div>
      <div className="p-3 bg-indigo-50 rounded-lg">
        {React.cloneElement(icon as React.ReactElement, {
          className: 'w-8 h-8 text-indigo-600'
        })}
      </div>
    </div>
  </div>
);

interface StatsCardsProps {
  data: EmployeeData[];
}

export const StatsCards: React.FC<StatsCardsProps> = ({ data }) => {
  if (data.length === 0) return null;

  const currentMonth = data[data.length - 1];
  const previousMonth = data[data.length - 2] || currentMonth;

  const calculateTrend = (current: number, previous: number) => 
    previous ? ((current - previous) / previous) * 100 : 0;

  const stats = [
    {
      title: 'Total Employees',
      value: currentMonth['Total No of Employee'],
      icon: <Users />,
      trend: {
        value: calculateTrend(
          currentMonth['Total No of Employee'],
          previousMonth['Total No of Employee']
        ),
        label: 'vs last month'
      }
    },
    {
      title: 'New Joiners',
      value: currentMonth['Total Joinee'],
      icon: <UserPlus />,
      trend: {
        value: calculateTrend(
          currentMonth['Total Joinee'],
          previousMonth['Total Joinee']
        ),
        label: 'vs last month'
      }
    },
    {
      title: 'Resignations',
      value: currentMonth['Total Resigned'],
      icon: <UserMinus />,
      trend: {
        value: calculateTrend(
          currentMonth['Total Resigned'],
          previousMonth['Total Resigned']
        ),
        label: 'vs last month'
      }
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {stats.map((stat) => (
        <StatsCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};