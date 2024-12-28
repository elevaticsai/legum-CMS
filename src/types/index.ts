export interface ComplianceData {
  'Act Name': string;
  'Details': string;
  'Status': string;
  'Registration Number'?: string;
  'Valid till'?: string;
  'Forms'?: string;
  'Displayed'?: string;
  'Documents Verified'?: string;
  'Month'?: string;
  'Register generate Status'?: string;
  'Register generate Date'?: string;
  'Submission Date'?: string;
  'Submit Through'?: string;
  'Compliance Status': string;
  'Remarks'?: string;
  'Clients ID': string;
  'Clients Name': string;
  'Location': string;
  'State': string;
  'Section': string;
}

export interface EmployeeData {
  'Month': string;
  'Male': number;
  'Female': number;
  'Total No of Employee': number;
  'Total Joinee': number;
  'Total Resigned': number;
  'Clients ID': string;
  'Clients Name': string;
  'Location': string;
  'State': string;
  'Section': string;
}

export interface RemittanceData extends ComplianceData {
  'Payment Date'?: string;
  'Due Date'?: string;
  'Amount'?: number;
  'Payment Status'?: string;
  'Payment Mode'?: string;
  'Reference Number'?: string;
}

export interface Filters {
  clientId: string;
  clientName: string;
  location: string;
  state: string;
  section: string;
}

export interface FileState {
  license: File | null;
  announcement: File | null;
  register: File | null;
  return: File | null;
  employee: File | null;
  remittance: File | null;
}

export interface DataState {
  license: ComplianceData[];
  announcement: ComplianceData[];
  register: ComplianceData[];
  return: ComplianceData[];
  employee: EmployeeData[];
  remittance: RemittanceData[];
}