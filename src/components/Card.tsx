import { ReactElement } from "react";

interface CardInterface {
  (props : {
    children: ReactElement,
    className?: string,
    title?: any | any[]
  }) : ReactElement;
}

const Card : CardInterface = ({children, className, title}) => {
  return (
    <div className={`card bg-opacity-60 bg-black border-white border rounded-xl px-6 py-6 ${className}`}>
      <div className="card-header flex justify-center items-center space-x-1">
        {title && title.map((t : any, i : number) => (
          <span
            key={i}
            className={t.className}>
              {t.content}
          </span>
        ))}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
