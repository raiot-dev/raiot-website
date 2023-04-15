import { RemixI18Next } from 'remix-i18next';
import Backend from 'i18next-fs-backend';
import { resolve } from 'path';

import { i18nConfig } from '~/config/locales/i18n';

export const i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18nConfig.supportedLngs as string[],
    fallbackLanguage: i18nConfig.fallbackLng as string,
  },
  i18next: {
    ...i18nConfig,
    backend: {
      loadPath: resolve(`./public/locales/{{lng}}/{{ns}}.json`),
    },
  },
  backend: Backend,
});
