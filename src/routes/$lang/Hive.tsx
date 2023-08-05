import { V2_MetaFunction, LoaderFunction, redirect } from '@remix-run/node';
import { useTranslation } from 'react-i18next';
import { Link } from '@remix-run/react';
import { useState } from 'react';

import { BlurryBlob, Menu, Typewriter, Nightsky, Marquee } from '~/components/elements';

import { Locales } from '~/models/settings';
import { HttpStatusCode } from '~/models/http/statusCodes';

import { fallbackLng, supportedLngs } from '~/config/locales/i18n';
import { NightskyConfig } from '~/config/visuals/visuals';

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

export const handle = { i18n: 'common' };

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
  const [allowScroll, setAllowScroll] = useState(true);

  return (
    <div className={`relative w-full overflow-x-hidden bg-dark ${!allowScroll && 'max-h-screen overflow-y-hidden'}`}>
      <BlurryBlob>
        <Menu
          menuItems={[
            { link: '/#', name: t('page_homepage') },
            { link: '/goals', name: t('page_goals') },
            { link: '/timeline', name: t('page_timeline') },
            { link: '/research', name: t('page_research') },
          ]}
          onClick={() => setAllowScroll(!allowScroll)}
        />
        <header className="relative h-screen w-full">
          <Nightsky {...NightskyConfig} />
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h1 className="text-stroke-8xl md:text-stroke-12xl lg:text-stroke-24xl font-kumbhSans text-8xl font-bold uppercase text-transparent text-stroke-color-[white] md:text-12xl lg:text-24xl">
              {t('brandname')}
            </h1>
            <Typewriter
              content={[t('contact-us-1'), t('contact-us-2'), t('contact-us-3')]}
              typeSpeed={75}
              repeat
              className="py-5 font-kumbhSans text-2xl text-slate-700 lg:text-3xl"
            />
            <div className="flex cursor-pointer flex-row items-center justify-center">
              <Link to="https://google.com/" target="_blank">
                <img
                  className="aspect-square h-full px-3 transition-all hover:brightness-75"
                  src={'/assets/linkedin_logo.svg'}
                />
              </Link>
              <Link to="https://github.com/raiot-dev" target="_blank">
                <img
                  className="aspect-square h-full px-3 transition-all hover:brightness-75"
                  src={'/assets/github_logo.svg'}
                />
              </Link>
              <Link to="https://google.com/" target="_blank">
                <img
                  className="aspect-square h-full px-3 transition-all hover:brightness-75"
                  src={'/assets/discord_logo.svg'}
                />
              </Link>
            </div>
          </div>
        </header>
        <main role="main">
          <section className="h-60 w-full">
            <Marquee />
          </section>
          <section className="relative h-[90vh] w-full bg-white">
            <h2 className="text-stroke-4xl py-8 text-center font-kumbhSans text-5xl font-bold uppercase text-transparent text-stroke-color-secondary lg:absolute lg:right-16 lg:top-0 lg:top-16 lg:text-9xl">
              {t('page_endeavours')}
            </h2>
          </section>
          <img src="/assets/wave_transition.svg"></img>
        </main>
        <footer></footer>
      </BlurryBlob>
    </div>
  );
};

export default Hive;
