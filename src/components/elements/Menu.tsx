import { useState } from 'react';

import { Hashing } from './Hashing';
import { Link } from '@remix-run/react';

interface MenuProps {
  menuItems: Array<{ name: string; link: string }>;
}

export const Menu = ({ menuItems }: MenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <button className="absolute z-[2] h-20 w-20 p-4" onClick={() => setOpenMenu(!openMenu)} name="Menubutton">
        <img src="/assets/menu.svg" alt="Menubutton to open menu" className="h-full w-full" />
      </button>
      <div
        className={`relative z-[1] flex flex-col justify-center transition-all ${
          openMenu ? 'h-full w-full opacity-100' : 'h-0 w-0 overflow-hidden opacity-0'
        }`}>
        <div className="dot-pattern absolute" />
        <nav className="pl-10 lg:pl-20">
          {menuItems.map(({ name, link }, i) => (
            <div key={name}>
              <div className="relative flex flex-row">
                <div className="mr-4 flex w-2 items-center justify-center md:w-3 lg:w-4">
                  <div className="h-full w-1 rounded-full bg-white lg:w-2" />
                </div>
                <Link
                  className="w-5/6 font-bebasNeue text-6xl text-white no-underline opacity-50 transition-opacity hover:opacity-100 md:text-8xl lg:text-9xl"
                  to={link}>
                  <Hashing name={name} />
                </Link>
              </div>
              {i !== menuItems.length - 1 && (
                <div className="my-4 aspect-square w-2 rounded-full bg-white md:w-3 lg:w-4" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};
