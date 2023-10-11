import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { BlurryBlob, Nightsky, Typewriter } from '~/components/elements';

import { NightskyConfig } from '~/config/visuals/visuals';
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

const Error = () => {
  const { t } = useTranslation('common');
  const { statusCode } = useLoaderData<{ statusCode: HttpStatusCode }>();

  return (
    <>
      <BlurryBlob>
        <main role="main" className="flex h-screen w-screen snap-y snap-mandatory items-center justify-center">
          <Nightsky {...NightskyConfig} />
          <div className="w-full">
            <h1 className="text-stroke-8xl md:text-stroke-12xl lg:text-stroke-24xl w-full text-center font-kumbhSans text-8xl font-bold uppercase text-transparent text-stroke-color-[white] md:text-12xl lg:text-24xl">
              {statusCode}
            </h1>
            <h2 className="w-full text-center font-kumbhSans text-white">
              <Typewriter
                content={[t(`error:code_${HttpStatusCode[statusCode]}`)]}
                typeSpeed={100}
                className="py-5 text-center font-kumbhSans text-2xl text-slate-700 lg:text-3xl"
              />
            </h2>
          </div>
        </main>
      </BlurryBlob>
    </>
  );
};

export default Error;
