import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SectionHeadline } from '~/components/elements';

export const Research = ({ blok }: any) => {
  const [tagList, setTags] = useState<string[]>([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSorter] = useState('none');

  const { t } = useTranslation();

  useEffect(() => {
    const _tagList = new Set<string>();
    blok.papers_data.forEach(({ tags }: any) => tags?.value.forEach((tag: string) => _tagList.add(tag)));

    setTags(['all', ..._tagList]);
  }, []);

  return (
    <main
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="relative flex h-screen max-h-screen w-full flex-col md:flex-row">
      <div className="flex h-1/4 w-full flex-col items-center border-r-[1px] border-secondary px-4 pt-20 font-kumbhSans text-white md:h-full md:w-1/6">
        <span className="w-full pb-2 font-bold uppercase">{t('research_filter-settings')}</span>
        <div className="flex w-full flex-row justify-between py-2">
          <label className="uppercase">{t('research_filter-by')}</label>
          <select
            onChange={(e) => setFilter(e.target.value.toLocaleLowerCase())}
            className="w-2/3 rounded-lg border-2 border-white bg-transparent p-1">
            {tagList.map((tag) => (
              <option key={tag} className="text-black">
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div className="flex w-full flex-row justify-between py-2">
          <label className="uppercase">{t('research_sort-by')}</label>
          <select
            onChange={(e) => setSorter(e.target.value.toLocaleLowerCase())}
            className="w-2/3 rounded-lg border-2 border-white bg-transparent p-1">
            <option className="text-black">{'none'}</option>
            <option className="text-black">{'date'}</option>
          </select>
        </div>
      </div>
      <section className="relative flex h-full max-h-[3/4] w-full flex-col justify-center">
        <SectionHeadline pageContent="and Development" pageTitel="RESEARCH" />
        <div className="relative grid h-full grid-cols-1 items-center justify-items-center gap-16 overflow-y-scroll p-4 py-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blok.papers_data
            .sort((a: any, b: any) => (sort === 'date' ? a.project_number - b.project_number : 0))
            .filter((value: any) => (filter === 'all' ? true : (value.tags?.value || []).includes(filter)))
            .map((elementBlok: any) => (
              <StoryblokComponent blok={elementBlok} key={elementBlok._uid} />
            ))}
        </div>
      </section>
    </main>
  );
};
