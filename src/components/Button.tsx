import { MouseEventHandler, ReactElement } from "react";

interface ButtonInterface {
  (props: {
    children: any,
    className?: string,
    id?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    value?: string,
  }) : ReactElement;
}

export const Button : ButtonInterface = ({ children, className, id, onClick, value }) => {
  return (
    <button
      id={id}
      className={`flex justify-center items-center px-1 py-5 border-2 rounded ring-hf font-semibold text-xl ${className}`}
      onClick={onClick}
      value={value}
    >
      {children}
    </button>
  );
};
