import { Injectable } from '@angular/core';
import { DataApiService } from "./data-api.service";
import { Observable } from "rxjs";
import { IUser, userFactory } from "../shared/models/user.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly apiService: DataApiService) { }

  getUsers(): Observable<IUser[]> {
    return this.apiService.getUsers().pipe(
      map(users => users.map(userFactory))
    )
  }
}
