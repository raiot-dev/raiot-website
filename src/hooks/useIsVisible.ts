import { MutableRefObject, useEffect, useState } from 'react';

type VisibilityType = 'invisible' | 'visible';

export type VisibilityState = {
  [key in VisibilityType]: string;
};

export const useIsVisible = () => {
  const checkVisibility = (
    ref: MutableRefObject<any>,
    options?: { persistent: boolean } & IntersectionObserverInit
  ): VisibilityType => {
    const [isVisible, setIsVisible] = useState<VisibilityType>('invisible');

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(options?.persistent ? 'visible' : entry.isIntersecting ? 'visible' : 'invisible'),
        options
      );

      if (ref?.current) observer.observe(ref.current);
      return () => (ref?.current ? observer.unobserve(ref.current) : undefined);
    }, [ref]);

    return isVisible;
  };

  return { checkVisibility };
};
