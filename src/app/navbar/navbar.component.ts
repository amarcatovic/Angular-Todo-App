import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showTodosList: boolean = true;
  @Output() activeView = new EventEmitter<string>();

  changeView(viewName){
    viewName === 'todo-list' ? this.showTodosList = true : this.showTodosList = false;
    this.activeView.emit(viewName);
  }

}
