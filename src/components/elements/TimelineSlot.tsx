import Markdown from 'markdown-to-jsx';
import { Link } from '@remix-run/react';
import { storyblokEditable } from '@storyblok/react';

export const TimelineSlot = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} className="group/item pb-12" id={blok.name.split('/')[0]}>
      <div className="relative flex flex-row">
        <div className="mr-4 flex w-2 items-center justify-center md:w-3 lg:w-4">
          <div className="h-full w-1 rounded-full bg-white transition-all duration-500 group-hover/item:bg-primary lg:w-2" />
        </div>
        <Link relative="path" className="h-auto w-5/6 text-white no-underline" to={`./${blok.link}`}>
          <h3 className="overflow-hidden hyphens-auto whitespace-pre-wrap pb-6 font-bebasNeue text-5xl md:text-8xl lg:text-9xl">
            {blok.name}
          </h3>
          <div className="w-full text-justify text-lg lg:w-5/6 lg:text-2xl">
            <Markdown>{blok.text}</Markdown>
          </div>
        </Link>
      </div>
      <div className="my-4 aspect-square w-2 rounded-full bg-white md:w-3 lg:w-4" />
    </div>
  );
};
