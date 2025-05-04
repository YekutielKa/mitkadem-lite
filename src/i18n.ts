import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'ru',
  supportedLngs: ['ru', 'en', 'he', 'fr', 'es'],
  lng: 'ru',
  resources: {
    ru: {
      translation: {
        welcome: 'Добро пожаловать в Mitkadem',
        change_lang: 'Сменить язык',
      },
    },
    en: {
      translation: {
        welcome: 'Welcome to Mitkadem',
        change_lang: 'Change language',
      },
    },
    he: {
      translation: {
        welcome: 'ברוכים הבאים ל-Mitkadem',
        change_lang: 'שנה שפה',
      },
    },
    fr: {
      translation: {
        welcome: 'Bienvenue à Mitkadem',
        change_lang: 'Changer la langue',
      },
    },
    es: {
      translation: {
        welcome: 'Bienvenido a Mitkadem',
        change_lang: 'Cambiar idioma',
      },
    },
  },
});

export default i18n;
