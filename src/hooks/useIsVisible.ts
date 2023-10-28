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
    const [visibility, setVisibility] = useState<VisibilityType>('invisible');

    if (!options?.persistent)
      useEffect(() => {
        if (detectMobile(navigator)) setVisibility('visible');
        else {
          const observer = new IntersectionObserver(([entry]) => {
            setVisibility(entry.isIntersecting ? 'visible' : 'invisible');
          }, options);

          if (ref?.current) observer.observe(ref.current);
          return () => (ref?.current ? observer.unobserve(ref.current) : undefined);
        }
      }, [ref]);
    else
      useEffect(() => {
        if (detectMobile(navigator)) setVisibility('visible');
        else {
          const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setVisibility('visible');
          }, options);

          if (ref?.current) observer.observe(ref.current);
          return () => (ref?.current ? observer.unobserve(ref.current) : undefined);
        }
      }, [ref]);

    return visibility;
  };

  return { checkVisibility };
};
