import { V2_MetaFunction, LoaderFunction, redirect } from '@remix-run/node';
import { useTranslation } from 'react-i18next';

import { BlurryBlob, Menu, Typewriter } from '~/components/';

import { Locales } from '~/models/settings';
import { HttpStatusCode } from '~/models/http/statusCodes';
import { fallbackLng, supportedLngs } from '~/config/locales/i18n';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Automata Hive' },
    {
      name: 'description',
      content:
        'Automata Hive is an educational organization based in vorarlberg, austria. Automata Hive aims to teach students about Robotics and IoT in an open-source and friendly manner, while competing in competitions across austria.',
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const locale = request.url.split('/')[3] as Locales;
  const statusCode = HttpStatusCode.NotFound;

  if (supportedLngs.includes(locale)) return { locale };
  else return redirect(`/${fallbackLng}/error?code=${statusCode}`);
};

export const handle = {
  i18n: 'common',
};

/*
 ? This route resolves to http://localhost:3000/$lang
 ? instead of http://localhost:3000/$lang/hive
 */
const Hive = () => {
  const { t } = useTranslation('common');

  return (
    <main className="relative h-screen w-full snap-mandatory overflow-x-hidden overflow-y-scroll bg-dark ">
      <Menu
        menuItems={[
          { link: '/#', name: t('page_homepage') },
          { link: '/goals', name: t('page_goals') },
          { link: '/timeline', name: t('page_timeline') },
          { link: '/research', name: t('page_research') },
        ]}
      />
      <BlurryBlob>
        <section
          about="Automata Hive Landing Page"
          className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
          <div className="relative flex h-[48rem] w-[48rem] flex-col items-center justify-center">
            <img
              alt="Automatahive Logo"
              className="pointer-events-none absolute z-[4] aspect-square h-full"
              src="/assets/Binary_001.png"
            />
            <h1 className="absolute top-[50%] z-[5] w-2/3 flex-wrap text-center font-bebasNeue text-[10rem] leading-[0.8] text-white">
              {t('brandname')}
            </h1>
          </div>
          <h2 className="font-poppins text-3xl text-secondary">
            <Typewriter content={[t('contact-us-1'), t('contact-us-2'), t('contact-us-3')]} repeat typeSpeed={100} />
          </h2>
        </section>
      </BlurryBlob>
    </main>
  );
};

export default Hive;
