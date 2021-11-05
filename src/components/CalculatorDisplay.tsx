import { ReactElement } from "react";

interface CalculatorDisplayInterface {
  (props: {
    value: string;
  }) : ReactElement;
}

const CalculatorDisplay : CalculatorDisplayInterface = ({value}) => {
  return (
    <div
      id="display"
      className="h-10 text-right text-2xl font-bold font-mono"
    >
      {value}
    </div>
  );
};

export default CalculatorDisplay;
