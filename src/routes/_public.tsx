import { LoaderFunction } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import { i18next } from '~/services';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Menu } from '~/components/elements';
import { Footer } from '~/components/sections';
import { supportedLngs } from '~/config/locales/i18n';
import { Locales } from '~/models/settings';

export const loader: LoaderFunction = async ({ request }) => {
  const requestLocale = request.url.split('/')[3] as Locales;
  const locale = supportedLngs.includes(requestLocale) ? requestLocale : await i18next.getLocale(request);

  return { locale };
};

const Template = () => {
  const { t } = useTranslation('common');
  const { locale } = useLoaderData();
  const [allowScroll, setAllowScroll] = useState(true);

  const menuItems = [
    { link: `/${locale}`, name: t('page_homepage') },
    { link: `/${locale}/goals`, name: t('page_endeavours') },
    { link: `/${locale}/timeline`, name: t('page_timeline') },
    { link: `/${locale}/research`, name: t('page_research') },
  ];

  return (
    <div
      className={`relative min-h-full w-full overflow-hidden bg-dark ${
        !allowScroll && 'max-h-screen overflow-y-hidden'
      }`}>
      <Menu menuItems={menuItems} onClick={() => setAllowScroll(!allowScroll)} />
      <div className="relative flex h-min items-center justify-center">
        <Outlet />
      </div>
      <Footer locale={locale} />
    </div>
  );
};

export default Template;
