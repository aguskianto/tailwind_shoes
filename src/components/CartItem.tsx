import { ItemDetail, ItemSummary } from '../constant';
import Select from './Select';
import { CiTrash } from 'react-icons/ci';
import { QTY, SIZES } from '../constant';

type Props = {
  // item: ItemSummary;
  // item: ItemCart;
  product: ItemDetail;
  qty: number;
  size: number;
  onRemoveItem: (product: ItemSummary) => void;
};

// qty, size
const CartItem: React.FC<Props> = ({ product, qty, size, onRemoveItem }) => {
  // console.log(product);
  // console.log(qty);
  // console.log(size);

  return (
    <div className='dark:bg-transparent dark:hover:bg-night-50 dark:text-white p-2 bg-gray-50 hover:bg-[#DAFFA2] cursor-pointer'>
      <div className='flex space-x-2'>
        <img className='h-24' src={product.src} />
        <div className='space-y-2'>
          <div className='font-bold'>{product.title}</div>
          <div className='text-sm text-gray-400'>{product.description}</div>
        </div>
        <div className='font-bold'>{product.price}</div>
      </div>

      <div className='flex justify-between pl-32'>
        <div className='flex space-x-6'>
          <div>
            <div className='font-bold'>SIZE</div>
            <Select
              value={size}
              title=''
              options={SIZES}
              className={'w-16 p-1'}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          <div>
            <div className='font-bold'>QTY</div>
            <Select
              value={qty}
              title=''
              options={QTY}
              className={'w-16 p-1'}
              onChange={() => {}}
              disabled={true}
            />
          </div>
        </div>
        <button>
          <CiTrash
            size={25}
            className='dark:text-white text-black'
            onClick={() => onRemoveItem(product)}
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
