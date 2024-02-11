import { createSelector } from '@ngrx/store';

export const selectCount = (state: { counter: number }) => state.counter;
export const selectDoubleCounter = createSelector(
  selectCount,
  (count) => count * 2
);
