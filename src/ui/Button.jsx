import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-600 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ';

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 py-2 md:px-4 md:py-2.5 text-xs ',
    round:
      'inline-flex items-center justify-center w-10 h-10 text-lg font-bold text-stone-800 bg-stone-200 rounded-full hover:bg-stone-300 transition-colors duration-300 focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed',
    secondary:
      'inline-block text-sm rounded-full px-4 py-2.5 md:px-6 md:py-4 border-stone-300 border-2  px-4 py-3 font-semibold tracking-wide text-stone-400 uppercase transition-colors hover:text-stone-800 focus:text-stone-800 duration-600 hover:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none focus:bg-stone-300 disabled:cursor-not-allowed md:px-6 md:py-3.5',
    danger:
      'inline-block text-xs rounded-full px-4 py-2 md:px-4 md:py-2.5 font-semibold tracking-wide uppercase text-white bg-red-600 hover:bg-red-500 transition-colors duration-300 focus:ring focus:ring-red-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        to={to}
        className={styles[type]}
        disabled={disabled}
      >
        {children}
      </button>
    );

  return (
    <button to={to} className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
