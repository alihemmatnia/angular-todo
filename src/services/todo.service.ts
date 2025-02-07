import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class TodoManager {
  baseUrl: string = 'http://localhost:3000';
  httpClient: HttpClient = inject(HttpClient);

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  addTodo(todo: Todo) {
    this.httpClient.post(`${this.baseUrl}/todos`, todo).subscribe();
  }

  deleteTodo(id: string) {
    this.httpClient.delete(`${this.baseUrl}/todos/${id}`).subscribe();
  }
}
