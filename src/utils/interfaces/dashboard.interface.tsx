export interface DashboardCharts {
  awards: LineChart[];
  polices: LineChart[];
  claims: LineChart[];
  reinsurance: LineChart[];
  reinsurancePremium: LineChart[];
  accountabilityReinsurance: LineChart[];
}

export interface LineChart {
  processingDate: string;
  amount: number;
}