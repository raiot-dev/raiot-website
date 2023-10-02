import { NightSkyConfiguration } from '~/models/visuals';
import { useUtilities } from '~/services';

const { getRandomValue } = useUtilities();

interface Star {
  radius: number;
  x: number;
  y: number;
  xVelocity: number;
  yVelocity: number;
  color: string;
}

class Stars {
  public stars: Array<Star> = [];
  constructor(private config: NightSkyConfiguration, private ctx: CanvasRenderingContext2D) {
    this.stars = new Array(this.config.starCount).fill({}).map((_, i) => {
      return {
        radius: getRandomValue(this.config.minRadius, this.config.maxRadius),
        x: getRandomValue(0, this.ctx.canvas.width),
        y: getRandomValue(0, (this.ctx.canvas.height / this.config.starCount) * i),
        xVelocity: getRandomValue(this.config.minSpeed, this.config.maxSpeed),
        yVelocity: getRandomValue(this.config.minSpeed, this.config.maxSpeed),
        color: `${this.config.color}${Number(
          getRandomValue(this.config.minOpacity, this.config.maxOpacity).toFixed(0)
        ).toString(16)}`,
      };
    });
  }

  public adapt = () =>
    this.stars.forEach((star, i) => {
      star.x = getRandomValue(0, this.ctx.canvas.width);
      star.y = getRandomValue(0, (this.ctx.canvas.height / this.config.starCount) * i);
    });

  public animate() {
    this.stars.forEach((star) => {
      star.x += star.xVelocity;
      star.y -= star.yVelocity;

      if (star.x > this.ctx.canvas.width + star.radius || star.y > this.ctx.canvas.height + star.radius)
        this.resetStar(star);
      else this.draw(star);
    });
  }

  private draw({ x, y, color, radius }: Star) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.arc(Math.floor(x), Math.floor(y), radius, 0, 2 * Math.PI, false);
    this.ctx.fill();
    this.ctx.closePath();
  }

  private resetStar(star: Star) {
    if (getRandomValue(0, 1) > 0.5) {
      star.x = Math.round(-star.radius);
      star.y = Math.round(getRandomValue(0, this.ctx.canvas.height));
    } else {
      star.x = Math.round(getRandomValue(0, this.ctx.canvas.width));
      star.y = Math.round(this.ctx.canvas.height + star.radius);
    }
  }
}

/**
 * Returns a function that initializes the canvas to draw a night sky
 *
 * @inspiration https://codepen.io/missmatsuko
 */
export const useNightsky = () => {
  let ctx: CanvasRenderingContext2D;
  let stars = {} as Stars;

  const initialize = (canvas: React.RefObject<HTMLCanvasElement>, config: NightSkyConfiguration) => {
    ctx = canvas.current?.getContext('2d')!;
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    stars = new Stars(config, ctx);

    setupEventHandlers();
    setupAnimation();
  };

  const setupAnimation = () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    stars.animate();

    requestAnimationFrame(() => setupAnimation());
  };

  const setupEventHandlers = () => {
    // window.addEventListener('resize', () => {
    //   ctx.canvas.width = window.innerWidth;
    //   ctx.canvas.height = window.innerHeight;
    //   stars.adapt();
    // });
  };

  return { initialize };
};
