import { useState } from 'react';

import { Hashing } from './Hashing';
import { Link } from '@remix-run/react';

interface MenuProps {
  menuItems: Array<{ name: string; link: string }>;
  onClick?: (e: any) => void;
}

export const Menu = ({ menuItems, onClick = (e) => {} }: MenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <button
        className="fixed z-[2] h-20 w-20 p-4 mix-blend-difference"
        onClick={(e) => {
          onClick(e);
          setOpenMenu(!openMenu);
        }}
        name="Menubutton">
        <img src="/assets/menu.svg" alt="Menubutton to open menu" className="h-full w-full" />
      </button>
      <div
        className={`relative z-[1] flex flex-col justify-center bg-dark transition-all ${
          openMenu ? 'h-screen w-screen opacity-100' : 'h-0 w-0 overflow-hidden opacity-0'
        }`}>
        <div className="dot-pattern absolute" />
        <nav className="pl-10 lg:pl-20">
          {menuItems.map(({ name, link }, i) => (
            <li key={name} className="group/item">
              <div className="relative flex flex-row">
                <div className="mr-4 flex w-2 items-center justify-center md:w-3 lg:w-4">
                  <div className="h-full w-1 rounded-full bg-white transition-all duration-500 group-hover/item:bg-primary lg:w-2" />
                </div>
                <Link
                  className="h-auto w-5/6 overflow-hidden hyphens-auto whitespace-pre-wrap font-bebasNeue text-6xl text-white no-underline opacity-50 transition-opacity group-hover/item:opacity-100 md:text-7xl lg:text-8xl"
                  to={link}
                  preventScrollReset>
                  <Hashing text={name} />
                </Link>
              </div>
              {i !== menuItems.length - 1 && (
                <div className="my-4 aspect-square w-2 rounded-full bg-white md:w-3 lg:w-4" />
              )}
            </li>
          ))}
        </nav>
      </div>
    </>
  );
};
