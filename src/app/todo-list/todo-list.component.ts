import { TodoService } from './../services/todo.service';
import { Component } from '@angular/core';
import Todo from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  
  todos: Todo[];

  constructor(private todoService: TodoService) {
      this.todos = todoService.todos;
  }
}
