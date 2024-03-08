import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLoaderData } from '@remix-run/react';
import { LinksFunction, LoaderFunction, V2_MetaFunction, json, redirect } from '@remix-run/node';
import { getStoryblokApi, useStoryblokState, StoryblokComponent } from '@storyblok/react';

import { i18next } from '~/services';
import { Locales } from '~/models/settings';
import { supportedLngs } from '~/config/locales/i18n';
import { HttpStatusCode } from '~/models/http/statusCodes';

import { Footer } from '~/components/sections/Footer';
import { BlurryBlob, Menu } from '~/components/elements';

export const loader: LoaderFunction = async ({ request, params }) => {
  const requestLocale = (params['*']?.split('/')[0] as Locales) || null;
  const locale = supportedLngs.includes(requestLocale) ? requestLocale : await i18next.getLocale(request);

  if (requestLocale === null) return redirect(`${await i18next.getLocale(request)}/`);
  if (!supportedLngs.includes(requestLocale)) return redirect(`/${locale}/error?code=${HttpStatusCode.NotFound}`);

  const { data } = await getStoryblokApi().get(`cdn/stories/${params['*']}`, { version: 'draft', cv: Date.now() });

  return json({ data: data?.story, locale });
};

export const links: LinksFunction = () => {
  return [{ rel: 'icon', href: '/assets/favicon.ico' }];
};

export const meta: V2_MetaFunction = ({ data }) => {
  const { title, description, keywords } = data.data.content;
  return [{ title: title }, { name: 'description', content: description }, { name: 'keywords', content: keywords }];
};

const Template = () => {
  const { t } = useTranslation('common');
  const { data, locale } = useLoaderData();
  const story = useStoryblokState(data);

  const [allowScroll, setAllowScroll] = useState(true);

  const menuItems = [
    { link: `/${locale}`, name: t('page_homepage') },
    { link: `/${locale}/endeavours`, name: t('page_endeavours') },
    { link: `/${locale}/timeline`, name: t('page_timeline') },
    { link: `/${locale}/research`, name: t('page_research') },
  ];

  return (
    <div
      className={`relative min-h-full w-full overflow-hidden bg-dark ${
        !allowScroll && 'max-h-screen overflow-y-hidden'
      }`}>
      <BlurryBlob />
      <Menu menuItems={menuItems} onClick={() => setAllowScroll(!allowScroll)} />
      <div className="relative flex items-center justify-center">
        <StoryblokComponent blok={story?.content} key={story?.name} />
      </div>
    </div>
  );
};

export default Template;
