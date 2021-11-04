import { ReactElement } from "react";

interface CalculatorFormulaInterface {
  (props : {
    value: string
  }) : ReactElement;
}

const CalculatorFormula : CalculatorFormulaInterface = ({value}) => {
  return (
    <div
      id="display"
      className="text-right font-semibold font-mono"
    >
      &nbsp;{value}
    </div>
  );
};

export default CalculatorFormula;
