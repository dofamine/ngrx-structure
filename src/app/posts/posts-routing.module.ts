import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { BazzComponent } from "./bazz/bazz.component";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    data: { bbbb: 1111 },
    children: [
      {
        path: ':id',
        component: BazzComponent,
      }, {
        path: ':id/:number',
        component: BazzComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
