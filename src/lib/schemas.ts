import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const volunteerFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  interests: z
    .array(z.enum(['fundraising', 'publicity', 'events', 'admin', 'other']))
    .min(1, 'Please select at least one area of interest'),
  experience: z.string().optional(),
  availability: z.string().optional(),
  message: z.string().optional(),
});

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
} | null;
