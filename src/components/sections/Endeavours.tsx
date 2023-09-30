import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeadline } from '~/components/elements/';
import { VisibilityState, useIsVisible } from '~/hooks/useIsVisible';

type ActivityState = 0 | 1 | 2 | null;

const visibilityState: VisibilityState = {
  invisible: '-translate-x-1/2 opacity-0 blur-sm',
  visible: 'translate-x-0 opacity-100 blur-none',
};

const endeavours = ['workshops', 'research', 'development'];

export const Endeavours = () => {
  const animationRef = useRef(null);
  const { t } = useTranslation('common');
  const [active, setActive] = useState<ActivityState>(null);

  const { checkVisibility } = useIsVisible();
  const isVisible = checkVisibility(animationRef, { persistent: true });

  const getStateStyles = (index: number, state: ActivityState) => {
    if (state === null) return 'opacity-100';
    if (state === index) return 'opacity-100 left-[7.7%] z-10';
    else return 'opacity-0 pointer-events-none left-[7.7%]';
  };

  return (
    <>
      <section id="endeavours" className="relative h-[90vh] w-full snap-always bg-white">
        <SectionHeadline
          pageTitel={t('page_endeavours')}
          pageContent={t('page_endeavours-subheading')}
          textColor="text-dark"
        />
        <div ref={animationRef} className="relative flex h-4/5 w-full flex-row items-center justify-center">
          <div
            onClick={() => setActive((prev) => (prev === null ? 0 : null))}
            className={`${
              visibilityState[isVisible]
            } parallelogram absolute left-[7.7%] h-3/5 w-1/3 cursor-pointer bg-[url("/assets/example-image-(2).jpg")] bg-cover transition-all duration-1000 ${getStateStyles(
              0,
              active
            )}`}>
            <h4 className="absolute bottom-1 right-1/4 z-10 bg-black p-1 font-bebasNeue text-2xl text-white">
              <span className="text-primary">#</span>
              {t(endeavours[0])}
            </h4>
          </div>
          <div
            onClick={() => setActive((prev) => (prev === null ? 1 : null))}
            className={`${
              visibilityState[isVisible]
            } parallelogram absolute left-1/3 h-3/5 w-1/3 cursor-pointer bg-[url("/assets/example-image-(3).jpg")] bg-cover transition-all duration-1000 ${getStateStyles(
              1,
              active
            )}`}>
            <h4 className="absolute bottom-1 right-1/4 z-10 bg-black p-1 font-bebasNeue text-2xl text-white">
              <span className="text-primary">#</span>
              {t(endeavours[1])}
            </h4>
          </div>
          <div
            onClick={() => setActive((prev) => (prev === null ? 2 : null))}
            className={`${
              visibilityState[isVisible]
            } parallelogram absolute left-[59%] h-3/5 w-1/3 cursor-pointer bg-[url("/assets/example-image-(4).jpg")] bg-cover transition-all duration-1000 ${getStateStyles(
              2,
              active
            )}`}>
            <h4 className="absolute bottom-1 right-1/4 z-10 bg-black p-1 font-bebasNeue text-2xl text-white">
              <span className="text-primary">#</span>
              {t(endeavours[2])}
            </h4>
          </div>
          <p
            className={`absolute right-1/4 w-1/3 font-kumbhSans transition-opacity delay-500 ${
              active !== null ? 'opacity-100' : 'opacity-0'
            }`}>
            {active !== null && t(`${endeavours[active]}-extensive`)}
          </p>
        </div>
      </section>
      <img src="/assets/wave_transition.svg" />
    </>
  );
};
