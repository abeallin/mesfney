'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { submitContactForm } from '@/actions/contact';
import type { FormState } from '@/lib/schemas';

export function ContactForm() {
  const { t } = useTranslation();
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitContactForm,
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      if (state.mailtoUrl) {
        window.location.href = state.mailtoUrl;
      }
      formRef.current?.reset();
    } else if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
          {t('contactForm.nameLabel')}
        </label>
        <Input
          id="name"
          name="name"
          required
          placeholder={t('contactForm.namePlaceholder')}
          aria-invalid={!!state?.errors?.name}
        />
        {state?.errors?.name && (
          <p className="mt-1 text-sm text-destructive">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
          {t('contactForm.emailLabel')}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t('contactForm.emailPlaceholder')}
          aria-invalid={!!state?.errors?.email}
        />
        {state?.errors?.email && (
          <p className="mt-1 text-sm text-destructive">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">
          {t('contactForm.phoneLabel')}
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder={t('contactForm.phonePlaceholder')}
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-foreground">
          {t('contactForm.subjectLabel')}
        </label>
        <Input
          id="subject"
          name="subject"
          required
          placeholder={t('contactForm.subjectPlaceholder')}
          aria-invalid={!!state?.errors?.subject}
        />
        {state?.errors?.subject && (
          <p className="mt-1 text-sm text-destructive">{state.errors.subject[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
          {t('contactForm.messageLabel')}
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t('contactForm.messagePlaceholder')}
          aria-invalid={!!state?.errors?.message}
        />
        {state?.errors?.message && (
          <p className="mt-1 text-sm text-destructive">{state.errors.message[0]}</p>
        )}
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? t('contactForm.sending') : t('contactForm.sendButton')}
      </Button>
    </form>
  );
}
