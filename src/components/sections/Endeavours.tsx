import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

import { SectionHeadline } from '~/components/elements/';
import { VisibilityState, useIsVisible } from '~/hooks/useIsVisible';

export type ActivityState = 0 | 1 | 2 | null;

const visibilityState: VisibilityState = {
  invisible: '-translate-x-1/2 opacity-0 blur-sm',
  visible: 'translate-x-0 opacity-100 blur-none',
};

export const Endeavours = ({ blok }: any) => {
  const { _uid, title, subheading, data, transition } = blok;

  const { t } = useTranslation('common');
  const { checkVisibility } = useIsVisible();

  const animationRef = useRef(null);
  const [active, setActive] = useState<ActivityState>(null);
  const isVisible = checkVisibility(animationRef, { persistent: true });

  const handleClick = (index: ActivityState) => setActive((prev) => (prev === index ? null : index));

  return (
    <>
      <section {...storyblokEditable(blok)} key={_uid} id="endeavours" className="relative h-[90vh] w-full bg-white">
        <SectionHeadline pageTitel={title} pageContent={subheading} textColor="text-dark" />
        <div
          ref={animationRef}
          className={`relative flex h-4/5 w-full flex-row items-center justify-center ${visibilityState[isVisible]}`}>
          {data.map((elementBlok: any, index: ActivityState) => (
            <div
              key={elementBlok._uid}
              className="flex h-full w-full items-center justify-center"
              onClick={() => handleClick(index)}>
              <StoryblokComponent blok={{ ...elementBlok, index, active }} />
            </div>
          ))}
          <p
            className={`absolute right-1/4 w-1/3 text-justify font-kumbhSans text-base transition-opacity delay-500 md:text-start md:text-lg ${
              active !== null ? 'opacity-100' : 'opacity-0'
            }`}>
            {active !== null && t(`${data[active].content}`)}
          </p>
        </div>
      </section>
      {blok?.transition && <img src={transition.filename} />}
    </>
  );
};
