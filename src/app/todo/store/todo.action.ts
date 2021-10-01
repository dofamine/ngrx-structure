import { createHTTPActions } from "../../store/utils";
import { ITodo } from "../../shared/models/todo.model";

const [getTodos, getTodosSuccess , getTodosError] = createHTTPActions<void, ITodo[], string>('[TODO] Get Todo')

export const TODO_ACTIONS = {
  getTodos,
  getTodosSuccess,
  getTodosError
}
