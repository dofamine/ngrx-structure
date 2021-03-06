import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeeComponent } from "./fee/fee.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeeComponent
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
