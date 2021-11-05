import { MouseEventHandler, ReactElement } from "react";
import resetState from "../actions/resetState";
import updateEvaluated from "../actions/updateEvaluated";
import useGlobalState from "../hooks/useGlobalState";
import CalculatorFormula from "./CalculatorFormula";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";
import updateCurrentValue from "../actions/updateCurrentValue";
import updatePreviousValue from "../actions/updatePreviousValue";
import updateFormula from "../actions/updateFormula";
import { IS_ENDS_WITH_NEGATIVE_SIGN, IS_ENDS_WITH_OPERATOR, IS_OPERATOR } from "../configs/REGEX";
import replaceSignsIntoOperators from "../utilities/replaceSignsIntoOperators";
import replaceOperatorsIntoSigns from "../utilities/replaceOperatorsIntoSigns";

interface CalculatorInterface {
  () : ReactElement;
}

export const Calculator : CalculatorInterface = () => {
  const [state, dispatcher] = useGlobalState();

  const maxCurrentValueWarning = () => {
    const tempValue : string = state.currentValue;
    dispatcher(
      updateCurrentValue("Max Limit Reached")
    );

    setTimeout(() => {
      dispatcher(updateCurrentValue(tempValue));
    }, 1000);
  }

  const handleReset : MouseEventHandler<HTMLButtonElement> = () => {
    dispatcher(resetState());
  };

  const handleNumber : MouseEventHandler<HTMLButtonElement> = (e) => {
    if (! state.currentValue.includes("Limit")) {
      const value = e.currentTarget.value;

      if (state.currentValue.length >= 21) {
        maxCurrentValueWarning();
        return;
      }

      if (state.evaluated) {
        dispatcher(
          updateEvaluated(false),
          updateCurrentValue(value),
          updateFormula(value),
        );
      } else {
        dispatcher(
          updateCurrentValue(
            (state.currentValue === '0' || IS_OPERATOR.test(state.currentValue))
              ? value
              : state.currentValue + value
          ),
          updateFormula(
            (state.currentValue === '0' && value === '0')
              ? state.formula === ''
                ? value
                : state.formula
              : /([^.0-9]0|^0)$/.test(state.formula)
                ? state.formula.slice(0, -1) + value
                : state.formula + value
          ),
        );
      }
    }
  };

  const handleOperator : MouseEventHandler<HTMLButtonElement> = (e) => {
    if (! state.currentValue.includes('Limit')) {
      const value = e.currentTarget.value;

      if (state.evaluated) {
        dispatcher(
          updateEvaluated(false),
          updateCurrentValue(value),
          updateFormula(state.previousValue + value),
        );
        return;
      }

      else if (! IS_ENDS_WITH_OPERATOR.test(state.formula)) {
        dispatcher(
          updateCurrentValue(value),
          updatePreviousValue(state.formula),
          updateFormula(state.formula + value),
        );
        return;
      }

      else if (! IS_ENDS_WITH_NEGATIVE_SIGN.test(state.formula)) {
        dispatcher(updateFormula(
          (IS_ENDS_WITH_NEGATIVE_SIGN.test(state.formula + value)
            ? state.formula
            : state.previousValue
          ) + value
        ))
        return;
      }

      else if (value !== '-') {
        dispatcher(updateFormula(state.previousValue + value));
        return;
      }
    }
  }

  const handleDecimal : MouseEventHandler<HTMLButtonElement> = () => {
    if (state.evaluated) {
      dispatcher(
        updateEvaluated(false),
        updateCurrentValue("0."),
        updatePreviousValue("0."),
        updateFormula("0.")
      );
      return;
    }

    if (
      !state.currentValue.includes(".") &&
      !state.currentValue.includes('Limit')
    ) {
      if (state.currentValue.length >= 21) {
        maxCurrentValueWarning();
        return;
      }

      if (
        IS_ENDS_WITH_OPERATOR.test(state.formula) ||
        (state.currentValue === '0' && state.formula === '')
      ) {
        dispatcher(
          updateCurrentValue("0."),
          updateFormula(state.formula + "0."),
        );
      } else {
        dispatcher(
          updateCurrentValue(state.formula.match(/(-?\d+\.?\d*)$/)![0] + '.'),
          updateFormula(state.formula + "."),
        );
      }
    }
  };

  const handleEvaluate : MouseEventHandler<HTMLButtonElement> = () => {
    if (
      ! state.evaluated &&
      ! state.currentValue.includes('Limit') &&
      ! state.formula.includes('NaN')
    ) {
      let expression = state.formula;
      while (IS_ENDS_WITH_OPERATOR.test(expression)) {
        expression = expression.slice(0, -1);
      }

      expression = replaceSignsIntoOperators(expression);

      // eslint-disable-next-line no-eval
      const answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;

      dispatcher(
        updateCurrentValue(answer.toString()),
        updateFormula(replaceOperatorsIntoSigns(expression) + '=' + answer),
        updatePreviousValue(answer.toString()),
        updateEvaluated(true)
      );
    }
  }

  return (
    <div className="container">
      <div className="w-full bg-black px-1 py-2 space-y-1 rounded bg-opacity-50 overflow-hidden">
        <CalculatorFormula value={state.formula} />
        <CalculatorDisplay value={state.currentValue} />
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
