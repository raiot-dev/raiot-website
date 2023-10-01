import { MutableRefObject, useEffect, useState } from 'react';
import { useUtilities } from '~/services';

type VisibilityType = 'invisible' | 'visible';

export type VisibilityState = {
  [key in VisibilityType]: string;
};

export const useIsVisible = () => {
  const checkVisibility = (
    ref: MutableRefObject<any>,
    options?: { persistent: boolean } & IntersectionObserverInit
  ): VisibilityType => {
    const { detectMobile } = useUtilities();

    const [isVisible, setIsVisible] = useState<VisibilityType>('invisible');
    useEffect(() => {
      if (detectMobile(navigator)) setIsVisible('visible');
      else {
        const observer = new IntersectionObserver(
          ([entry]) => setIsVisible(entry.isIntersecting ? 'visible' : 'invisible'),
          options
        );

        if (ref?.current) observer.observe(ref.current);
        return () => (ref?.current ? observer.unobserve(ref.current) : undefined);
      }
    }, [ref]);

    return isVisible;
  };

  return { checkVisibility };
};
