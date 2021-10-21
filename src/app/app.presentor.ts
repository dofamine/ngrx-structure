import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { USERS_ACTIONS } from "./store/actions/users.actions";

import {
  routerSelector,
  selectCurrentRoute,
  selectQueryParam,
  selectQueryParams, selectRouteData, selectRouteParam, selectRouteParams, selectUrl
} from "../../../../../projects/LH/lease-hawk/src/app/core/store/selectors/router.selector";
import {
  selectAllUsers,
  selectLastUsers,
  selectTotalUsers,
  selectUserIds,
  selectUsersEntities
} from "./store/selectors/users.selector";

@Injectable()
export class AppPresenter {
  any$ = this.store.pipe(selectLastUsers(5));
  usersIds$: any = this.store.select(selectUserIds(2));
  allUsers$: any = this.store.select(selectAllUsers);
  allUsersEntities$: any = this.store.select(selectUsersEntities);
  totalUsers$: any = this.store.select(selectTotalUsers);
  routerSelector$: any = this.store.select(routerSelector);
  selectCurrentRoute$: any = this.store.select(selectCurrentRoute);
  selectQueryParams$: any = this.store.select(selectQueryParams);
  selectQueryParam$: any = this.store.select(selectQueryParam('hello'));
  selectRouteParams$: any = this.store.select(selectRouteParams);
  selectRouteParam$: any = this.store.select(selectRouteParam('number'));
  selectRouteData$: any = this.store.select(selectRouteData);
  selectUrl$: any = this.store.select(selectUrl);

  constructor(private readonly store: Store) {
  }

  loadUsers(): void {
    this.store.dispatch(USERS_ACTIONS.loadUsers());
  }
}
