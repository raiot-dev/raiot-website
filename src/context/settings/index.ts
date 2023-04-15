import { createContext } from 'react';
import { SettingsContext as Settings } from '~/models/settings';

export const SettingsContext = createContext({} as Settings);
