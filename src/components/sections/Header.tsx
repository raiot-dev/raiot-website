import { storyblokEditable } from '@storyblok/react';
import { Link } from '@remix-run/react';

import { Typewriter, Nightsky } from '~/components/elements';

import { NightskyConfig } from '~/config/visuals/visuals';

export const Header = ({ blok }: any) => {
  return (
    <header {...storyblokEditable(blok)} key={blok?._uid} id="header" className="relative h-screen w-full">
      {<Nightsky {...NightskyConfig} />}
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-stroke-8xl md:text-stroke-12xl lg:text-stroke-24xl font-kumbhSans text-8xl font-bold uppercase text-transparent text-stroke-color-[white] md:text-12xl lg:text-24xl">
          {blok.title}
        </h1>
        <Typewriter
          content={blok.catchphrase_data.map(({ content }: any) => content)}
          typeSpeed={75}
          repeat
          className="py-5 text-center font-kumbhSans text-2xl text-slate-700 lg:text-3xl"
        />
        <div className="flex cursor-pointer flex-row items-center justify-center">
          {blok.link_data.map(({ link, name, image }: any) => (
            <Link to={link.url} target="_blank" about={name} key={name}>
              <img className="aspect-square h-full px-3 transition-all hover:brightness-75" src={image.filename} />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
