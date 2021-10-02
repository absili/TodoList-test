import { Component, OnInit, Input } from '@angular/core';
import { TodosState } from 'src/app/store/todos.reducer';
import { TodoStatusEnum } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  readonly todoStatusEnum=TodoStatusEnum;

  @Input() state:TodosState|null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
