interface PublishedArticleProps {
  project_number: number;
  title: string;
  description: string;
  image: { filename: string };
  date: string;
  file_link: { url: string };
}

export const PublishedArticle = ({
  project_number,
  title,
  description,
  image,
  date,
  file_link,
}: PublishedArticleProps) => {
  console.log();

  return (
    <div className="relative mb-16 flex h-80 w-full flex-col">
      <h3 className="pb-8 font-bebasNeue text-2xl text-primary">
        Project {project_number}
        <span className="text-xl text-secondary">// {new Date(Date.parse(date)).getFullYear()}</span>
      </h3>
      <div className="h-full rounded-xl border-2 border-white">
        <img
          className="h-1/2 w-full rounded-t-xl border-b-2 border-white object-cover"
          src={image.filename}
          alt={title}
        />
        <p className="h-full w-full overflow-hidden hyphens-auto whitespace-pre-wrap p-8 font-kumbhSans text-white">
          {description}
        </p>
        <a href={file_link.url} target="_blank" download={`${title}.pdf`}>
          Download
        </a>
      </div>
    </div>
  );
};
