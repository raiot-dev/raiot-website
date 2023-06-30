import { useEffect, useRef } from 'react';
import { useNightsky, NightSkyConfiguration } from '~/hooks/useNightsky';

class Star {
  constructor(public x: number, public y: number, public radius: number, public color: `#${string}`) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.random() * this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

const Nightsky = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { initialize } = useNightsky();

  const config: NightSkyConfiguration = {
    starCount: 100,
  };

  useEffect(() => initialize(canvas, config), []);

  return <canvas id="canvas-nightsky" className="h-full w-full border-4 border-red-400" ref={canvas}></canvas>;
};

export default Nightsky;
