import { Link } from 'react-router-dom';

function Button({ children, disabled, to }) {
  const className =
    'active:bg-state-400 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-600 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4';
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button to={to} className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
