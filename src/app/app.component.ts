import { TodoService } from './services/todo.service';
import { Component, OnInit } from '@angular/core';
import Todo from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  
  todos: Todo[];
  viewName: string = 'todo-list';

  constructor(private todoService: TodoService) {
    this.todoService.todoScreen.subscribe((screenName: string) => {
        this.viewName = screenName;
    });
  }

  ngOnInit(){
    this.todos = this.todoService.todos;
  }
  
  selectTodoView(viewName){
      this.viewName = viewName;
  }
}
