import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-9">
      <LinkButton
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        to="/menu"
      >
        &larr; Back to menu
      </LinkButton>

      <p className="mt-10 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
