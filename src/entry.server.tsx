import { I18nextProvider, initReactI18next } from 'react-i18next';
import { renderToPipeableStream } from 'react-dom/server';
import { EntryContext } from '@remix-run/server-runtime';
import { RemixServer } from '@remix-run/react';

import Backend from 'i18next-fs-backend';
import { createInstance } from 'i18next';
import { PassThrough } from 'stream';
import { resolve } from 'path';
import isbot from 'isbot';

import { i18next } from './services';
import { fallbackLng, i18nConfig, supportedLngs } from './config/locales/i18n';
import { Locales } from './models/settings';

const ABORT_DELAY: number = 5_000;

const handleRequest = async (request: Request, status: number, headers: Headers, context: EntryContext) => {
  const requestLocale = request.url.split(/\/|\?/g).splice(3)[0] as Locales;
  const lang = await i18next.getLocale(request);
  const locale = supportedLngs.includes(requestLocale) ? requestLocale : lang || fallbackLng;
  const ns = i18next.getRouteNamespaces(context);
  const localizationInstance = createInstance();

  await localizationInstance
    .use(initReactI18next)
    .use(Backend)
    .init({ ...i18nConfig, ns, lng: locale, backend: { loadPath: resolve(`./public/locales/{{lng}}/{{ns}}.json`) } });

  return new Promise((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      <I18nextProvider i18n={localizationInstance}>
        <RemixServer context={context as any} url={request.url} />
      </I18nextProvider>,
      {
        [isbot(headers.get('User-Agent')) ? 'onAllReady' : 'onShellReady']: () => {
          const body: any = new PassThrough({ encoding: 'utf-8' });
          headers.set('Content-Type', 'text/html');
          headers.set('Content-Language', locale);

          resolve(new Response(body, { headers, status }));
          pipe(body);
        },
        onShellError: (error: unknown) => reject(error),
        onError: (error: unknown) => process.stderr.write(String(error)),
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
};

export default handleRequest;
