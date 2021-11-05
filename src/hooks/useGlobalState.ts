import { GlobalContext } from '../Store';
import { useContext } from 'react';
import StateInterface from '../interfaces/StateInterface';
import DispatcherInterface from '../interfaces/DispatcherInterface';

interface useGlobalStateInterface {
  () : [StateInterface, DispatcherInterface];
}

const useGlobalState : useGlobalStateInterface = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const dispatcher : DispatcherInterface = (...actions) => {
    actions.forEach(action => {
      dispatch(action);
    });
  }

  return [state, dispatcher];
};

export default useGlobalState;
