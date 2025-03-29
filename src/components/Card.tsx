import { ItemCart } from '../constant';

type ItemProps = {
  item: ItemCart;
  onClick: (item: ItemCart) => void;
};

const Card: React.FC<ItemProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className={`max-w-lg ${item.product.className} transform transition hover:scale-105`}
    >
      <div className='p-8'>
        <div className='text-2xl font-bold'>{item.product.title}</div>
        <div className='underline underline-offset-4 font-semibold mt-10'>
          SHOP NOW +
        </div>
      </div>
      <img
        className='absolute top-5 left-[40%] h-40 w-56'
        src={item.product.src}
      />
    </div>
  );
};

export default Card;
