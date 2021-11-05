import { UPDATE_EVALUATED } from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const updateEvaluated : ActionCreatorInterface<boolean> = (bool) => {
  return {
    type: UPDATE_EVALUATED,
    payload: {
      evaluated: bool,
    }
  };
}

export default updateEvaluated;
