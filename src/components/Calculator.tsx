import { ReactElement } from "react";
import resetState from "../actions/resetState";
import updateEvaluatedState from "../actions/updateEvaluatedState";
import useGlobalState from "../hooks/useGlobalState";
import CalculatorFormula from "./CalculatorFormula";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";

interface CalculatorInterface {
  () : ReactElement;
}

export const Calculator : CalculatorInterface = () => {
  const [state, dispatch] = useGlobalState();

  const handleReset = () => {
    dispatch(resetState());
  };

  const handleNumber = () => {
    if (state.evaluated) {
      dispatch(updateEvaluatedState(false));
    } else {

    }
  }

  const handleOperator = () => {
    return 'lol'
  }

  const handleDecimal = () => {
    if (state.evaluated) {
      dispatch(updateEvaluatedState(false));

      return;
    }
  }

  const handleEvaluate = () => {

  }

  return (
    <div className="container">
      <div className="h-18 w-full bg-black px-1 py-2 space-y-1 rounded bg-opacity-50">
        <CalculatorFormula value={state.formula} />
        <CalculatorDisplay value={state.value} />
      </div>
      <CalculatorButtons
        handleDecimal={handleDecimal}
        handleEvaluate={handleEvaluate}
        handleNumber={handleNumber}
        handleOperator={handleOperator}
        handleReset={handleReset}
      />
    </div>
  )
};
