import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TODO_ACTIONS } from "./todo.action";
import { catchError, map, switchMap } from "rxjs/operators";
import { TodoService } from "../todo.service";
import { of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class TodoEffect {
  constructor(private readonly actions: Actions,
              private readonly todoService: TodoService) {
  }

  loadTodos$ = createEffect(() => this.actions.pipe(
      ofType(TODO_ACTIONS.getTodos),
      switchMap(() => this.todoService.getTodos()),
      map(TODO_ACTIONS.getTodosSuccess),
      catchError(() => of(TODO_ACTIONS.getTodosError))
    )
  );
}
