import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { HttpStatusCode } from '~/models/http/statusCodes';

export const handle = { i18n: 'error' };

export const loader: LoaderFunction = ({ request }): { statusCode: number } => {
  const queryParameters = new URLSearchParams(request.url.split('?')[1]);
  const queryHttpCode = Number(queryParameters.get('code'));
  const statusCode: HttpStatusCode = Object.values(HttpStatusCode).includes(queryHttpCode)
    ? queryHttpCode
    : HttpStatusCode.NotFound;

  return { statusCode };
};

const CatchAll = () => {
  const { t } = useTranslation('common');
  const { statusCode } = useLoaderData<{ statusCode: HttpStatusCode }>();

  return <div>{t(`error:code_${HttpStatusCode[statusCode]}`)}</div>;
};

export default CatchAll;
