import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TestComponent } from "./test/test.component";
import { TodoResolver } from "./todo.resolver";

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    data: { aaaa: 555 },
    resolve: [TodoResolver],
    children: [
      {
        path: ':id',
        component: TestComponent,
        data: {aaa: 'id'}
      },
      {
        path: ':id/:number',
        component: TestComponent,
        data: {aaa: 'id+number'}
      },{
        path: ':id/:number/:id',
        component: TestComponent,
        data: {aaa: 'id+id'}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
