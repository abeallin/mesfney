export interface Project {
  id: string;
  yearStart: number;
  yearEnd?: number;
  title: string;
  partner?: string;
  achievement: string;
  description?: string;
  images?: string[];
  amountSpent?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: TeamRole;
  title?: string;
  isCurrent: boolean;
  isFounder: boolean;
  photo?: string;
  order: number;
}

export type TeamRole = 'chair' | 'secretary' | 'finances' | 'fundraiser' | 'volunteer';

export interface FinancialRecord {
  id: string;
  period: string;
  yearStart: number;
  yearEnd?: number;
  amountSpent: number;
  amountRaised?: number;
  notes: string;
  projectId?: string;
}

export interface MLFEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  location?: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'past';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interests: VolunteerInterest[];
  experience?: string;
  availability?: string;
  message?: string;
}

export type VolunteerInterest = 'fundraising' | 'publicity' | 'events' | 'admin' | 'other';

export type Locale = 'en' | 'ti';
