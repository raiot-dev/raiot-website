import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import { json, V2_MetaFunction, LoaderFunction, LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';

import { fallbackLng, supportedLngs } from '~/config/locales/i18n';
import { SettingsContext } from '~/context/settings/';
import { Locales, Themes } from '~/models/settings';
import { i18next, getUUID } from '~/services';

import { templates } from './components/templates';
import { sections } from './components/sections';
import { elements } from './components/elements';

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
  const [theme, setTheme] = useState<Themes>(Themes.Dark);
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
        <SettingsContext.Provider value={{ locale, theme, setTheme }}>
          <Outlet />
        </SettingsContext.Provider>
        <ScrollRestoration nonce={nonce} />
        <LiveReload nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
};

export default Root;
