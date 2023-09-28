import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Marquee, SectionHeadline } from '~/components/elements/';
import { VisibilityState, useIsVisible } from '~/hooks/useIsVisible';

const visibilityState: VisibilityState = {
  invisible: 'translate-y-2/3 opacity-0 blur-sm',
  visible: 'translate-y-0 opacity-100 blur-none',
};

export const WhoAmI = () => {
  const ref = useRef(null);
  const { t } = useTranslation('common');
  const { checkVisibility } = useIsVisible();

  const isVisible = checkVisibility(ref);

  return (
    <>
      <section
        id="whoami"
        className="relative flex h-screen w-full snap-always flex-col items-center justify-between border-b-[1px] border-secondary bg-transparent">
        <SectionHeadline pageTitel={t('page_whoami')} pageContent={t('page_whoami-subheading')} className="pt-16" />
        <div
          className={`${visibilityState[isVisible]} flex w-11/12 flex-col items-center transition-all duration-1000 lg:w-10/12 lg:flex-row lg:items-start lg:justify-evenly`}>
          <div className="lg:w-1/3">
            <h3 className="pb-4 text-center font-bebasNeue text-3xl text-white lg:text-left lg:text-5xl">
              {t('who-we-are')}
            </h3>
            <p className="text-last-center lg:text-last-left text-justify font-kumbhSans text-lg leading-loose text-white lg:text-left lg:text-xl">
              {t('who-we-are-extensive')}
            </p>
          </div>
          <img ref={ref} src="/assets/welcome_robot.png" className="hidden aspect-square w-1/3 lg:block" />
        </div>
        <p className="pb-4 text-center font-kumbhSans text-lg text-white">{t('appreciate-supporters')}</p>
      </section>
      <Marquee backgroundColor="bg-dark" />
    </>
  );
};
