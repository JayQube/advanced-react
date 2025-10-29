import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // .use подключает плагины к i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Язык по умолчанию
    fallbackLng: 'ru',
    // Сообщения в консоль от i18n только в dev режиме
    // debug: __IS_DEV__,
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
