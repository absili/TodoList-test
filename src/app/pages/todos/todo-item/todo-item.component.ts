import { Component, OnInit, Input } from '@angular/core';
import { Todo, TodoStatusEnum } from 'src/app/models/todo.model';
import { Store } from '@ngrx/store';
import { UpdateTodosAction } from 'src/app/store/todos.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  readonly todoStatusEnum=TodoStatusEnum;
  
  @Input() todo:Todo|null=null;

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }

  updateTodo(todo: any){
    console.log("todo up", todo);
    this.store.dispatch(new UpdateTodosAction({
      id:todo.id,
      title: todo.title,//'new Todo US 1',
      status: TodoStatusEnum.DONE,
      description: todo.description
    }));
  }

}
