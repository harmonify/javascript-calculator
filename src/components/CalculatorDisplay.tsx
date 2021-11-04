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
      className="text-right text-4xl font-semibold font-mono"
    >
      {value}
    </div>
  );
};

export default CalculatorDisplay;
