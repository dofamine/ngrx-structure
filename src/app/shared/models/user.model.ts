export interface IUser {
  id: number;
  email: string;
  name: string;
}

export class UserModel implements IUser {
  id: number;
  email: string;
  name: string;

  constructor(data: IUser) {
    this.email = data.email ?? '';
    this.id = data.id ?? null;
    this.name = data.name ?? '';
  }
}

export const userFactory = (user: any): UserModel => user ? new UserModel(user) : {} as UserModel;
