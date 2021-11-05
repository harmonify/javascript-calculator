import { ReactElement } from "react";

interface CalculatorFormulaInterface {
  (props : {
    value: string
  }) : ReactElement;
}

const CalculatorFormula : CalculatorFormulaInterface = ({value}) => {
  return (
    <div
      className="h-4 text-right font-semibold font-mono"
    >
      {value}
    </div>
  );
};

export default CalculatorFormula;
