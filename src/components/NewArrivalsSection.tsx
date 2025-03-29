import Card from './Card';
import { ItemCart } from '../constant';

type ItemsProps = {
  items: ItemCart[];
  onClickCard: (item: ItemCart) => void;
};

const NewArrivalsSection: React.FC<ItemsProps> = ({ items, onClickCard }) => {
  return (
    <div className='mt-20'>
      <div className='flex-center'>
        <div className="dark:text-white bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      <div className='justify-between mt-10 grid grid-cols-1 gap-y-24 gap-x-6 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]'>
        {items.map((item: ItemCart) => (
          <Card key={item.product.id} item={item} onClick={onClickCard} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsSection;
