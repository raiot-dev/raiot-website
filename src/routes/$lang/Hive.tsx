import { LoaderFunction, redirect } from '@remix-run/node';
import { useTranslation } from 'react-i18next';
import { fallbackLng, supportedLngs } from 'src/config/locales/i18n';
import { Locales } from 'src/models/settings';
import BlurryBlob from '~/components/BlurryBlob';
import Menu from '~/components/Menu';
import Typewriter from '~/components/Typewriter';
import { HttpStatusCode } from '~/models/http/statusCodes';

export const loader: LoaderFunction = async ({ request }) => {
  const locale = request.url.split('/')[3] as Locales;
  const statusCode = HttpStatusCode.NotFound;

  if (supportedLngs.includes(locale)) return { locale };
  else return redirect(`/${fallbackLng}/error?code=${statusCode}`);
};

export const handle = {
  i18n: 'common',
};

/*
 ? This route resolves to http://localhost:3000/$lang
 ? instead of http://localhost:3000/$lang/hive
 */
const Hive = () => {
  const { t } = useTranslation('common');

  return (
    <div className="relative w-full h-full bg-dark overflow-hidden">
      <Menu
        menuItems={[
          { link: '/#', name: t('page_homepage') },
          { link: '/goals', name: t('page_goals') },
          { link: '/timeline', name: t('page_timeline') },
          { link: '/research', name: t('page_research') },
        ]}
      />
      <BlurryBlob>
        <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
          <div className="relative flex flex-col justify-center items-center w-[48rem] h-[48rem]">
            <img className="absolute z-[4] w-full h-full pointer-events-none" src="/assets/Binary_001.png" />
            <h1 className="absolute z-[5] top-[50%] w-2/3 text-center font-bebasNeue text-white text-[10rem] flex-wrap leading-[0.8]">
              {t('brandname')}
            </h1>
          </div>
          <h2 className="font-poppins text-secondary text-3xl">
            <Typewriter content={[t('contact-us-1'), t('contact-us-2'), t('contact-us-3')]} repeat typeSpeed={100} />
          </h2>
        </div>
      </BlurryBlob>
    </div>
  );
};

export default Hive;
