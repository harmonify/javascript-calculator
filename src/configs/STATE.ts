import StateInterface from '../interfaces/StateInterface';

export const INITIAL_STATE : StateInterface = {
  numberInput: [],
  operatorInput: [],
  numberOutput: null,
  outputLabel: '',
};

export * as default from './STATE';
