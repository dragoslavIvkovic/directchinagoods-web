import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Uvoz prevoda
import en from './en/translation.json';
import sr from './rs/translation.json';

i18n
  .use(LanguageDetector) // Automatska detekcija jezika
  .use(initReactI18next) // React integracija
  .init({
    resources: {
      en: { translation: en },
      sr: { translation: sr },
    },
    fallbackLng: 'en', // Jezik za slučaj neuspešne detekcije
    supportedLngs: ['en', 'sr'], // Lista podržanih jezika
    debug: true,
    interpolation: {
      escapeValue: false, // React automatski escajpuje vrednosti
    },
  });

export default i18n;
