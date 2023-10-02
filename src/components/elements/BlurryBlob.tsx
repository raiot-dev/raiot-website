import { useEffect, useRef } from 'react';
import { useUtilities } from '~/services';

interface BlurrBloyProps {
  children: Array<JSX.Element> | JSX.Element;
}

export const BlurryBlob = ({ children }: BlurrBloyProps) => {
  const blobReference = useRef<HTMLDivElement>(null);
  const { detectMobile } = useUtilities();

  useEffect(() => {
    document.body.onpointermove = ({ pageX, pageY }) => {
      if (!blobReference.current) return;
      if (detectMobile(navigator)) return (blobReference.current.style.display = 'none');

      blobReference.current.animate({ left: `${pageX}px`, top: `${pageY}px` }, { duration: 3500, fill: 'forwards' });
    };
  }, [blobReference]);

  return (
    <>
      <div
        className="animation-rotating pointer-events-none absolute left-[50%] top-[50%] hidden h-52 w-52 rounded-full bg-gradient-to-r from-[#DF3D92] to-[#1F34E7] opacity-30 md:block"
        ref={blobReference}
      />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full backdrop-blur-3xl" />
      <div className="relative h-full w-full">{children}</div>
    </>
  );
};
