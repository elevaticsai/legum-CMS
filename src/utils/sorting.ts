import { ComplianceData } from '../types';

const parseDate = (dateStr: string): Date => {
  // Handle special date formats
  if (dateStr.includes('th-')) {
    const [day, month] = dateStr.split('th-');
    const months = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    return new Date(2024, months[month as keyof typeof months], parseInt(day));
  }
  return new Date(dateStr);
};

const compareValues = (a: any, b: any, isDate: boolean = false): number => {
  if (a === b) return 0;
  if (a === '-' || a === '') return 1;
  if (b === '-' || b === '') return -1;

  if (isDate) {
    return parseDate(a).getTime() - parseDate(b).getTime();
  }

  return a < b ? -1 : 1;
};

export const sortData = (
  data: ComplianceData[],
  key: string,
  direction: 'asc' | 'desc'
): ComplianceData[] => {
  const isDateColumn = [
    'Payment Date',
    'Due Date',
    'Valid till',
    'Register generate Date',
    'Submission Date'
  ].includes(key);

  return [...data].sort((a, b) => {
    const aValue = a[key as keyof ComplianceData];
    const bValue = b[key as keyof ComplianceData];
    
    const comparison = compareValues(aValue, bValue, isDateColumn);
    return direction === 'asc' ? comparison : -comparison;
  });
};