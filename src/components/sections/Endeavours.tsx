import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { storyblokEditable } from '@storyblok/react';
import { SectionHeadline } from '~/components/elements/';
import { VisibilityState, useIsVisible } from '~/hooks/useIsVisible';

type ActivityState = 0 | 1 | 2 | null;

const visibilityState: VisibilityState = {
  invisible: '-translate-x-1/2 opacity-0 blur-sm',
  visible: 'translate-x-0 opacity-100 blur-none',
};

const endeavourStyles = [
  'left-[7.7%] bg-[url("/assets/example-image-(2).jpg")]',
  'left-1/3 bg-[url("/assets/example-image-(3).jpg")]',
  'left-[59%] bg-[url("/assets/example-image-(4).jpg")]',
];

const getStateStyles = (index: number, state: ActivityState) => {
  if (state === null) return 'opacity-100';
  if (state === index) return 'opacity-100 left-[7.7%] z-10';
  else return 'opacity-0 pointer-events-none left-[7.7%]';
};

export const Endeavours = ({ blok }: any) => {
  const animationRef = useRef(null);
  const { t } = useTranslation('common');
  const { checkVisibility } = useIsVisible();
  const [active, setActive] = useState<ActivityState>(null);
  const isVisible = checkVisibility(animationRef, { persistent: true });

  return (
    <>
      <section
        {...storyblokEditable(blok)}
        key={blok._uid}
        id="endeavours"
        className="relative h-[90vh] w-full snap-always bg-white">
        <SectionHeadline pageTitel={blok.title} pageContent={blok.subheading} textColor="text-dark" />
        <div ref={animationRef} className="relative flex h-4/5 w-full flex-row items-center justify-center">
          {blok.data.map((endeavour: any, index: number) => (
            <div
              key={endeavour._uid}
              onClick={() => setActive((prev) => (prev === null ? (index as ActivityState) : null))}
              className={`parallelogram absolute h-3/5 w-1/3 cursor-pointer bg-cover transition-all duration-1000 ${
                endeavourStyles[index]
              } ${visibilityState[isVisible]} ${getStateStyles(index, active)}`}>
              <h4 className="absolute bottom-1 right-1/4 z-10 bg-black p-1 font-bebasNeue text-lg text-white md:text-2xl">
                <span className="text-primary">#</span>
                {endeavour.name}
              </h4>
            </div>
          ))}
          <p
            className={`absolute right-1/4 w-1/3 text-justify font-kumbhSans text-base transition-opacity delay-500 md:text-start md:text-lg ${
              active !== null ? 'opacity-100' : 'opacity-0'
            }`}>
            {active !== null && t(`${blok.data[active].content}`)}
          </p>
        </div>
      </section>
      {blok?.transition && <img src={blok.transition.filename} />}
    </>
  );
};
