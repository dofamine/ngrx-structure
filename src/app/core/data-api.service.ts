import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private readonly url: string = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly http: HttpClient) { }

  getUsers(): Observable<IUsersResponse[]> {
    return this.http.get<ITodoResponse[]>(`${this.url}/users`);
  }

  getTodos(): Observable<ITodoResponse[]> {
    return this.http.get<ITodoResponse[]>(`${this.url}/todos`);
  }
}

interface IUsersResponse {
  [key: string]: any
}

interface ITodoResponse {
  [key: string]: any
}
