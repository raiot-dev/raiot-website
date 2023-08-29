import { useTranslation } from 'react-i18next';
import { SectionHeadline } from '~/components/elements/';

export const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <section id="contact" className="relative h-screen w-full snap-always bg-transparent">
      <SectionHeadline pageTitel={t('page_contact')} pageContent={t('page_contact-subheading')} />
      <div></div>
    </section>
  );
};
