'use server';

import { SITE } from '@/lib/constants';
import { volunteerFormSchema, type FormState } from '@/lib/schemas';

export async function submitVolunteerForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    interests: formData.getAll('interests'),
    experience: formData.get('experience') || undefined,
    availability: formData.get('availability') || undefined,
    message: formData.get('message') || undefined,
  };

  const result = volunteerFormSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of result.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = [];
      fieldErrors[key].push(issue.message);
    }
    return {
      success: false,
      message: 'Please fix the errors below.',
      errors: fieldErrors,
    };
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    interests,
    experience,
    availability,
    message,
  } = result.data;

  const emailBody = [
    `Volunteer Application: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Areas of Interest: ${interests.join(', ')}`,
    experience ? `Experience: ${experience}` : '',
    availability ? `Availability: ${availability}` : '',
    message ? `\nAdditional Message:\n${message}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: "Mesfiney's Love Foundation <onboarding@resend.dev>",
          to: [SITE.contact.email],
          reply_to: email,
          subject: `Volunteer Application: ${firstName} ${lastName}`,
          text: emailBody,
        }),
      });
      if (res.ok) {
        return {
          success: true,
          message: 'Thank you for volunteering! We will contact you soon.',
        };
      }
    } catch (err) {
      console.error('[Volunteer Form Resend Error]', err);
    }
  }

  const mailtoUrl = `mailto:${SITE.contact.email}?subject=${encodeURIComponent(
    `Volunteer Application: ${firstName} ${lastName}`
  )}&body=${encodeURIComponent(emailBody)}`;

  return {
    success: true,
    message:
      'Thank you! Opening your email client to send your application directly to our team.',
    mailtoUrl,
  };
}
