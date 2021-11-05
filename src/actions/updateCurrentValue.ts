import { UPDATE_CURRENT_VALUE } from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const updateCurrentValue : ActionCreatorInterface<string> = (value) => {
  return {
    type: UPDATE_CURRENT_VALUE,
    payload: {
      currentValue: value
    }
  }
}

export default updateCurrentValue;
