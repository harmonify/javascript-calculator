import ACTIONS from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const updateEvaluated : ActionCreatorInterface<boolean> = (bool) => {
  return {
    type: ACTIONS.UPDATE_EVALUATED,
    payload: {
      evaluated: bool,
    }
  };
}

export default updateEvaluated;
