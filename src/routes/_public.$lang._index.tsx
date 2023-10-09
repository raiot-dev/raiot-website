import { V2_MetaFunction, LoaderFunction, redirect } from '@remix-run/node';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { BlurryBlob, Menu } from '~/components/elements';

import { Locales } from '~/models/settings';
import { HttpStatusCode } from '~/models/http/statusCodes';

import { fallbackLng, supportedLngs } from '~/config/locales/i18n';
import { Contact, Footer, Header, Reputation, WhoAmI } from '~/components/sections';
import { Endeavours, Timeline } from '~/components/sections/';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'RAIOT' },
    {
      name: 'description',
      content:
        'RAIOT is an educational organization based in vorarlberg, austria. RAIOT aims to teach students about Robotics and IoT in an open-source and friendly manner, while competing in competitions across austria.',
    },
    {
      name: 'keywords',
      content: 'RAIOT, Robotics, IoT, Vorarlberg, Austria',
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const locale = request.url.split('/')[3] as Locales;

  if (supportedLngs.includes(locale)) return { locale };
  else return redirect(`/${fallbackLng}/error?code=${HttpStatusCode.NotFound}`);
};

/*
 ? This route resolves to http://localhost:3000/$lang
 ? instead of http://localhost:3000/$lang/hive
 */
const Hive = () => {
  return (
    <>
      <BlurryBlob>
        <Header />
        <main role="main" className="snap-y snap-mandatory">
          <WhoAmI />
          <Endeavours />
          <Timeline />
          <Reputation />
          <Contact />
        </main>
      </BlurryBlob>
    </>
  );
};

export default Hive;
