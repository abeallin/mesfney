import en from '../../messages/en.json';
import ti from '../../messages/ti.json';

const translations: Record<string, typeof en> = { en, ti };

export function getTranslations(locale: string) {
  return translations[locale] || translations.en;
}
