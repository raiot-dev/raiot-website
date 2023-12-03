import { useTranslation } from 'react-i18next';
import { SectionHeadline } from '~/components/elements';
import ResearchElement from '~/components/elements/ResearchElement';

const mockData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ',
    image: 'https://picsum.photos/200/300',
    date: '2021-09-01',
    fileLink: 'test12345',
  },
  {
    id: 2,
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, libero id dignissim porta, sem nisl cursus sem, ac ',
    image: 'https://picsum.photos/200/300',
    date: '2021-09-01',
    fileLink: 'test12345',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, ',
    image: 'https://picsum.photos/200/300',
    date: '2021-09-01',
    fileLink: 'test12345',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    image: 'https://picsum.photos/200/300',
    date: '2021-09-01',
    fileLink: 'test12345',
  },
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur ',
    image: 'https://picsum.photos/200/300',
    date: '2021-09-01',
    fileLink: 'test12345',
  },
  {
    id: 2,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, libero id dignissim porta,',
    image: 'https://picsum.photos/200/300',
    date: '2021-09-01',
    fileLink: 'test12345',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos/200/300',
    date: '2021-09-01',
    fileLink: 'test12345',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam,',
    image: 'https://picsum.photos/200/300',
    date: '2021-09-01',
    fileLink: 'test12345',
  },
];

const Research = () => {
  const { t } = useTranslation('common');

  return (
    <main className="relative flex h-screen max-h-screen w-full flex-col md:flex-row">
      <div className="flex h-1/4 w-full flex-col items-center border-r-[1px] border-secondary px-4 pt-20 font-kumbhSans md:h-full md:w-1/6">
        <div className="flex w-full flex-row justify-between">
          <h2 className="uppercase text-white">{t('research_filter-settings')}</h2>
          <span className="text-white">CLEAR</span>
        </div>
        <div className="flex w-full flex-row justify-between text-white">
          <label className="uppercase">{t('research_filter-by')}</label>
          <select className="w-2/3 rounded-lg border-2 border-white bg-transparent p-1">
            <option className="text-black">All</option>
            <option className="text-black">Research</option>
            <option className="text-black">Development</option>
          </select>
        </div>
      </div>
      <section className="relative flex h-full max-h-[3/4] w-full flex-col justify-center">
        <SectionHeadline pageContent="and Development" pageTitel="RESEARCH" />
        <div className="grid h-full grid-cols-1 items-center justify-items-center gap-16 overflow-y-scroll p-4 py-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockData.map((element) => (
            <ResearchElement key={element.id} {...element} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Research;
