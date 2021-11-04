import ACTIONS from "./configs/ACTIONS";
import { INITIAL_STATE } from "./configs/STATE";
import ActionInterface from "./interfaces/ActionInterface";
import StateInterface from "./interfaces/StateInterface";

interface ReducerInterface {
  (state: StateInterface, action: ActionInterface): StateInterface;
}

const reducer : ReducerInterface = (state, action)  => {
  switch (action.type) {
    case ACTIONS.ADD_NUMBER:
      return {
        ...state,
      };
    case ACTIONS.ADD_OPERATOR: 
      return {
        ...state,
      };
    case ACTIONS.CALCULATE:
      return {
        ...state,
      };
    case ACTIONS.RESET_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default reducer;
