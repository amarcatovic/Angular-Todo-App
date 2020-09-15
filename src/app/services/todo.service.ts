import { Injectable, EventEmitter } from '@angular/core';
import Todo from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoScreen = new EventEmitter<string>();

  todos: Todo[] = [];

  constructor() { 
    this.todos.push(new Todo(1, 'Title', 'Description', false, new Date().toDateString())); 
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }
}
