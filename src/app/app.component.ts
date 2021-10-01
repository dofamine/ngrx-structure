import { Component, OnInit } from '@angular/core';
import { AppPresenter } from "./app.presentor";
import { Observable } from "rxjs";
import { IUser } from "./shared/models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  viewProviders: [AppPresenter]
})
export class AppComponent {
  usersIds$: Observable<IUser[]> = this.provider.usersIds$;
  allUsers$: Observable<IUser[]> = this.provider.allUsers$;
  allUsersEntities$: Observable<IUser[]> = this.provider.allUsersEntities$;
  totalUsers$: Observable<IUser[]> = this.provider.totalUsers$;
  routerSelector$: Observable<IUser[]> = this.provider.routerSelector$;
  selectCurrentRoute$$: Observable<IUser[]> = this.provider.selectCurrentRoute$;
  selectQueryParams$$: Observable<IUser[]> = this.provider.selectQueryParams$;
  selectQueryParam$$: Observable<IUser[]> = this.provider.selectQueryParam$;
  selectRouteParams$$: Observable<IUser[]> = this.provider.selectRouteParams$;
  selectRouteParam$$: Observable<IUser[]> = this.provider.selectRouteParam$;
  selectRouteData$$: Observable<IUser[]> = this.provider.selectRouteData$;
  selectUrl$$: Observable<IUser[]> = this.provider.selectUrl$;

  constructor(private readonly provider: AppPresenter) {
  }

  getUsers() {
    this.provider.loadUsers();
  }
}
