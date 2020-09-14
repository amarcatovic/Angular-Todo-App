import { Component, OnInit } from '@angular/core';
import Todo from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  todos: Todo[] = [new Todo(1, 'Title', 'Description', false, new Date().toDateString())];

  ngOnInit(): void {
  }

}
