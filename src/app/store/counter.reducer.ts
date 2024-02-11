import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value)
);

// This old aproach is actually what createReducer is doing under the hood
/* export function counterReducerOld(
  state = initialState,
  action: CounterActions | Action
) {
  if (action.type === INCREMENT) {
    return state + (action as IncrementAction).value;
  }
  if (action.type === DECREMENT) {
    return state - (action as DecrementAction).value;
  }
  return state;
} */
