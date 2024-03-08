import { storyblokEditable } from '@storyblok/react';

export const ResearchArticle = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} className="relative mb-16 flex h-96 w-full flex-col">
      <h3 className="pb-8 font-bebasNeue text-2xl text-primary">
        Project {blok.project_number}
        <span className="text-xl text-secondary">// {new Date(Date.parse(blok.date)).getFullYear()}</span>
      </h3>
      <div className="relative h-full rounded-xl border-2 border-white">
        <img
          className="h-1/2 w-full rounded-t-xl border-b-2 border-white object-cover"
          src={blok.image.filename}
          alt={blok.title}
        />
        <p className="max-h-28 w-full overflow-hidden hyphens-auto whitespace-pre-wrap px-4 py-8 text-justify font-kumbhSans text-white">
          {blok.description}
        </p>
        <a
          href={blok.file_link.url}
          target="_blank"
          className="mx-4 rounded-xl border-2 p-2 text-white"
          download={`${blok.title}.pdf`}>
          {blok.download}
        </a>
      </div>
    </div>
  );
};
