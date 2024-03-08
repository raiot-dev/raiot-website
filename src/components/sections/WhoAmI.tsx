import { storyblokEditable } from '@storyblok/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeadline } from '~/components/elements/';
import { VisibilityState, useIsVisible } from '~/hooks/useIsVisible';

const visibilityState: VisibilityState = {
  invisible: 'translate-y-2/3 opacity-0 blur-sm',
  visible: 'translate-y-0 opacity-100 blur-none',
};

export const WhoAmI = ({ blok }: any) => {
  const ref = useRef(null);
  const { t } = useTranslation('common');
  const { checkVisibility } = useIsVisible();

  const isVisible = checkVisibility(ref, { persistent: true });

  return (
    <>
      <section
        {...storyblokEditable(blok)}
        key={blok._uid}
        id="whoami"
        className="relative flex h-screen w-full  flex-col items-center justify-between border-b-[1px] border-secondary bg-transparent">
        <SectionHeadline pageTitel={blok.title} pageContent={blok.subheading} className="pt-16" />
        <div
          ref={ref}
          className={`${visibilityState[isVisible]} flex w-11/12 flex-col items-center transition-all duration-1000 lg:w-10/12 lg:flex-row lg:items-start lg:justify-evenly`}>
          <div className="lg:w-1/3">
            <h3 className="pb-4 text-center font-bebasNeue text-3xl text-white lg:text-left lg:text-5xl">
              {blok.catchphrase}
            </h3>
            <p className="text-last-center lg:text-last-left text-justify font-kumbhSans text-lg leading-loose text-white lg:text-left lg:text-xl">
              {blok.text}
            </p>
          </div>
          <img src={blok.image.filename} className="hidden aspect-square w-1/3 lg:block" />
        </div>
        <p className="pb-4 text-center font-kumbhSans text-lg text-white">{blok.thank_you}</p>
      </section>
    </>
  );
};
