import { TodoService } from './../services/todo.service';
import { Component } from '@angular/core';
import Todo from '../models/Todo';
import { CanComponentDeactivate } from '../services/can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-manager',
  templateUrl: './todo-manager.component.html',
  styleUrls: ['./todo-manager.component.css']
})
export class TodoManagerComponent implements CanComponentDeactivate {
  
  title: string = '';
  description: string = '';

  todoError: boolean = false;
  newTodoAdded: boolean = false;

  constructor(private todoService: TodoService) {}

  onCreateTodoButtonClick(){
    if(this.title === '' || this.description === '')
    {
      this.todoError = true;
    }
    else
    {
      const newTodo: Todo = new Todo(1, this.title, this.description, false, new Date().toLocaleString());
      this.todoService.addTodo(newTodo);
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

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(this.title !== '' && this.description !== ''){
      if(!confirm('Are you sure that you want to leave todo creation?'))
        return false;
    }

    return true;
  }
}
