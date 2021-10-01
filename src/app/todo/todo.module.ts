import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TestComponent } from './test/test.component';
import { StoreModule } from "@ngrx/store";
import { TODO_STATE_KEY, todoReducer } from "./store/todo.reducer";
import { TodoResolver } from "./todo.resolver";
import { TodoService } from "./todo.service";
import { EffectsModule } from "@ngrx/effects";
import { TodoPresenter } from "./todo.presenter";
import { TodoEffect } from "./store/todo.effect";


@NgModule({
  declarations: [
    TodoComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature(TODO_STATE_KEY, todoReducer),
    EffectsModule.forFeature([TodoEffect]),
  ],
  providers: [TodoResolver, TodoService, TodoPresenter]
})
export class TodoModule { }
