export type Severity = 'Low' | 'Medium' | 'High';

export interface AISafetyIncident {
  id: number;
  title: string;
  description: string;
  severity: Severity;
  reported_at: string;
}

export type SortOrder = 'newest' | 'oldest'; 