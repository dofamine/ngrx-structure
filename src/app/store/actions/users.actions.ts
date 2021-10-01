import { createHTTPActions } from "../utils";
import { IUser } from "../../shared/models/user.model";

const [loadUsers, loadUsersSuccess, loadUsersError] = createHTTPActions<void, IUser[], void | string>('[Users] Load Users');

export const USERS_ACTIONS = {
  loadUsers, loadUsersSuccess, loadUsersError
}
