import { storyblokEditable } from '@storyblok/react';
import { ChangeEvent, useEffect, useState } from 'react';

import { SectionHeadline } from '~/components/elements';
import { PublishedArticle } from '~/components/elements/';

export const Research = ({ blok }: any) => {
  const [tagList, setTags] = useState<string[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const _tagList = new Set<string>();
    blok.papers_data.forEach(({ tags }: any) => tags?.value.forEach((tag: string) => _tagList.add(tag)));

    setTags(['all', ..._tagList]);
  }, []);

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value.toLocaleLowerCase());
  };

  return (
    <main
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="relative flex h-screen max-h-screen w-full flex-col md:flex-row">
      <div className="flex h-1/4 w-full flex-col items-center border-r-[1px] border-secondary px-4 pt-20 font-kumbhSans md:h-full md:w-1/6">
        <div className="flex w-full flex-row justify-between">
          <span className="text-white">CLEAR</span>
        </div>
        <div className="flex w-full flex-row justify-between text-white">
          <label className="uppercase">FILTER</label>
          <select onChange={handleFilterChange} className="w-2/3 rounded-lg border-2 border-white bg-transparent p-1">
            {tagList.map((tag) => (
              <option className="text-black">{tag}</option>
            ))}
          </select>
        </div>
      </div>
      <section className="relative flex h-full max-h-[3/4] w-full flex-col justify-center">
        <SectionHeadline pageContent="and Development" pageTitel="RESEARCH" />
        <div className="relative grid h-full grid-cols-1 items-center justify-items-center gap-16 overflow-y-scroll p-4 py-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blok.papers_data
            .filter((value: any) => (filter === 'all' ? true : (value.tags?.value || []).includes(filter)))
            .map((element: any) => (
              <PublishedArticle key={element._uid} {...element} />
            ))}
        </div>
      </section>
    </main>
  );
};
