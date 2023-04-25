import { useState } from 'react';
import Hashing from './Hashing';

interface MenuProps {
  menuItems: Array<{ name: string; link: string }>;
}

const Menu = ({ menuItems }: MenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <button className="absolute z-[2] h-16 w-16 m-4" onClick={() => setOpenMenu(!openMenu)}>
        <img src="/assets/menu.svg" />
      </button>
      <div
        className={`relative z-[1] flex flex-col justify-center transition-all 
        ${openMenu ? 'opacity-100 w-full h-full' : 'opacity-0 h-0 w-0 overflow-hidden'}`}>
        <div className="absolute dot-pattern" />
        <nav>
          {menuItems.map(({ name, link }) => (
            <a
              className="relative menu-item text-white text-9xl font-bebasNeue block no-underline ml-36 opacity-50 hover:opacity-100 transition-opacity duration-300 py-4"
              key={name}
              href={link}>
              <Hashing name={name} />
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Menu;
