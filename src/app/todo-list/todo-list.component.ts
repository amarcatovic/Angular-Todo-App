import { Component, Input, OnInit } from '@angular/core';
import Todo from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

   @Input() todos: Todo[];

  ngOnInit(): void {
  }

}
