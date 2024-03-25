import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export const Landingpage = ({ blok }: any) => {
  const { body, header } = blok;

  return (
    <div {...storyblokEditable(blok)} key={blok._uid} className="relative h-full w-full">
      {header?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <main role="main">
        {body?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </main>
    </div>
  );
};
