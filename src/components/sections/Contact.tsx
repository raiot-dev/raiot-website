import { ActionFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { SectionHeadline } from '~/components/elements/';

export const contactAction: ActionFunction = async () => {
  return {};
};

export const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <section id="contact" className="relative h-screen w-full snap-always bg-transparent">
      <SectionHeadline className="h-1/5" pageTitel={t('page_contact')} pageContent={t('page_contact-subheading')} />
      <div className="flex h-4/5 flex-row items-center justify-center gap-x-10">
        <img src="/assets/binary.png" className="absolute aspect-square w-5/6 opacity-25 md:relative md:w-1/3" />
        <Form method="POST" action="/" className="relative flex w-5/6 flex-col gap-10 md:w-1/3">
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
