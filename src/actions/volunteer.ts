'use server';

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

  // TODO: Replace with Resend email integration
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'Mesfney Love Foundation <noreply@mesfneylove.org>',
  //   to: 'mesfneylove@gmail.com',
  //   subject: `Volunteer Application: ${result.data.firstName} ${result.data.lastName}`,
  //   replyTo: result.data.email,
  //   text: `New volunteer:\n${result.data.firstName} ${result.data.lastName}\n${result.data.email}\nInterests: ${result.data.interests.join(', ')}`,
  // });

  console.log('[Volunteer Form Submission]', result.data);

  return {
    success: true,
    message: 'Thank you for volunteering! We will contact you soon.',
  };
}
