import { SbReactComponentsMap } from '@storyblok/react';

import { Endeavours } from './Endeavours';
import { Header } from './Header';
import { Reputation } from './Reputation';
import { Timeline } from './Timeline';
import { WhoAmI } from './WhoAmI';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { PrivacyPolicy } from './PrivacyPolicy';
import { Research } from './Research';

export const sections: SbReactComponentsMap = {
  Contact: Contact,
  Endeavours: Endeavours,
  Header: Header,
  Reputation: Reputation,
  Timeline: Timeline,
  WhoAmI: WhoAmI,
  PrivacyPolicy: PrivacyPolicy,
  Footer: Footer,
  Research: Research,
};
