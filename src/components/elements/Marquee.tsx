import { Link } from '@remix-run/react';

interface MarqueeProps {
  backgroundColor?: string;
}

const images = [
  { image: '/assets/logos/ALPLA.png', link: '/' },
  { image: '/assets/logos/bachmann.png', link: '/' },
  { image: '/assets/logos/Blum.png', link: '/' },
  { image: '/assets/logos/Getzner_Textil.png', link: '/' },
  { image: '/assets/logos/HTL.png', link: '/' },
  { image: '/assets/logos/Zumtobel.png', link: '/' },
  { image: '/assets/logos/Weiss.png', link: '/' },
];

export const Marquee = ({ backgroundColor = 'bg-transparent' }: MarqueeProps) => {
  // these images require a width of 300px and a height of 150px

  return (
    <div
      className={`animation-slide flex h-full min-h-[12rem] w-auto flex-row items-center overflow-hidden ${backgroundColor}`}
      style={{ width: images.length * 2 * 300 + 'px' }}>
      {[...images, ...images].map(({ image, link }, i) => {
        return (
          <Link
            key={`image-index-${i}`}
            to={link}
            target="_blank"
            className={`h-1/2 w-auto max-w-[300px] object-contain px-4 transition-opacity hover:opacity-100 lg:opacity-40`}>
            <img src={image} />
          </Link>
        );
      })}
    </div>
  );
};
