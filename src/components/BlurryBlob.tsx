import { useEffect, useRef } from 'react';
import { useUtilities } from '~/services';

interface BlurrBloyProps {
  children: Array<JSX.Element> | JSX.Element;
}

const BlurryBlob = ({ children }: BlurrBloyProps) => {
  const blobReference = useRef<HTMLDivElement>(null);
  const { detectMobile } = useUtilities();

  useEffect(() => {
    document.body.onpointermove = ({ clientX, clientY }) => {
      if (!blobReference.current) return;
      if (detectMobile(navigator)) blobReference.current.style.display = 'none';

      blobReference.current.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 3500, fill: 'forwards' }
      );
    };
  }, [blobReference]);

  return (
    <>
      <div
        className="absolute w-80 h-80 left-[50%] top-[50%] rounded-full rotating pointer-events-none opacity-30 bg-gradient-to-r from-[#DF3D92] to-[#1F34E7]"
        ref={blobReference}
      />
      <div className="absolute w-full h-full backdrop-blur-3xl pointer-events-none top-0 left-0" />
      <div className="relative w-full h-full">{children}</div>
    </>
  );
};

export default BlurryBlob;
