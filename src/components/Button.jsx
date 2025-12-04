import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass, onClick }) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-white font-general text-xs uppercase",
        "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 shadow-lg",
        "transition-all duration-300",
        "hover:scale-105 hover:shadow-pink-500/40 hover:ring-2 hover:ring-pink-400",
        containerClass
      )}
      onClick={onClick}
    >
      {leftIcon && (
        <span className="mr-2 transition-transform duration-300 group-hover:scale-125 group-hover:text-pink-300">
          {leftIcon}
        </span>
      )}

      <span className="relative inline-flex overflow-hidden">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 text-pink-300">
          {title}
        </div>
      </span>

      {rightIcon && (
        <span className="ml-2 transition-transform duration-300 group-hover:scale-125 group-hover:text-pink-300">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
