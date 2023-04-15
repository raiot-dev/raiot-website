import { InitOptions } from 'i18next';
import { Locales } from '~/models/settings';

export const supportedLngs: Locales[] = [Locales.EN, Locales.DE];
export const fallbackLng: Locales = Locales.EN;

export const i18nConfig: InitOptions = {
  supportedLngs,
  fallbackLng,
  defaultNS: 'common',
  react: { useSuspense: false },
};
