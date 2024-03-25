import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel';
import { useRef } from 'react';

import { ReputationSlide, SectionHeadline } from '~/components/elements/';
import { storyblokEditable } from '@storyblok/react';

export const Reputation = ({ blok }: any) => {
  const ref = useRef<StackedCarousel>();

  return (
    <section
      {...storyblokEditable(blok)}
      key={blok._uid}
      id="reputation"
      className="relative h-[120vh] w-full  bg-transparent">
      <div className="pointer-events-none absolute right-1/3 h-screen w-1/4 rotate-45 rounded-[100%] bg-gradient-to-r from-[#DF3D92] to-[#1F34E7] opacity-20 blur-3xl " />
      <SectionHeadline pageTitel={blok.title} pageContent={blok.subheading} />
      <div className="flex h-[65%] w-full flex-col items-center justify-center pt-16">
        <h3 className="w-1/2 whitespace-pre-line pt-16 text-center font-bebasNeue text-xl text-white md:text-3xl lg:p-0 lg:text-5xl">
          {blok.catchphrase}
        </h3>
        <div className="flex w-full flex-row items-center justify-evenly pt-5">
          <button
            type="button"
            className="hidden rotate-180 text-2xl text-white md:block"
            onClick={() => ref?.current?.goBack()}>
            <img loading="lazy" alt="Navigation button to the left" src="/assets/arrow_right.svg" />
          </button>
          <div className="w-full pt-8 lg:w-9/12 lg:p-0">
            <ResponsiveContainer
              carouselRef={ref}
              render={(parentWidth, carouselRef) => (
                <StackedCarousel
                  ref={carouselRef}
                  data={blok.data}
                  carouselWidth={parentWidth}
                  slideWidth={parentWidth >= 1080 ? 840 : 360}
                  height={parentWidth >= 1080 ? 360 : 500}
                  slideComponent={ReputationSlide}
                  i18nIsDynamicList={true}
                  transitionTime={300}
                  maxVisibleSlide={3}
                  currentVisibleSlide={parentWidth >= 1080 ? 3 : 1}
                  useGrabCursor={true}
                />
              )}
            />
          </div>
          <button type="button" className="hidden text-2xl text-white md:block" onClick={() => ref?.current?.goNext()}>
            <img loading="lazy" alt="Navigation arrow to the right" src="/assets/arrow_right.svg" />
          </button>
        </div>
      </div>
    </section>
  );
};
