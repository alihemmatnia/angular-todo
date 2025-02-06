import { Component, inject } from '@angular/core';
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
  title = 'todo-app';
  tasks: { name: string; completed: boolean }[] = [];
  taskControl = new FormControl('');
  todoService: TodoManager = inject(TodoManager);

  addTask() {
    if (this.taskControl.value?.trim()) {
      this.tasks.push({ name: this.taskControl.value, completed: false });
      this.taskControl.reset();
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  getTodos() {
    this.todoService.getTodos();
  }
}
