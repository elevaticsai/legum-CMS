export const getTableColumns = (tab: string): string[] => {
  switch(tab) {
    case 'license':
      return [
        'Act Name',
        'Details',
        'Status',
        'Registration Number',
        'Valid till',
        'Forms',
        'Displayed',
        'Documents Verified',
        'Compliance Status',
        'Remarks',
        'Clients ID',
        'Clients Name',
        'Location',
        'State',
        'Section'
      ];
    case 'announcement':
      return [
        'Act Name',
        'Details',
        'Forms',
        'Status',
        'Displayed',
        'Documents Verified',
        'Compliance Status',
        'Remarks',
        'Clients ID',
        'Clients Name',
        'Location',
        'State',
        'Section'
      ];
    case 'register':
      return [
        'Act Name',
        'Details',
        'Forms',
        'Month',
        'Register generate Status',
        'Register generate Date',
        'Compliance Status',
        'Remarks',
        'Clients ID',
        'Clients Name',
        'Location',
        'State',
        'Section'
      ];
    case 'return':
      return [
        'Act Name',
        'Details',
        'Forms',
        'Month',
        'Submission Date',
        'Submit Through',
        'Compliance Status',
        'Remarks',
        'Clients ID',
        'Clients Name',
        'Location',
        'State',
        'Section'
      ];
    case 'remittance':
      return [
        'Act Name',
        'Details',
        'Payment Date',
        'Due Date',
        'Amount',
        'Payment Status',
        'Payment Mode',
        'Reference Number',
        'Compliance Status',
        'Remarks',
        'Clients ID',
        'Clients Name',
        'Location',
        'State',
        'Section'
      ];
    case 'employee':
      return [
        'Month',
        'Male',
        'Female',
        'Total No of Employee',
        'Total Joinee',
        'Total Resigned',
        'Clients ID',
        'Clients Name',
        'Location',
        'State',
        'Section'
      ];
    default:
      return [];
  }
};