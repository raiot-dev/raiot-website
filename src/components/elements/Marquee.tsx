import { Link } from '@remix-run/react';
import { storyblokEditable } from '@storyblok/react';

export const Marquee = ({ blok }: any) => {
  const { sponsors, error_message, _uid } = blok;

  if (sponsors.length === 0)
    return (
      <div
        {...storyblokEditable(blok)}
        key={_uid}
        className="flex min-h-[12rem] w-full items-center justify-center font-kumbhSans text-xl text-secondary">
        {error_message}
      </div>
    );

  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className="animation-slide flex h-full min-h-[12rem] w-auto flex-row items-center overflow-hidden"
      style={{ width: blok.sponsors.length * 2 * 300 + 'px' }}>
      {sponsors.concat(sponsors).map(({ name, logo, link }: any, i: number) => {
        return (
          <Link
            key={`image-index-${i}`}
            to={link.url}
            target="_blank"
            className={`h-1/2 w-auto max-w-[300px] object-contain px-4 transition-opacity hover:opacity-100 lg:opacity-40`}>
            <img title={name} src={logo.filename} />
          </Link>
        );
      })}
    </div>
  );
};
