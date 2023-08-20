import { useTranslation } from 'react-i18next';
import { Link } from '@remix-run/react';

import { Typewriter, Nightsky, Marquee } from '~/components/elements';

import { NightskyConfig } from '~/config/visuals/visuals';

export const Header = () => {
  const { t } = useTranslation('common');

  return (
    <>
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
      <Marquee />
    </>
  );
};
