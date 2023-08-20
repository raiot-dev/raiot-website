interface SectionHeadlineProps {
  pageTitel: string;
  pageContent: string;
  textColor?: string;
}

// change px, py for <p> and <hgroup> respectively
export const SectionHeadline = ({ textColor = 'text-white', pageTitel, pageContent }: SectionHeadlineProps) => {
  return (
    <hgroup className="relative flex h-fit w-full select-none flex-col items-center justify-center py-8 md:flex-row-reverse md:items-start md:justify-normal md:px-12">
      <h2
        className={`text-stroke-4xl w-min text-center font-kumbhSans text-5xl font-bold uppercase text-transparent text-stroke-color-secondary lg:text-9xl`}>
        {pageTitel}
      </h2>
      <p
        className={`${textColor} font-bebasNeue text-xl text-stroke-color-transparent md:absolute md:bottom-2 md:right-2 md:px-12  md:py-8 lg:text-5xl`}>
        {pageContent}
      </p>
    </hgroup>
  );
};
