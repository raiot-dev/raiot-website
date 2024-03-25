import { storyblokEditable } from '@storyblok/react';

export const ResearchArticle = ({ blok }: any) => {
  const { project_number, image, title, description, date, file_link, download } = blok;

  return (
    <div {...storyblokEditable(blok)} key={blok._uid} className="relative mb-8 flex h-96 w-full flex-col">
      <h3 className="mb-8 flex flex-row items-baseline gap-2 font-bebasNeue text-2xl text-primary">
        Project {project_number}
        <span className="text-xl text-secondary">// {new Date(Date.parse(date)).toLocaleDateString('en-GB')}</span>
      </h3>
      <div className="relative h-full rounded-xl border-2 border-white">
        <img
          loading="lazy"
          className="h-1/2 w-full rounded-t-xl border-b-2 object-cover"
          src={`${image.filename}/m/400x0/`}
          alt={title}
        />
        <div className="flex h-1/2 flex-col justify-between px-4 py-6">
          <p className="line-clamp-3 overflow-hidden text-ellipsis whitespace-break-spaces text-justify font-kumbhSans text-white">
            {description}
          </p>
          <a
            href={file_link.url}
            target="_blank"
            title={title}
            className="w-fit rounded-xl border-2 p-2 text-white"
            download={`${title}.pdf`}>
            {download}
          </a>
        </div>
      </div>
    </div>
  );
};
