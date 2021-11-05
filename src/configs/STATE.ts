import StateInterface from '../interfaces/StateInterface';

export const INITIAL_STATE : StateInterface = {
  evaluated: true,
  formula: '',
  previousValue: '0',
  currentValue: '0',
};

export * as default from './STATE';
