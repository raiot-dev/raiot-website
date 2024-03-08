import { storyblokEditable } from '@storyblok/react';
import { ActivityState } from '~/components/sections/Endeavours';

export const Endeavour = ({ blok }: any) => {
  const { _uid, index, active, image, name } = blok;

  const endeavourStyles = ['left-[7.7%] ', 'left-1/3', 'left-[59%]'];

  const getStateStyles = (index: number, state: ActivityState) => {
    if (state === null) return 'opacity-100';
    if (state === index) return 'opacity-100 left-[7.7%] z-10';
    return 'opacity-0 pointer-events-none left-[7.7%]';
  };

  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      style={{ backgroundImage: `url(${image?.filename})` }}
      className={`parallelogram absolute h-3/5 w-1/3 cursor-pointer bg-cover transition-all duration-1000 ${
        endeavourStyles[index]
      } ${getStateStyles(index, active)}`}>
      <h4 className="absolute bottom-1 right-1/4 z-10 bg-black p-1 font-bebasNeue text-lg text-white md:text-2xl">
        <span className="text-primary">#</span>
        {name}
      </h4>
    </div>
  );
};
