import { createFeatureSelector, createSelector, select } from "@ngrx/store";
import { IUserState, USER_STATE_KEY } from "../reducers/user.reducer";
import { pipe } from "rxjs";
import { IUser } from "../../shared/models/user.model";
import { map } from "rxjs/operators";
import * as fromUser from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<IUserState>(USER_STATE_KEY);

export const selectUserIds = (filterNumber: number = 0) => createSelector(
  selectUserState,
  (state) => (fromUser.selectUserIds(state) as number[]).filter((x: number) => x % filterNumber === 0)
);

export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAllUsers
);

export const selectUsersEntities = createSelector(
  selectUserState,
  fromUser.selectUserEntities
);

export const selectTotalUsers = createSelector(
  selectUserState,
  fromUser.selectUserTotal
);

export const selectLastUsers = (amountOfUsers: number) => pipe(
  select(selectAllUsers),
  map((users: IUser[]) => users.slice(amountOfUsers))
);
