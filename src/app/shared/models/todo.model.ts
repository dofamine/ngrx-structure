export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export class TodoModel implements ITodo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;

  constructor(data: ITodo) {
    this.title = data.title ?? '';
    this.userId = data.userId ?? null;
    this.id = data.id ?? null;
    this.completed = data.completed ?? false;
  }
}

export const todoFactory = (todo: any): TodoModel => todo ? new TodoModel(todo) : {} as TodoModel;
