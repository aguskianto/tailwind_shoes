// { children: any, isOpen: boolean }

import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
  isOpen: boolean;
  onClickClose: (event: React.MouseEvent<HTMLElement>) => void;
};

const Sidebar: React.FC<Props> = ({ children, isOpen, onClickClose }) => {
  return (
    <div
      className={`dark:bg-night overflow-y-auto z-50 fixed top-0 left-0 h-full w-full bg-white transition transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <button
        onClick={onClickClose}
        className='dark:text-white absolute right-4 top-4 p-2 font-bold text-black'
      >
        X
      </button>
      {children}
    </div>
  );
};

export default Sidebar;
