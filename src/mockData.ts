import { AISafetyIncident } from './types';

export const mockIncidents: AISafetyIncident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in job recommendations, leading to potential discrimination in hiring processes.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information in a medical context, potentially endangering patient care.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata through conversation history.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  }
]; 