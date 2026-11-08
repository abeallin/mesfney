export interface ProjectVideo {
  id: string;
  url: string;
  title: string;
  titleTi?: string;
  transcriptTi?: string;
  transcriptEn?: string;
}

export interface ProjectAttachment {
  url: string;
  title: string;
  titleTi?: string;
  type: 'image' | 'pdf';
}

export interface Project {
  id: string;
  yearStart: number;
  yearEnd?: number;
  title: string;
  titleTi?: string;
  partner?: string;
  partnerTi?: string;
  achievement: string;
  achievementTi?: string;
  description?: string;
  descriptionTi?: string;
  images?: string[];
  amountSpent?: number;
  thankYouLetter?: ProjectAttachment;
  videos?: ProjectVideo[];
}

export interface TeamMember {
  id: string;
  name: string;
  nameTi?: string;
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
  periodTi?: string;
  yearStart: number;
  yearEnd?: number;
  amountSpent: number;
  amountRaised?: number;
  notes: string;
  notesTi?: string;
  projectId?: string;
}

export interface MLFEvent {
  id: string;
  title: string;
  titleTi?: string;
  date: string;
  endDate?: string;
  location?: string;
  locationTi?: string;
  description: string;
  descriptionTi?: string;
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
