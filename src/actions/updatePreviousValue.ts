import ACTIONS from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const updatePreviousValue : ActionCreatorInterface<string> = (value) => {
  return {
    type: ACTIONS.UPDATE_PREVIOUS_VALUE,
    payload: {
      previousValue: value
    }
  }
}

export default updatePreviousValue;
