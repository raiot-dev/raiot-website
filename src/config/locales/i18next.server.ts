import { RemixI18Next } from 'remix-i18next';
import Backend from 'i18next-fs-backend';
import { resolve } from 'path';

import i18n from './i18n';

const i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
  },
  i18next: {
    ...i18n,
    backend: {
      loadPath: resolve(`./public/locales/{{lng}}/{{ns}}.json`),
    },
  },
  backend: Backend,
});

export default i18next;
