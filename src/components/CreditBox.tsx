interface CreditBoxProps {
  icons: JSX.Element[];
  link: string;
  linkText: string;
}

const CreditBox : React.FC<CreditBoxProps> = (props) => {
  return (
    <div className="flex justify-center items-center space-x-1 text-white font-mono ">
      <span>Made with</span>
      {props.icons.map((icon, index) => (<span key={index}>{icon}</span>) )}
      <span>by</span>
      <a
        href={props.link}
        className="underline outline-none ring-hf"
      >
        {props.linkText}
      </a>
    </div>
  );
};

export default CreditBox;
