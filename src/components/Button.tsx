import { ReactElement } from "react";

interface ButtonInterface {
  ({ children, className, onClick } : {
    children: any,
    className?: string,
    onClick?: () => void,
  }) : ReactElement;
}

export const Button : ButtonInterface = ({ children, className, onClick }) => {
  return (
    <button
      className={`flex justify-center items-center px-1 py-5 border-2 rounded ring-hf font-semibold text-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
