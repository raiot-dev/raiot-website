import { LoaderFunction, redirect } from '@remix-run/node';
import { useTranslation } from 'react-i18next';
import { fallbackLng, supportedLngs } from 'src/config/locales/i18n';
import { Locales } from 'src/models/settings';
import { HttpStatusCode } from '~/models/http/statusCodes';

export const loader: LoaderFunction = async ({ request }) => {
  const locale = request.url.split('/')[3] as Locales;
  const statusCode = HttpStatusCode.NotFound;

  if (supportedLngs.includes(locale)) return { locale };
  else return redirect(`/${fallbackLng}/error?code=${statusCode}`);
};

/*
 ? This route resolves to http://localhost:3000/$lang
 ? instead of http://localhost:3000/$lang/welcome
 */
const Welcome = () => {
  const { t } = useTranslation('common');

  return <div>{t('welcome:hello')}</div>;
};

export default Welcome;
