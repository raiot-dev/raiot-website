import { V2_MetaFunction, LoaderFunction, redirect } from '@remix-run/node';
import { useTranslation } from 'react-i18next';

import { BlurryBlob, Menu, Typewriter } from '~/components/elements';

import { Locales } from '~/models/settings';
import { HttpStatusCode } from '~/models/http/statusCodes';
import { fallbackLng, supportedLngs } from '~/config/locales/i18n';
import Nightsky from '~/components/elements/Nightsky';
import { useState } from 'react';

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

export const handle = {
  i18n: 'common',
};

export const loader: LoaderFunction = async ({ request }) => {
  const locale = request.url.split('/')[3] as Locales;
  const statusCode = HttpStatusCode.NotFound;

  if (supportedLngs.includes(locale)) return { locale };
  else return redirect(`/${fallbackLng}/error?code=${statusCode}`);
};

/*
 ? This route resolves to http://localhost:3000/$lang
 ? instead of http://localhost:3000/$lang/hive
 */
const Hive = () => {
  const { t } = useTranslation('common');

  return (
    <div className="relative h-screen w-full overflow-x-hidden overflow-y-scroll bg-dark">
      <Menu
        menuItems={[
          { link: '/#', name: t('page_homepage') },
          { link: '/goals', name: t('page_goals') },
          { link: '/timeline', name: t('page_timeline') },
          { link: '/research', name: t('page_research') },
        ]}
      />
      <header className="relative h-screen w-full">
        <Nightsky
          color="#ffffff"
          minRadius={0.75}
          maxRadius={2}
          minOpacity={50}
          maxOpacity={100}
          minSpeed={0.005}
          maxSpeed={0.125}
          starCount={250}
        />
        <BlurryBlob>
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h1
              className="font-kumbhSans text-12xl font-bold uppercase text-transparent lg:text-24xl"
              style={{
                WebkitTextStroke: '0.75rem #fff',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontSynthesis: 'none',
                textRendering: 'optimizeLegibility',
              }}>
              {t('brandname')}
            </h1>
            <Typewriter
              content={[t('contact-us-1'), t('contact-us-2'), t('contact-us-3')]}
              typeSpeed={100}
              repeat
              className="text-3xl text-slate-700"
            />
          </div>
        </BlurryBlob>
      </header>
      <main role="main"></main>
      <footer></footer>
    </div>
  );
};

export default Hive;
