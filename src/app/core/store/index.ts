import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
} from '@ngrx/store';
import * as custom from './custom/custom.reducer';

export interface State {
  custom: custom.State;
}

export const reducers: ActionReducerMap<State> = {
  custom: custom.reducer,
};

export const selectCustomState =
  createFeatureSelector<State['custom']>('custom');

export const metaReducers: MetaReducer<State>[] = [];
