import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showTodosList: boolean = true;

  changeView(viewName){
    viewName === 'todo-list' ? this.showTodosList = true : this.showTodosList = false;
  }

}
