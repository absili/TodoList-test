import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ViewTodosAction } from 'src/app/store/todos.actions';
import { TodosState, TodosStateEnum } from 'src/app/store/todos.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoStatusEnum } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {
  todo_id: string;
  todosState$:Observable<TodosState>|null=null;
  readonly TodosStateEnum= TodosStateEnum;
  readonly todoStatusEnum=TodoStatusEnum;

  
  constructor(private actRoute: ActivatedRoute, private store:Store<any>) {
    this.todo_id = this.actRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    this.todosState$=this.store.pipe(
      map((state)=>  state.todoStateApp)
    );

    console.log("view", this.todo_id);
    this.store.dispatch(new ViewTodosAction( this.todo_id));

  }

}
