import { memo } from 'react';
import { StackedCarouselSlideProps } from 'react-stacked-center-carousel';

export interface ReputationSlideProps {
  person: string;
  titel: string;
  organization: string;
  content: string;
  imagePath: string;
}

export const ReputationSlide = memo(({ data, dataIndex }: StackedCarouselSlideProps) => {
  const { imagePath, person, titel, organization, content }: ReputationSlideProps = data[dataIndex];

  return (
    <div className="flex h-full min-h-[500px] w-full select-none flex-col items-center rounded-3xl border-[3px] border-secondary bg-dark p-6 lg:min-h-[360px]">
      <p className="max-h-[220px] overflow-hidden whitespace-pre-wrap text-justify font-kumbhSans text-lg font-light text-white lg:text-xl">
        {content}
      </p>
      <div className="mt-auto flex h-full w-full flex-row items-center gap-6">
        <img draggable="false" src={imagePath} className="aspect-square h-full rounded-full" />
        <div className="flex w-2/3 flex-col overflow-hidden whitespace-pre-wrap">
          <span className="font-kumbhSans text-xl text-white">{person}</span>
          <span className="font-kumbhSans text-base text-secondary">{titel}</span>
          <span className="font-kumbhSans text-base text-white">{organization}</span>
        </div>
      </div>
    </div>
  );
});
