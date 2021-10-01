import { createFeatureSelector, createSelector, select } from "@ngrx/store";
import { ITodoState, selectAll, TODO_STATE_KEY } from "./todo.reducer";
import { Observable, pipe } from "rxjs";
import { filter, map } from "rxjs/operators";
import { MemoizedSelector } from "@ngrx/store/src/selector";
import { ITodo } from "../../shared/models/todo.model";

export const selectTodoState: MemoizedSelector<object, ITodoState> = createFeatureSelector<ITodoState>(TODO_STATE_KEY);

export const selectTodos: MemoizedSelector<ITodoState, ITodo[]> = createSelector(
  selectTodoState,
  selectAll,
);

export const selectTodoLoadingComplete = pipe(
  select(selectTodoState),
  map(({ loading }) => !loading),
  filter<boolean>(Boolean)
);
