import { useEffect, useRef } from 'react';

interface BlurrBloyProps {
  children: Array<JSX.Element> | JSX.Element;
}

const BlurryBlob = ({ children }: BlurrBloyProps) => {
  const blobReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.onpointermove = ({ clientX, clientY }) => {
      if (!blobReference.current) return;

      blobReference.current.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 3000, fill: 'forwards' }
      );
    };
  }, [blobReference]);

  return (
    <>
      <div
        className={`absolute w-96 h-96 z-[1] left-[50%] top-[50%] rounded-full rotating opacity-30 bg-gradient-to-r from-[#DF3D92] to-[#1F34E7]`}
        ref={blobReference}
      />
      <div className="absolute w-full h-full z-[2] backdrop-blur-3xl" />
      <div className="absolute w-full h-full z-[3]">
        <div className="relative w-full h-full">{children}</div>
      </div>
    </>
  );
};

export default BlurryBlob;
