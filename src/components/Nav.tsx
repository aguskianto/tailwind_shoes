import NikeLogo from '../assets/nike-logo.svg?react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TbShoppingBag } from 'react-icons/tb';
import { useState } from 'react';

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact'];

type Props = {
  onClickShoppingBtn: (event: React.MouseEvent<HTMLElement>) => void;
};

const Nav: React.FC<Props> = ({ onClickShoppingBtn }) => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className='z-50 relative flex flex-wrap justify-between items-center'>
      <a href='#'>
        <NikeLogo className='h-20 w-20 dark:fill-white' />
      </a>

      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className='dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200'
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${
          isMobileMenuShown === false && 'hidden'
        } w-full lg:block lg:w-auto`}
      >
        <ul className='lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 text-lg border border-gray-100 lg:border-none rounded-lg p-4 lg:bg-transparent lg:dark:text-white'>
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:text-blue-500 ${
                  i === 0
                    ? 'bg-blue-500 text-white lg:bg-transparent lg:text-blue-500'
                    : 'hover:bg-gray-100'
                } ${(i === 3 || i === 4) && 'lg:text-white'}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        onClick={onClickShoppingBtn}
        className='btn-press-anim fixed bottom-4 left-4 lg:static lg:mr-8'
      >
        <div className='flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md'>
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
