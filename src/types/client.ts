export interface Client {
  id: string;
  name: string;
  industryType: string;
  location: string;
  state: string;
  complianceStatus: 'Compliant' | 'Non-Compliant';
  lastCheckDate: string;
  complianceOfficer: string;
  tier: 'Premium' | 'Standard';
  servicePackage: 'Full Service' | 'Periodic Check';
  contractExpiryDate: string;
  alerts: number;
  notes: string;
}

export interface ClientFilters {
  search: string;
  industryType: string;
  location: string;
  state: string;
  complianceStatus: string;
  tier: string;
}