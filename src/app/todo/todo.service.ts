import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DataApiService } from "../core/data-api.service";
import { ITodo, todoFactory } from "../shared/models/todo.model";

@Injectable()
export class TodoService {

  constructor(private readonly apiService: DataApiService) {
  }

  getTodos(): Observable<ITodo[]> {
    return this.apiService.getTodos().pipe(
      map(todo => todo.map(todoFactory))
    )
  }
}
