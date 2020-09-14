import { Component } from '@angular/core';
import Todo from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  todos: Todo[] = [new Todo(1, 'Title', 'Description', false, new Date().toDateString())];
  viewName: string = 'todo-list';
  
  selectTodoView(viewName){
      this.viewName = viewName;
  }

  addTodoToList(todo){
    this.todos = [...this.todos, todo];
  }
}
