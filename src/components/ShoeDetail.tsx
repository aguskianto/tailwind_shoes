import { useState } from 'react';
import Select from './Select';
import { QTY, SIZES } from '../constant';
import { ItemSummary, ItemCart } from '../constant';

type Props = {
  shoe: ItemCart;
  addToCart: (product: ItemSummary, qty: number, size: number) => void;
};

const ShoeDetail: React.FC<Props> = ({ shoe, addToCart }) => {
  const [form, setForm] = useState({
    qty: shoe.qty || 0,
    size: shoe.size || 0,
  });

  // console.log(form.qty);
  // console.log(form.size);

  return (
    <div className='flex flex-col space-y-4 lg:flex-row-reverse dark:text-white'>
      <div className='flex-1 lg:-mt-32  lg:ml-28'>
        <div className='flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4CC4C6] to-90%'>
          <img className='animate-float' src={shoe.product.src} />
        </div>
      </div>
      <div className='flex-1 space-y-6'>
        <div className='text-5xl font-black md:text-9xl'>
          {shoe.product.title}
        </div>
        <div className='font-medium md:text-xl'>{shoe.product.description}</div>
        <div className='flex space-x-6'>
          <div className='text-3xl font-extrabold md:text-6xl'>{`${shoe.product.price} $`}</div>
          <Select
            value={form.qty}
            title={'QTY'}
            options={QTY}
            className={''}
            onChange={(qty) => setForm({ ...form, qty })}
            disabled={false}
          />
          <Select
            value={form.size}
            title={'SIZE'}
            options={SIZES}
            className={''}
            onChange={(size) => setForm({ ...form, size })}
            disabled={false}
          />
        </div>
        <div className='space-x-10'>
          <button
            onClick={() => {
              addToCart(shoe.product, form.qty, form.size);
              form.qty = 0;
              form.size = 0;
            }}
            className='btn-press-anim h-14 w-44 dark:bg-white dark:text-black bg-black text-white hover:bg-gray-900 active:bg-gray-700'
          >
            Add to bag
          </button>
          <a
            href='#'
            className='text-lg font-bold underline underline-offset-4'
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
