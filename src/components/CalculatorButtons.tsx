import { ReactElement } from "react";
import { DivideIcon, EqualIcon, MinusIcon, MultiplyIcon, PlusIcon } from "../configs/ICONS";
import { Button } from "./Button";

interface CalculatorButtonsInterface {
  (props: {
    handleDecimal: () => void;
    handleEvaluate: () => void;
    handleNumber: () => void;
    handleOperator: () => void;
    handleReset: () => void;
  }) : ReactElement;
}

const CalculatorButtons : CalculatorButtonsInterface = ({
  handleDecimal,
  handleEvaluate,
  handleNumber,
  handleOperator,
  handleReset,
}) => {
  return (
    <div className="w-full grid grid-cols-4 gap-1">
        <Button
          id="clear"
          className="col-span-2 btn-ac"
          onClick={handleReset}
        >
          AC
        </Button>

        <Button
          id="divide"
          className="btn-operator"
          onClick={handleOperator}
          value="/"
        >
          {DivideIcon}
        </Button>

        <Button
          id="multiply"
          className="btn-operator"
          onClick={handleOperator}
          value="*"
        >
          {MultiplyIcon}
        </Button>

        <Button
          id="seven"
          className="btn-number"
          onClick={handleNumber}
          value="7"
        >
          7
        </Button>

        <Button
          id="eight"
          className="btn-number"
          onClick={handleNumber}
          value="8"
        >
          8
        </Button>

        <Button
          id="nine"
          className="btn-number"
          onClick={handleNumber}
          value="9"
        >
          9
        </Button>

        <Button
          id="subtract"
          className="btn-operator"
          onClick={handleOperator}
          value="-"
        >
          {MinusIcon}
        </Button>

        <Button
          id="four"
          className="btn-number"
          onClick={handleNumber}
          value="4"
        >
          4
        </Button>

        <Button
          id="five"
          className="btn-number"
          onClick={handleNumber}
          value="5"
        >
          5
        </Button>

        <Button
          id="six"
          className="btn-number"
          onClick={handleNumber}
          value="6"
        >
          6
        </Button>

        <Button
          id="add"
          className="btn-operator"
          onClick={handleOperator}
          value="+"
        >
          {PlusIcon}
        </Button>

        <Button
          id="one"
          className="btn-number"
          onClick={handleNumber}
          value="1"
        >
          1
        </Button>

        <Button
          id="two"
          className="btn-number"
          onClick={handleNumber}
          value="2"
        >
          2
        </Button>

        <Button
          id="three"
          className="btn-number"
          onClick={handleNumber}
          value="3"
        >
          3
        </Button>

        <Button
          id="equals"
          className="row-span-2 btn-equal"
          onClick={handleEvaluate}
          value="="
        >
          {EqualIcon}
        </Button>

        <Button
          id="zero"
          className="col-span-2 btn-number"
          onClick={handleNumber}
          value="0"
        >
          0
        </Button>

        <Button
          id="decimal"
          className="btn-number"
          onClick={handleDecimal}
          value="."
        >
          .
        </Button>
      </div>
  )
}

export default CalculatorButtons;
