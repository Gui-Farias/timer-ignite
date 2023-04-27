import { Cycle } from './reducers'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUOT_CURRENT_CYCLE = 'INTERRUOT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISIHED = 'MARK_CURRENT_CYCLE_AS_FINISIHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleasFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISIHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUOT_CURRENT_CYCLE,
  }
}
