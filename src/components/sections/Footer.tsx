import { Link } from '@remix-run/react';
import { storyblokEditable } from '@storyblok/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = ({ blok }: any) => {
  const { t } = useTranslation();
  const [link, setLink] = useState<string>('en');

  useEffect(() => setLink(window.location.pathname), [link]);

  return (
    <footer
      id="footer"
      {...storyblokEditable(blok)}
      key={blok?._uid}
      className="relative grid h-screen w-full grid-cols-4 grid-rows-2 overflow-hidden bg-secondary bg-opacity-25 p-3 font-kumbhSans md:h-[66vh] md:px-10">
      <div className="col-span-2 row-span-2 hidden h-full grid-cols-2 pt-5 md:grid">
        {blok.sponsors.map(({ name, logo, link }: any, i: number) => (
          <Link title={name} key={`image-index-${i}`} to={link} target="_blank" className={`w-1/2 object-contain px-4`}>
            <img
              loading="lazy"
              src={`${logo.filename}/m/`}
              alt={name}
              title={name}
              className="scale-[2.5] lg:scale-100"
            />
          </Link>
        ))}
      </div>
      <div className="col-span-2 row-span-2 flex w-full flex-col items-start text-lg text-white md:col-span-1">
        <span className="p-3 text-2xl font-bold">{t('footer_agenda')}</span>
        {blok.agenda.map(({ name, link }: any, i: number) => (
          <Link
            key={name}
            to={link.url || link.cached_url}
            target="_blank"
            type="relative"
            title={name}
            className="p-3">
            {name}
          </Link>
        ))}
      </div>
      <div className="col-span-2 flex w-full flex-col items-start text-lg text-white md:col-span-1">
        <span className="p-3 text-2xl font-bold">{t('footer_contact')}</span>
        <span className="p-3">{blok.address}</span>
        <a href={`mailto:${blok.email}`} title={'Email contact'} className="p-3">
          {blok.email}
        </a>
        <a href={`tel:${blok.phone}`} title={'Contact Phone number'} className="p-3">
          {blok.phone}
        </a>
      </div>
      <p className="col-span-5 mx-auto flex w-11/12 items-center justify-center border-t-[1px] border-white py-2 text-center text-sm text-white">
        Copyright © 2024 RAIOT. All rights reserved. &nbsp;|&nbsp;
        <Link type="relative" to={`${link}/privacy`}>
          Privacy Policy
        </Link>
        &nbsp;|&nbsp;
        <Link type="relative" to={`${link}/contact`}>
          Contact
        </Link>
      </p>
    </footer>
  );
};
