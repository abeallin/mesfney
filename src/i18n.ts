import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../messages/en.json';
import ti from '../messages/ti.json';

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      ti: { translation: ti },
    },
  });

export default i18n;
