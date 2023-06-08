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
      <button className="absolute z-[2] m-4 h-16 w-16" onClick={() => setOpenMenu(!openMenu)} name="Menubutton">
        <img src="/assets/menu.svg" alt="Menubutton to open menu" className="h-full w-full" />
      </button>
      <div
        className={`relative z-[1] flex flex-col justify-center transition-all
        ${openMenu ? 'h-full w-full opacity-100' : 'h-0 w-0 overflow-hidden opacity-0'}`}>
        <div className="dot-pattern absolute" />
        <nav>
          {menuItems.map(({ name, link }) => (
            <Link
              className="relative ml-36 block py-4 font-bebasNeue text-9xl text-white no-underline opacity-50 transition-opacity duration-300 hover:opacity-100"
              key={name}
              to={link}>
              <Hashing name={name} />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};
