import ACTIONS from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const updateFormula : ActionCreatorInterface<string> = (value) => {
  return {
    type: ACTIONS.UPDATE_FORMULA,
    payload: {
      formula: value
    }
  }
}

export default updateFormula;
