'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { submitVolunteerForm } from '@/actions/volunteer';
import type { FormState } from '@/lib/schemas';

const interestKeys = [
  { value: 'fundraising', key: 'volunteerForm.interestFundraising' },
  { value: 'publicity', key: 'volunteerForm.interestPublicity' },
  { value: 'events', key: 'volunteerForm.interestEvents' },
  { value: 'admin', key: 'volunteerForm.interestAdmin' },
  { value: 'other', key: 'volunteerForm.interestOther' },
] as const;

export function VolunteerForm() {
  const { t } = useTranslation();
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitVolunteerForm,
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
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-foreground">
            {t('volunteerForm.firstNameLabel')}
          </label>
          <Input
            id="firstName"
            name="firstName"
            required
            placeholder={t('volunteerForm.firstNamePlaceholder')}
            aria-invalid={!!state?.errors?.firstName}
          />
          {state?.errors?.firstName && (
            <p className="mt-1 text-sm text-destructive">{state.errors.firstName[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-foreground">
            {t('volunteerForm.lastNameLabel')}
          </label>
          <Input
            id="lastName"
            name="lastName"
            required
            placeholder={t('volunteerForm.lastNamePlaceholder')}
            aria-invalid={!!state?.errors?.lastName}
          />
          {state?.errors?.lastName && (
            <p className="mt-1 text-sm text-destructive">{state.errors.lastName[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="vol-email" className="mb-1 block text-sm font-medium text-foreground">
          {t('volunteerForm.emailLabel')}
        </label>
        <Input
          id="vol-email"
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
        <label htmlFor="vol-phone" className="mb-1 block text-sm font-medium text-foreground">
          {t('volunteerForm.phoneLabel')}
        </label>
        <Input
          id="vol-phone"
          name="phone"
          type="tel"
          required
          placeholder={t('volunteerForm.phonePlaceholder')}
          aria-invalid={!!state?.errors?.phone}
        />
        {state?.errors?.phone && (
          <p className="mt-1 text-sm text-destructive">{state.errors.phone[0]}</p>
        )}
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-foreground">
          {t('volunteerForm.interestsLabel')}
        </legend>
        <div className="space-y-2">
          {interestKeys.map((option) => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="interests"
                value={option.value}
                className="size-4 rounded border-input accent-brand-500"
              />
              <span className="text-sm text-foreground">{t(option.key)}</span>
            </label>
          ))}
        </div>
        {state?.errors?.interests && (
          <p className="mt-1 text-sm text-destructive">{state.errors.interests[0]}</p>
        )}
      </fieldset>

      <div>
        <label htmlFor="experience" className="mb-1 block text-sm font-medium text-foreground">
          {t('volunteerForm.experienceLabel')}
        </label>
        <Textarea
          id="experience"
          name="experience"
          rows={3}
          placeholder={t('volunteerForm.experiencePlaceholder')}
        />
      </div>

      <div>
        <label htmlFor="availability" className="mb-1 block text-sm font-medium text-foreground">
          {t('volunteerForm.availabilityLabel')}
        </label>
        <Input
          id="availability"
          name="availability"
          placeholder={t('volunteerForm.availabilityPlaceholder')}
        />
      </div>

      <div>
        <label htmlFor="vol-message" className="mb-1 block text-sm font-medium text-foreground">
          {t('volunteerForm.messageLabel')}
        </label>
        <Textarea
          id="vol-message"
          name="message"
          rows={3}
          placeholder={t('volunteerForm.messagePlaceholder')}
        />
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? t('volunteerForm.submitting') : t('volunteerForm.submitButton')}
      </Button>
    </form>
  );
}
