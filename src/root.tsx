import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import { json, V2_MetaFunction, LoaderFunction, LinksFunction } from '@remix-run/node';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { fallbackLng, supportedLngs } from '~/config/locales/i18n';
import { NightskyConfig } from './config/visuals/visuals';
import { i18next, getUUID } from '~/services';
import { Locales } from '~/models/settings';

import { templates } from './components/templates';
import { sections } from './components/sections';
import { BlurryBlob, Menu, Nightsky, Typewriter, elements } from './components/elements';

import stylesheet from '~/styles/tailwind.css';

export const meta: V2_MetaFunction = () => [{ charSet: 'utf-8' }];
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

storyblokInit({
  accessToken: 'H25dLdJQLfFyrMlQqziNDwtt',
  use: [apiPlugin],
  components: { ...sections, ...templates, ...elements },
});

export const loader: LoaderFunction = async ({ request }) => {
  const lang = (await i18next.getLocale(request)) as Locales;
  const requestLocale = request.url.split(/\/|\?/g).splice(3)[0] as Locales;
  const locale = supportedLngs.includes(requestLocale) ? requestLocale : lang || fallbackLng;
  const nonce = `nonce-${getUUID()}`;

  return json({ locale, nonce });
};

const Root = () => {
  const { locale, nonce } = useLoaderData<{ locale: Locales; nonce: string }>();
  const { i18n } = useTranslation();

  return (
    <html lang={locale} dir={i18n.dir(locale)}>
      <head>
        <Meta />
        <Links />
        <link
          rel="preload"
          href="/fonts/BebasNeue/BebasNeue-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          httpEquiv="Content-Security-Policy"
          content={`script-src 'nonce-${nonce}' 'unsafe-inline' https: http: 'nonce-${nonce}' 'strict-dynamic'; base-uri 'self'; object-src 'none';`}
        />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration nonce={nonce} />
        <LiveReload nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
};

export const ErrorBoundary = () => {
  const [allowScroll, setAllowScroll] = useState(true);
  const { t } = useTranslation();

  const menuItems = [
    { link: `/en`, name: t('page_homepage') },
    { link: `/en/endeavors`, name: t('page_endeavors') },
    { link: `/en/timeline`, name: t('page_timeline') },
    { link: `/en/research`, name: t('page_research') },
  ];

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body className="h-full w-full">
        <div
          className={`relative h-full w-full overflow-hidden bg-dark ${
            !allowScroll && 'max-h-screen overflow-y-hidden'
          }`}>
          <BlurryBlob />
          <Menu menuItems={menuItems} onClick={() => setAllowScroll(!allowScroll)} />
          <div className="relative flex h-full w-full items-center justify-center">
            <Nightsky {...NightskyConfig} />
            <div className="w-full">
              <h1 className="text-stroke-8xl md:text-stroke-12xl lg:text-stroke-24xl w-full text-center font-kumbhSans text-8xl font-bold uppercase text-transparent text-stroke-color-[white] md:text-12xl lg:text-24xl">
                {404}
              </h1>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
};

export default Root;
