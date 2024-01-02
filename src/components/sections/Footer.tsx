import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { Locales } from '~/models/settings';

// TODO:
const images = [
  { image: '/assets/logos/ALPLA.png', link: '/' },
  { image: '/assets/logos/bachmann.png', link: '/' },
  { image: '/assets/logos/Blum.png', link: '/' },
  { image: '/assets/logos/Getzner_Textil.png', link: '/' },
  { image: '/assets/logos/HTL.png', link: '/' },
  { image: '/assets/logos/Zumtobel.png', link: '/' },
  { image: '/assets/logos/Weiss.png', link: '/' },
];

export const Footer = ({ locale }: { locale: Locales }) => {
  const { t } = useTranslation();

  return (
    <footer
      id="footer"
      className="relative grid h-screen w-full grid-cols-4 grid-rows-2 overflow-hidden bg-secondary bg-opacity-25 p-3 font-kumbhSans md:h-[66vh] md:px-10">
      <div className="col-span-2 row-span-2 hidden h-full grid-cols-2 pt-5 md:grid">
        {images.map(({ image, link }, i) => (
          <Link key={`image-index-${i}`} to={link} target="_blank" className={`w-1/2 object-contain px-4`}>
            <img src={image} className="scale-[2.5] lg:scale-100" />
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
      <p className="col-span-5 mx-auto flex w-11/12 items-center justify-center border-t-[1px] border-white py-2 text-center text-sm text-white">
        Copyright © 2023 RAIOT. All rights reserved. &nbsp;|&nbsp;
        <Link to={`/${locale}/privacy`}>Privacy Policy</Link>
        &nbsp;|&nbsp;<Link to={`/${locale}/contact`}>Contact</Link>
      </p>
    </footer>
  );
};
