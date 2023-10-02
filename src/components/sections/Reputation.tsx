import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

import { ReputationSlide, ReputationSlideProps, SectionHeadline } from '~/components/elements/';

const mockReputationData: ReputationSlideProps[] = [
  {
    person: 'Test Test',
    titel: 'Head of WI',
    organization: 'Higher Technical College',
    content:
      'This robotics program has been an absolute game-changer for my child! They come home every day brimming with excitement, eager to showoff their latest robot creations.\r\n\r\nThank you for fostering a passion for technology in young minds!',
    imagePath: '/assets/[TODO:]',
  },
  {
    person: 'Test Test Test Test',
    titel: 'School Director',
    organization: 'Bundesgymnasium',
    content:
      'This robotics program has been an absolute game-changer for my child! They come home every day brimming with excitement, eager to showoff their latest robot creations. Thank you for fostering a passion for technology in young minds!',
    imagePath: '/assets/[TODO:]',
  },
];

export const Reputation = () => {
  const { t } = useTranslation('common');
  const ref = useRef<StackedCarousel>();

  return (
    <section id="reputation" className="relative h-screen w-full snap-always bg-transparent">
      <div className="pointer-events-none absolute right-1/3 h-screen w-1/4 rotate-45 rounded-[100%] bg-gradient-to-r from-[#DF3D92] to-[#1F34E7] opacity-20 blur-3xl " />
      <SectionHeadline pageTitel={t('page_reputation')} pageContent={t('page_reputation-subheading')} />
      <div className="flex h-[65%] w-full flex-col items-center justify-center">
        <h3 className="whitespace-pre-line pt-16 text-center font-bebasNeue text-xl text-white md:text-3xl lg:p-0 lg:text-5xl">
          {t(`reputation_feedback`)}
        </h3>
        <div className="flex w-full flex-row items-center justify-evenly pt-5">
          <button className="hidden rotate-180 text-2xl text-white md:block" onClick={() => ref?.current?.goBack()}>
            <img src="/assets/arrow_right.svg" />
          </button>
          <div className="w-full pt-8 lg:w-9/12 lg:p-0">
            <ResponsiveContainer
              carouselRef={ref}
              render={(parentWidth, carouselRef) => (
                <StackedCarousel
                  ref={carouselRef}
                  data={mockReputationData}
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
          <button className="hidden text-2xl text-white md:block" onClick={() => ref?.current?.goNext()}>
            <img src="/assets/arrow_right.svg" />
          </button>
        </div>
      </div>
    </section>
  );
};
