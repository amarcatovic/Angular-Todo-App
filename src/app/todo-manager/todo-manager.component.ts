import { Component, Output, EventEmitter } from '@angular/core';
import Todo from '../models/Todo';

@Component({
  selector: 'app-todo-manager',
  templateUrl: './todo-manager.component.html',
  styleUrls: ['./todo-manager.component.css']
})
export class TodoManagerComponent {
  
  title: string;
  description: string;

  todoError: boolean = false;
  newTodoAdded: boolean = false;

  @Output() todoAdded = new EventEmitter<Todo>();

  onCreateTodoButtonClick(){
    if(this.title === '' || this.description === '')
    {
      this.todoError = true;
    }
    else
    {
      const newTodo: Todo = new Todo(1, this.title, this.description, false, new Date().toLocaleString());
      this.todoAdded.emit(newTodo);
      this.onClearButtonClicked();
      this.newTodoAdded = true;
      setTimeout(_ => this.newTodoAdded = false, 3000);
    }
  }

  onClearButtonClicked(){
    this.title = '';
    this.description = '';
    this.todoError = false;
  }

}
