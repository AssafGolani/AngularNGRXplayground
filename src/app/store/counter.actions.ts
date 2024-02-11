import { Action, createAction, props } from '@ngrx/store';

// This is the new way to create an action
export const increment = createAction(
  '[Counter] Increment',
  props<{ value: number }>()
);
export const decrement = createAction(
  '[Counter] Decrement',
  props<{ value: number }>()
);

// This is the old way to create an action

// export const INCREMENT = '[Counter] Increment';
// export const DECREMENT = '[Counter] Decrement';

// export class IncrementAction implements Action {
//   readonly type: string = INCREMENT;

//   constructor(public value: number) {}
// }

// export class DecrementAction implements Action {
//   readonly type: string = DECREMENT;

//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction | DecrementAction;
