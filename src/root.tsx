import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { json, V2_MetaFunction, LoaderFunction, LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';

import { fallbackLng, supportedLngs } from '~/config/locales/i18n';
import { SettingsContext } from '~/context/settings/';
import { Locales, Themes } from '~/models/settings';
import { i18next, getUUID } from '~/services';

import stylesheet from '../build/styles/tailwind.css';

export const meta: V2_MetaFunction = () => [{ title: 'schmaenjael.dev' }, { charSet: 'utf-8' }];

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

export const loader: LoaderFunction = async ({ request }) => {
  const lang = (await i18next.getLocale(request)) as Locales;
  const requestLocale = request.url.split(/\/|\?/g).splice(3)[0] as Locales;
  const locale = supportedLngs.includes(requestLocale) ? requestLocale : lang || fallbackLng;
  const nonce = `nonce-${getUUID()}`;

  return json({ locale, nonce });
};

export const handle = {
  i18n: 'common',
};

const Root = () => {
  const [theme, setTheme] = useState<Themes>(Themes.Dark);
  const { locale, nonce } = useLoaderData<{ locale: Locales; nonce: string }>();
  const { i18n } = useTranslation();

  return (
    <html lang={locale} dir={i18n.dir(locale)}>
      <head>
        <Meta />
        <meta
          httpEquiv="Content-Security-Policy"
          content={`script-src 'nonce-${nonce}' 'unsafe-inline' https: http: 'nonce-${nonce}' 'strict-dynamic'; base-uri 'self'; object-src 'none';`}
        />
        <Links />
      </head>
      <body>
        <SettingsContext.Provider
          value={{
            locale,
            theme,
            setTheme,
          }}
        >
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
