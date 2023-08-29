import { useTranslation } from 'react-i18next';
import { SectionHeadline } from '~/components/elements/';

export const Endeavours = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <section id="endeavours" className="relative h-[90vh] w-full snap-always bg-white">
        <SectionHeadline
          pageTitel={t('page_endeavours')}
          pageContent={t('page_endeavours-subheading')}
          textColor="text-dark"
        />
        <div></div>
      </section>
      <img src="/assets/wave_transition.svg" />
    </>
  );
};
