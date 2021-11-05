import ActionInterface from "./ActionInterface";

interface DispatcherInterface {
  (...actions: ActionInterface[]) : void;
}

export default DispatcherInterface;
