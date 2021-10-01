import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { ITodo } from "../../shared/models/todo.model";
import { Action, createReducer, on } from "@ngrx/store";
import { TODO_ACTIONS } from "./todo.action";

export interface ITodoState extends EntityState<ITodo> {
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

export const TODO_STATE_KEY = 'todo';

const adapter: EntityAdapter<ITodo> = createEntityAdapter<ITodo>({
  selectId: ({ id }) => id,
  sortComparer: (a, b) => Number(a.completed) - Number(b.completed)
});

const initialState: ITodoState = adapter.getInitialState({
  errorMessage: '',
  error: false,
  loading: false,
});

const reducer = createReducer<ITodoState>(initialState,
  on(TODO_ACTIONS.getTodos, (state) => ({ ...state, loading: true, error: false })),
  on(TODO_ACTIONS.getTodosSuccess, (state, { payload }) => adapter.setAll(payload, {
    ...state,
    loading: false,
    error: false,
  })),
  on(TODO_ACTIONS.getTodosError, (state, { payload }) => ({
    ...state,
    loading: false,
    error: true,
    errorMessage: payload
  })),
);

export const todoReducer = (state: ITodoState | undefined, action: Action) => reducer(state, action);
export const {
  selectAll
} = adapter.getSelectors()
