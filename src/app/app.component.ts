import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TodoManager } from '../services/todo.service';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    RouterOutlet,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatListModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todos: Todo[] = [];
  taskControl = new FormControl('');
  todoService: TodoManager = inject(TodoManager);

  constructor() {
    this.getTodos();
  }

  addTodo() {
    if (this.taskControl.value?.trim()) {
      this.todoService.addTodo({
        todoTitle: this.taskControl.value,
        completed: false,
        id: '',
      });
      this.getTodos();
      this.taskControl.reset();
    }
  }

  getTodos() {
    this.todoService.getTodos().subscribe((res: Todo[]) => {
      this.todos = res;
    });
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id);
    this.getTodos();
  }
}
