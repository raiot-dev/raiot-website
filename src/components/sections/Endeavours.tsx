import { useTranslation } from 'react-i18next';
import { SectionHeadline } from '~/components/elements/';

export const Endeavours = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <section className="relative h-[90vh] w-full snap-always bg-white">
        <SectionHeadline
          pageTitel={t('page_endeavours')}
          pageContent="What we persue & our efforts"
          textColor="text-dark"
        />
        <div></div>
      </section>
      <img src="/assets/wave_transition.svg" />
    </>
  );
};
