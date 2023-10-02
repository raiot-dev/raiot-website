import { useEffect, useRef, useState } from 'react';
import { VisibilityState, useIsVisible } from '~/hooks/useIsVisible';

interface SectionHeadlineProps {
  pageTitel: string;
  pageContent: string;
  textColor?: string;
  className?: string;
}

const visibilityState: VisibilityState = {
  invisible: '-translate-x-1/2 opacity-0 blur-sm',
  visible: 'translate-x-0 opacity-100 blur-none',
};

// change px, py for <p> and <hgroup> respectively
export const SectionHeadline = ({
  textColor = 'text-white',
  className = '',
  pageTitel,
  pageContent,
}: SectionHeadlineProps) => {
  const headingRef = useRef(null);
  const { checkVisibility } = useIsVisible();

  const isVisible = checkVisibility(headingRef);

  return (
    <hgroup
      ref={headingRef}
      className={`${visibilityState[isVisible]} relative flex w-full select-none flex-col items-center justify-center py-8 transition-all duration-1000 md:flex-row-reverse md:items-start md:justify-normal md:px-12 ${className}`}>
      <h2
        className={`text-stroke-4xl w-min text-center font-kumbhSans text-5xl font-bold uppercase text-transparent text-stroke-color-secondary md:text-7xl lg:text-9xl`}>
        {pageTitel}
      </h2>
      <span
        className={`${textColor} font-bebasNeue text-xl text-stroke-color-transparent md:absolute md:bottom-0 md:right-2 md:px-12 md:py-8 md:text-3xl  lg:bottom-2 lg:text-5xl`}>
        {pageContent}
      </span>
    </hgroup>
  );
};
