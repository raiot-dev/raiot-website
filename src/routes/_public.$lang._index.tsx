import { V2_MetaFunction, LoaderFunction, redirect } from '@remix-run/node';

import { BlurryBlob } from '~/components/elements';

import { Locales } from '~/models/settings';
import { HttpStatusCode } from '~/models/http/statusCodes';

import { fallbackLng, supportedLngs } from '~/config/locales/i18n';
import { Contact, Footer, Header, Reputation, WhoAmI } from '~/components/sections';
import { Endeavours, Timeline } from '~/components/sections/';
import { Link } from '@remix-run/react';

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
    <div className="relative h-full w-full">
      <Header />
      <main role="main" className="snap-y snap-mandatory">
        <WhoAmI />
        <Endeavours />
        <img src="/assets/wave_transition.svg" />
        <div>
          <Timeline limit={2} />
          <Link
            to="./timeline"
            className="ml-10 flex w-80 cursor-pointer flex-row items-center justify-evenly rounded-md bg-primary p-4 font-kumbhSans text-2xl font-semibold text-white shadow-sm shadow-primary lg:ml-20">
            <img src="/assets/book.svg" className="aspect-square w-8" />
            <span>Continue Reading</span>
          </Link>
        </div>
        <Reputation />
        <Contact />
      </main>
    </div>
  );
};

export default Hive;
