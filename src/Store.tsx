import { createContext, Dispatch, useReducer } from "react";
import HOCInterface from "./interfaces/HOCInterface";
import ActionInterface from "./interfaces/ActionInterface";
import StateInterface from "./interfaces/StateInterface";
import reducer from "./reducer";
import { INITIAL_STATE } from "./configs/STATE";

interface ContextInterface {
  state: StateInterface;
  dispatch: Dispatch<ActionInterface>;
}

const GlobalContext = createContext({} as ContextInterface);

const initializeState = () => {
  return INITIAL_STATE;
};

const Store : HOCInterface = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initializeState());

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Store;
export { GlobalContext };
