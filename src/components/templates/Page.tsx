import { V2_MetaFunction } from '@remix-run/node';

import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'RAIOT' },
    {
      name: 'description',
      content:
        'RAIOT is an educational organization based in vorarlberg, austria. RAIOT aims to teach students about Robotics and IoT in an open-source and friendly manner, while competing in competitions across austria.',
    },
    {
      name: 'keywords',
      content: 'RAIOT, Robotics, IoT, Vorarlberg, Austria',
    },
  ];
};

export const Page = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} className="relative h-full w-full">
      <main role="main" className="relative flex snap-y snap-mandatory items-center justify-center">
        {blok.body?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </main>
    </div>
  );
};
