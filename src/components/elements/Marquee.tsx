import { Link } from '@remix-run/react';

export const Marquee = () => {
  // these images require a width of 300px and a height of 150px
  const images = [
    { image: '/assets/logos/ALPLA.png', link: '/' },
    { image: '/assets/logos/bachmann.png', link: '/' },
    { image: '/assets/logos/Blum.png', link: '/' },
    { image: '/assets/logos/Getzner_Textil.png', link: '/' },
    { image: '/assets/logos/HTL.png', link: '/' },
    { image: '/assets/logos/Zumtobel.png', link: '/' },
    { image: '/assets/logos/Weiss.png', link: '/' },
  ];

  return (
    <div
      className="animation-slide relative flex h-full w-auto flex-row items-center overflow-hidden border-t-[1px] border-secondary bg-dark"
      style={{ width: images.length * 2 * 300 + 'px' }}>
      {[...images, ...images].map(({ image, link }, i) => {
        return (
          <Link
            key={`image-index-${i}`}
            to={link}
            target="_blank"
            className="h-1/2 w-auto max-w-[300px] object-contain px-4 opacity-40 transition-opacity hover:opacity-100">
            <img src={image} />
          </Link>
        );
      })}
    </div>
  );
};
