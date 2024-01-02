import Markdown from 'markdown-to-jsx';
import { Link } from '@remix-run/react';
import { storyblokEditable } from '@storyblok/react';

const overrides = {
  h1: {
    component: ({ children }: any) => (
      <h1 className="text-stroke-2xl py-4 font-kumbhSans text-xl font-bold uppercase text-transparent text-stroke-color-secondary md:text-3xl lg:text-5xl">
        {children}
      </h1>
    ),
  },
  h2: {
    component: ({ children }: any) => (
      <h2 className="py-4 font-kumbhSans text-5xl font-bold uppercase  md:text-xl lg:text-2xl">{children}</h2>
    ),
  },
  a: {
    component: ({ children, ...props }: any) => (
      <Link className="text-primary" target="_blank" to={props.href}>
        {children}
      </Link>
    ),
  },
};

export const PrivacyPolicy = ({ blok }: any) => {
  return (
    <section
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="w-2/3 p-16 text-justify font-kumbhSans leading-relaxed text-white">
      <Markdown options={{ overrides }}>{blok.text}</Markdown>
    </section>
  );
};
