import { Action, createReducer, on } from "@ngrx/store";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { IUser } from "../../shared/models/user.model";
import { USERS_ACTIONS } from "../actions/users.actions";

export const USER_STATE_KEY = 'user';

export interface IUserState extends EntityState<IUser> {
  selectedUserId: number[];
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>({
  selectId: ({ id }) => id
});

const initialState: IUserState = adapter.getInitialState({
  selectedUserId: [],
  loading: false,
  error: false,
  errorMessage: '',
});

const _userReducer = createReducer<IUserState>(initialState,
  on(USERS_ACTIONS.loadUsers, (state) => (
    {
      ...state,
      loading: true,
      error: false,
      errorMessage: '',
    }
  )),
  on(USERS_ACTIONS.loadUsersSuccess, (state, { payload }) => adapter.setAll(payload, { ...state, loading: false })),
  on(USERS_ACTIONS.loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    error: true,
    errorMessage: payload as string
  }))
);

export const userReducer = (state: IUserState | undefined, action: Action) => _userReducer(state, action);

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;
