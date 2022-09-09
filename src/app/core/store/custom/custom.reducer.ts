import { Action, createReducer, on } from '@ngrx/store';
import { mainMenuToggleFlagHandler } from './custom.action';

export interface State {
  mainMenuIsOpen: boolean | null;
}

export const initialState: State = {
  mainMenuIsOpen: false,
};

const _customReducer = createReducer(
  initialState,
  on(mainMenuToggleFlagHandler, (state, { flag }) => ({
    ...state,
    mainMenuIsOpen: flag,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return _customReducer(state, action);
}
