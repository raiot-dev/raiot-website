import { LoaderFunction, redirect } from '@remix-run/node';
import { i18next } from '~/services';

export const loader: LoaderFunction = async ({ request }) => redirect(`${await i18next.getLocale(request)}/`);
