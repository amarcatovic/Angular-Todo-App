import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  viewName: string = 'todo-list';
  
  selectTodoView(viewName){
      this.viewName = viewName;
  }
}
