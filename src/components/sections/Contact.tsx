import { ActionFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { SectionHeadline } from '~/components/elements/';

import { storyblokEditable } from '@storyblok/react';

export const contactAction: ActionFunction = async () => {
  return {};
};

export const Contact = ({ blok }: any) => {
  const { t } = useTranslation('common');

  return (
    <section
      {...storyblokEditable(blok)}
      key={blok._uid}
      id="contact"
      className="relative h-screen w-full  bg-transparent">
      <SectionHeadline pageTitel={blok?.title} pageContent={blok?.subheading} />
      <div className="flex h-4/5 flex-row items-center justify-center gap-x-10">
        <img
          src={blok?.background_image.filename}
          className="absolute aspect-square w-5/6 opacity-25 lg:relative lg:w-1/3"
        />
        <Form method="POST" action="/" className="relative flex w-5/6 flex-col gap-10 lg:w-1/3">
          <input
            placeholder={t(`contact_placeholder_name`)}
            type="text"
            className="h-10 w-full rounded-md p-2 font-kumbhSans text-secondary"
            name="name"
          />
          <input
            placeholder={t(`contact_placeholder_email`)}
            type="email"
            className="h-10 w-full rounded-md p-2 font-kumbhSans text-secondary"
            name="email"
          />
          <textarea
            placeholder={t(`contact_placeholder_message`)}
            className="h-auto min-h-[10rem] w-full rounded-md p-2 font-kumbhSans text-secondary"
            name="message"
          />
          <input
            type="submit"
            className="flex w-80 cursor-pointer flex-row items-center justify-evenly rounded-md bg-primary p-4 font-kumbhSans text-2xl font-semibold text-white shadow-sm shadow-primary"
          />
        </Form>
      </div>
    </section>
  );
};
