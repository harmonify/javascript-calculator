import { ReactElement } from "react";

interface CreditBoxInterface {
  (props: {
    icons: JSX.Element[];
    link: string;
    linkText: string;
  }) : ReactElement;
}

const CreditBox : CreditBoxInterface = ({icons, link, linkText}) => {
  return (
    <div className="flex justify-center items-center space-x-1 text-white font-mono ">
      <span>Made with</span>
      {icons.map((icon, index) => (<span key={index}>{icon}</span>) )}
      <span>by</span>
      <a
        href={link}
        className="underline outline-none ring-hf"
      >
        {linkText}
      </a>
    </div>
  );
};

export default CreditBox;
