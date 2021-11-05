import { RESET_STATE } from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const resetState : ActionCreatorInterface = () => ({
  type: RESET_STATE,
});

export default resetState;
