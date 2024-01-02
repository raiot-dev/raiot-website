import { useTranslation } from 'react-i18next';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

import { SectionHeadline } from '~/components/elements/';

export const Timeline = ({ blok }: any) => {
  const { t } = useTranslation('common');

  return (
    <section {...storyblokEditable(blok)} key={blok._uid} id="timeline" className="relative w-full snap-always">
      <SectionHeadline pageTitel={t('page_timeline')} pageContent={t('page_timeline-subheading')} />
      <div className="py-16 pl-10 lg:pl-20">
        {blok.timelineSlots.slice(0, blok.limit ?? blok.length).map((timelineSlotBlok: any) => (
          <StoryblokComponent blok={timelineSlotBlok} key={timelineSlotBlok._uid} />
        ))}
      </div>
    </section>
  );
};
