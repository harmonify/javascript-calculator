import { GlobalContext } from '../Store';
import { useContext } from 'react';
import StateInterface from '../interfaces/StateInterface';
import DispatchType from '../interfaces/DispatchType';

interface useGlobalStateInterface {
  () : [StateInterface, DispatchType];
}

const useGlobalState : useGlobalStateInterface = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const multiDispatch : DispatchType = (actions) => {
    if (Array.isArray(actions)) {
      actions.forEach(action => {
        dispatch(action);
      });
    } else {
      dispatch(actions);
    }
  };

  return [state, multiDispatch];
};

export default useGlobalState;
