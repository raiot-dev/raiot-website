import { RefObject, useEffect, useState } from 'react';

export const useUtilities = () => {
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const getRandomValue = (min: number, max: number) => Math.random() * (max - min) + min;

  const detectMobile = (navigator: Navigator) => {
    return (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    );
  };

  const isComponentIntersecting = (ref: RefObject<Element>, rootMargin = '0px'): boolean => {
    const [isIntersecting, setIsIntersecting] = useState(true);

    useEffect(() => {
      const element: Element = ref.current!;
      const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), { rootMargin });

      observer.observe(element);

      return () => observer.unobserve(element);
    }, []);

    return isIntersecting;
  };

  return { sleep, detectMobile, isComponentIntersecting, getRandomValue };
};
