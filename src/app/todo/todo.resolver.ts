import { Injectable } from '@angular/core';
import {
  Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TodoPresenter } from "./todo.presenter";
import { Store } from "@ngrx/store";
import { selectTodoLoadingComplete } from "./store/todo.selector";
import { first } from "rxjs/operators";

@Injectable()
export class TodoResolver implements Resolve<Observable<boolean>> {

  constructor(private readonly todoPresenter: TodoPresenter,
              private readonly store : Store) {
  }

  resolve(): Observable<boolean> {
    this.todoPresenter.loadTodos();
    return this.store.pipe(selectTodoLoadingComplete, first());
  }
}
