import { ItemCart } from '../constant';
import CartItem from './CartItem';

type ItemCartProps = {
  data: ItemCart[];
  onRemoveItem: (productId: number) => void;
};

const Cart: React.FC<ItemCartProps> = ({ data, onRemoveItem }) => {
  return (
    <>
      <h2 className='dark:text-white mb-5 text-4xl font-bold'>Cart</h2>
      <ul className='space-y-5'>
        {data.map((item) => (
          <li key={item.product.id}>
            {
              <CartItem
                product={item.product}
                qty={item.qty}
                size={item.size}
                onRemoveItem={() => onRemoveItem(item.product.id)}
              />
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
