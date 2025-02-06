import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TodoManager {
  baseUrl: string = 'https://localhost:5001';
  httpClient: HttpClient = inject(HttpClient);

  getTodos() {
    this.httpClient.get(`${this.baseUrl}/todo/all`).subscribe((data) => {
      console.log(data);
    });
  }
}
