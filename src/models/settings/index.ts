export interface SettingsContext {
  theme: Themes;
  setTheme: (theme: Themes) => void;
  locale: Locales;
}

export enum Themes {
  Dark = 'dark',
  Light = 'light',
}

export enum Locales {
  DE = 'de',
  EN = 'en',
}
