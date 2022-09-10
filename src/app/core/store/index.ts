import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
} from '@ngrx/store';
import * as custom from './custom/custom.reducer';
import * as screen from './screen/screen.reducer';

export interface State {
  custom: custom.State;
  screen: screen.State;
}

export const reducers: ActionReducerMap<State> = {
  custom: custom.reducer,
  screen: screen.reducer,
};

export const selectCustomState =
  createFeatureSelector<State['custom']>('custom');

export const selectScreenState =
  createFeatureSelector<State['screen']>('screen');

export const metaReducers: MetaReducer<State>[] = [];
