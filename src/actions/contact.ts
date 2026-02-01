'use server';

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

  // TODO: Replace with Resend email integration
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'Mesfney Love Foundation <noreply@mesfneylove.org>',
  //   to: 'mesfneylove@gmail.com',
  //   subject: `Website Contact: ${result.data.subject}`,
  //   replyTo: result.data.email,
  //   text: `From: ${result.data.name} (${result.data.email})\n\n${result.data.message}`,
  // });

  console.log('[Contact Form Submission]', result.data);

  return {
    success: true,
    message: 'Thank you for your message! We will be in touch soon.',
  };
}
