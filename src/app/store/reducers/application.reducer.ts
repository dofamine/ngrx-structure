import { Action, createReducer } from "@ngrx/store";

export const APPLICATION_STATE_KEY = 'application';

export interface IApplicationState {
  pause: boolean;
}

const initialState = {} as IApplicationState;

const _applicationReducer = createReducer(initialState)

export const applicationReducer = (state: IApplicationState | undefined, action: Action) => _applicationReducer(state, action);
