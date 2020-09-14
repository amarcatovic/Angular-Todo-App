import { Component, Input, OnInit } from '@angular/core';
import Todo from '../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  clicked: boolean = false;

  constructor() { }

  onTodoCompleated(){
    this.clicked = !this.clicked;
    this.todo.done = !this.todo.done;
  }

  onTodoClicked(){
    this.clicked = !this.clicked;
  }

  ngOnInit(): void {
  }

}
