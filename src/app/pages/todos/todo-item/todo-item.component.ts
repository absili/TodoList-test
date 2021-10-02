import { Component, OnInit, Input } from '@angular/core';
import { Todo, TodoStatusEnum } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  readonly todoStatusEnum=TodoStatusEnum;
  
  @Input() todo:Todo|null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
