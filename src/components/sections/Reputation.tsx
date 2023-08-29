import { useTranslation } from 'react-i18next';
import { SectionHeadline } from '~/components/elements/';

export const Reputation = () => {
  const { t } = useTranslation('common');

  return (
    <section id="reputation" className="relative h-screen w-full snap-always bg-transparent">
      <SectionHeadline pageTitel={t('page_reputation')} pageContent={t('page_reputation-subheading')} />
      <div></div>
    </section>
  );
};
