import { Component, OnInit } from '@angular/core';
import { TodoPresenter } from "./todo.presenter";
import { Observable } from "rxjs";
import { ITodo } from "../shared/models/todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  todos$: Observable<ITodo[]> = this.provider.todos$;
  constructor(private readonly provider: TodoPresenter) { }

  ngOnInit(): void {
  }

}
