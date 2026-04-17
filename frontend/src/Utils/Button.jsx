import { Children } from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className={`w-full bg-[#1b1313] text-white py-3 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-black transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
