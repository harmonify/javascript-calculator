import ACTIONS from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const updateCurrentValue : ActionCreatorInterface<string> = (value) => {
  return {
    type: ACTIONS.UPDATE_CURRENT_VALUE,
    payload: {
      currentValue: value
    }
  }
}

export default updateCurrentValue;
