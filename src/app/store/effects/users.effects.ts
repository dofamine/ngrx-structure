import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { USERS_ACTIONS } from "../actions/users.actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { UserService } from "../../core/user.service";


@Injectable()
export class UsersEffects {

  constructor(private readonly actions$: Actions,
              private readonly userService: UserService) {
  }

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(USERS_ACTIONS.loadUsers),
    switchMap(() => this.userService.getUsers()),
    map(USERS_ACTIONS.loadUsersSuccess),
    catchError(() => of(USERS_ACTIONS.loadUsersError('error')))
    )
  );
}
