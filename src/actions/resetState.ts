import ACTIONS from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const resetState : ActionCreatorInterface = () => ({
  type: ACTIONS.RESET_STATE,
});

export default resetState;
