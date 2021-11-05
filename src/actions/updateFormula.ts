import { UPDATE_FORMULA } from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const updateFormula : ActionCreatorInterface<string> = (value) => {
  return {
    type: UPDATE_FORMULA,
    payload: {
      formula: value
    }
  }
}

export default updateFormula;
