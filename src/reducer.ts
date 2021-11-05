import ACTIONS from "./configs/ACTIONS";
import { INITIAL_STATE } from "./configs/STATE";
import ActionInterface from "./interfaces/ActionInterface";
import StateInterface from "./interfaces/StateInterface";

interface ReducerInterface {
  (state: StateInterface, action: ActionInterface): StateInterface;
}

const reducer : ReducerInterface = (state, action)  => {
  switch (action.type) {
    case ACTIONS.UPDATE_CURRENT_VALUE:
      return {
        ...state,
        currentValue: action.payload.currentValue,
      };
    case ACTIONS.UPDATE_PREVIOUS_VALUE:
      return {
        ...state,
        previousValue: action.payload.previousValue,
      }
    case ACTIONS.UPDATE_EVALUATED:
      return {
        ...state,
        evaluated: action.payload.evaluated,
      }
    case ACTIONS.UPDATE_FORMULA:
      return {
        ...state,
        formula: action.payload.formula,
      }
    case ACTIONS.RESET_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default reducer;
