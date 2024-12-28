export const getTableColumns = (tab: string): string[] => {
  switch(tab) {
    case 'license':
      return ['Act Name', 'Details', 'Status', 'Registration Number', 'Valid till', 'Compliance Status'];
    case 'announcement':
      return ['Act Name', 'Details', 'Forms', 'Status', 'Displayed', 'Documents Verified', 'Compliance Status'];
    case 'register':
      return ['Act Name', 'Details', 'Forms', 'Month', 'Register generate Status', 'Register generate Date', 'Compliance Status', 'Remarks'];
    case 'return':
      return ['Act Name', 'Details', 'Forms', 'Month', 'Submission Date', 'Submit Through', 'Compliance Status', 'Remarks'];
    case 'remittance':
      return ['Act Name', 'Details', 'Payment Date', 'Due Date', 'Amount', 'Payment Status', 'Payment Mode', 'Reference Number', 'Compliance Status', 'Remarks'];
    case 'employee':
      return ['Month', 'Male', 'Female', 'Total No of Employee', 'Total Joinee', 'Total Resigned', 'Location', 'State'];
    default:
      return [];
  }
};