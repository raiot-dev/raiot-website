import { Link } from '@remix-run/react';
import { storyblokEditable } from '@storyblok/react';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = ({ blok }: any) => {
  const { t } = useTranslation();
  const ref = useRef<string>();

  useEffect(() => {
    const lang = window.location.pathname;

    console.log(lang);
  }, []);

  return (
    <footer
      id="footer"
      {...storyblokEditable(blok)}
      key={blok?._uid}
      className="relative grid h-screen w-full grid-cols-4 grid-rows-2 overflow-hidden bg-secondary bg-opacity-25 p-3 font-kumbhSans md:h-[66vh] md:px-10">
      <div className="col-span-2 row-span-2 hidden h-full grid-cols-2 pt-5 md:grid">
        {blok.sponsors.map(({ name, logo, link }: any, i: number) => (
          <Link key={`image-index-${i}`} to={link} target="_blank" className={`w-1/2 object-contain px-4`}>
            <img src={logo.filename} title={name} className="scale-[2.5] lg:scale-100" />
          </Link>
        ))}
      </div>
      <div className="col-span-2 row-span-2 flex w-full flex-col items-start text-lg text-white md:col-span-1">
        <span className="p-3 text-2xl font-bold">{t('footer_agenda')}</span>
        <Link to="/robot-development" className="p-3">
          {t('footer_robot-development')}
        </Link>
        <Link to="/competitions" className="p-3">
          {t('footer_competitions')}
        </Link>
        <Link to="/research" className="p-3">
          {t('footer_research-publications')}
        </Link>
        <Link to="/timeline" className="p-3">
          {t('footer_journey-progress')}
        </Link>
        <Link to="/education" className="p-3">
          {t('footer_education-mission')}
        </Link>
        <Link to="/workshops" className="p-3">
          {t('footer_workshops')}
        </Link>
      </div>
      <div className="col-span-2 flex w-full flex-col items-start text-lg text-white md:col-span-1">
        <span className="p-3 text-2xl font-bold">{t('footer_contact')}</span>
        <span className="p-3">{t('address')}</span>
        <a href="mailto:[TODO:]" className="p-3">
          {t('email')}
        </a>
        <a href="tel:[TODO:]" className="p-3">
          {t('phone')}
        </a>
      </div>
      {/* TODO: fix redirect */}
      <p className="col-span-5 mx-auto flex w-11/12 items-center justify-center border-t-[1px] border-white py-2 text-center text-sm text-white">
        Copyright © 2024 RAIOT. All rights reserved. &nbsp;|&nbsp;
        <Link to={`privacy`}>Privacy Policy</Link>
        &nbsp;|&nbsp;<Link to={`contact`}>Contact</Link>
      </p>
    </footer>
  );
};
