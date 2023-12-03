interface ResearchElementProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  fileLink: string;
}

const ResearchElement = ({ id, title, description, image, date, fileLink }: ResearchElementProps) => {
  return (
    <div className="relative mb-16 flex h-80 w-full flex-col">
      <h3 className="pb-8 font-bebasNeue text-2xl text-primary">
        {title} <span className="text-xl text-secondary">// {date}</span>
      </h3>
      <div className="h-full rounded-xl border-2 border-white">
        <img className="h-1/2 w-full rounded-t-xl border-b-2 border-white object-cover" src={image} alt={title} />
        <p className="p-8 font-kumbhSans text-white">{description}</p>
        <button></button>
      </div>
    </div>
  );
};

export default ResearchElement;
