import { useEffect, useRef } from 'react';
import { useNightsky, NightSkyConfiguration } from '~/hooks/useNightsky';

interface NightSkyProps extends NightSkyConfiguration {
  className?: string;
}

const Nightsky = (props: NightSkyProps) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { initialize } = useNightsky();

  const config: NightSkyConfiguration = { ...props };

  useEffect(() => initialize(canvas, config), []);

  return (
    <canvas
      id="canvas-nightsky"
      className={`pointer-events-none absolute z-[1] h-full w-full ${props.className}`}
      ref={canvas}
    />
  );
};

export default Nightsky;
