import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { TODO_ACTIONS } from "./store/todo.action";
import { selectTodos } from "./store/todo.selector";
import { Observable } from "rxjs";
import { ITodo } from "../shared/models/todo.model";


@Injectable()
export class TodoPresenter {
  // @ts-ignore
  todos$: Observable<ITodo[]> = this.store.select(selectTodos);

  constructor(private readonly store: Store) {
  }

  loadTodos(): void {
    this.store.dispatch(TODO_ACTIONS.getTodos());
  }
}
