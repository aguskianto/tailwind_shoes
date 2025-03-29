import { useEffect, useState } from 'react';

import Nav from './components/Nav';
import ShoeDetail from './components/ShoeDetail';
import NewArrivalsSection from './components/NewArrivalsSection';
import Sidebar from './components/Sidebar';
import Cart from './components/Cart';
import { BiMoon, BiSun } from 'react-icons/bi';

import { SHOE_LIST, ItemSummary, ItemCart } from './constant';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const emptyCart: ItemCart[] = [];
  const [cartItems, setCartItems] = useState(emptyCart);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('isDarkMode');
    if (isDarkMode === 'true') {
      window.document.documentElement.classList.add('dark');
    }
  }, []);

  const data: ItemCart[] = SHOE_LIST.map((shoe) => {
    return {
      product: shoe,
      qty: 0,
      size: 0,
    };
  });

  const [currentShoe, setCurrentShoe] = useState(data[0]);

  const onClickCard = (item: ItemCart) => {
    setCurrentShoe(item);
  };

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle('dark');

    localStorage.setItem(
      'isDarkMode',
      window.document.documentElement.classList.contains('dark').toString()
    );
  };

  const onRemoveItem = (productId: number) => {
    const updatedCartItems: ItemCart[] = [...cartItems];

    const existingItemIndex = cartItems.findIndex(
      (item) => item['product']['id'] === productId
    );

    updatedCartItems.splice(existingItemIndex, 1);

    console.log(updatedCartItems);
    setCartItems(updatedCartItems);
  };

  const addToCart = (product: ItemSummary, qty: number, size: number) => {
    if (qty > 0 && size > 0) {
      const updatedCartItems: ItemCart[] = [...cartItems];

      const existingItemIndex = cartItems.findIndex(
        (item) => item['product']['id'] === product.id
      );

      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }

      console.log(updatedCartItems);
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className='animate-fadeIn p-10 xl:p-24 dark:bg-night'>
      <Nav
        onClickShoppingBtn={() => {
          setIsSidebarOpen(true);
        }}
      />
      <ShoeDetail shoe={currentShoe} addToCart={addToCart} />
      <NewArrivalsSection items={data} onClickCard={onClickCard} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => {
          setIsSidebarOpen(false);
        }}
      >
        <Cart data={cartItems} onRemoveItem={onRemoveItem} />
      </Sidebar>
      <div className='fixed bottom-4 right-4'>
        <button
          onClick={toggleDarkMode}
          className='bg-night-50 dark:text-night rounded-full px-4 py-2 text-white shadow-lg dark:bg-white'
        >
          <BiSun className='hidden dark:block' />
          <BiMoon className='dark:hidden' />
        </button>
      </div>
    </div>
  );
};

export default App;
