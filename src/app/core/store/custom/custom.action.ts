import { createAction, props } from '@ngrx/store';

export const detailType = {
  mainMenu: '[status of main manu]',
};

export const mainMenuToggleFlagHandler = createAction(
  detailType.mainMenu,
  props<{ flag: boolean }>()
);
