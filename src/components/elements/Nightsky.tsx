import { useEffect, useRef } from 'react';

import { NightSkyConfiguration } from '~/models/visuals';
import { useNightsky } from '~/hooks/useNightsky';

interface NightSkyProps extends NightSkyConfiguration {
  className?: string;
}

export const Nightsky = (props: NightSkyProps) => {
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
