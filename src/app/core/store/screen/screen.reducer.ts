import { Action, createReducer, on } from '@ngrx/store';

export interface State {
  specific: {
    isSmDevice: boolean;
    isMdDevice: boolean;
    isLgDevice: boolean;
    isXlDevice: boolean;
    isXXlDevice: boolean;
  } | undefined,
  general: {
    isMobile: boolean;
    isTablet: boolean;
    isLaptop: boolean;
    isDesktop: boolean;
  } | undefined
}

export const initialState: State = {
  specific: undefined,
  general: undefined
};

const _screenReducer = createReducer(
  initialState,
);

export function reducer(state: State | undefined, action: Action) {
  return _screenReducer(state, action);
}

