import { useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuanity from './UpdateItemQuanity';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="border-b border-stone-200 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Pizza name and quantity */}
        <p className="flex-1 text-sm">
          {quantity}&times; {name}
        </p>

        {/* Middle: Price */}
        <p className="w-16 text-right text-sm font-bold">
          {formatCurrency(totalPrice)}
        </p>

        {/* Middle-right: +/- buttons */}
        <div className="flex items-center gap-2">
          <UpdateItemQuanity
            currentQuantity={currentQuantity}
            pizzaId={pizzaId}
          />
        </div>

        {/* Right: Delete */}
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
