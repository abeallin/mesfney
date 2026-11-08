'use server';

import { SITE } from '@/lib/constants';
import { contactFormSchema, type FormState } from '@/lib/schemas';

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = Object.fromEntries(formData);
  const result = contactFormSchema.safeParse(raw);

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

  const { name, email, phone, subject, message } = result.data;
  const emailBody = `From: ${name} (${email})${phone ? `\nPhone: ${phone}` : ''}\n\n${message}`;

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
          subject: `Website Contact: ${subject}`,
          text: emailBody,
        }),
      });
      if (res.ok) {
        return {
          success: true,
          message: 'Thank you for your message! We will be in touch soon.',
        };
      }
    } catch (err) {
      console.error('[Contact Form Resend Error]', err);
    }
  }

  const mailtoUrl = `mailto:${SITE.contact.email}?subject=${encodeURIComponent(
    `Website Contact: ${subject}`
  )}&body=${encodeURIComponent(emailBody)}`;

  return {
    success: true,
    message:
      'Thank you! Opening your email client to send your message directly to our inbox.',
    mailtoUrl,
  };
}
