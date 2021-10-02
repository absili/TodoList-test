import { Component, OnInit } from '@angular/core';
import { map, startWith, catchError } from 'rxjs/operators';
import { DataStateEnum, AppDataState } from 'src/app/state/data.state';
import { of, Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.mock.service';
import { TodoStatusEnum, Todo } from 'src/app/models/todo.model';
import { TodosState, TodosStateEnum } from 'src/app/store/todos.reducer';
import { Store } from '@ngrx/store';
import { GetAllTodosAction } from 'src/app/store/todos.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todosState$:Observable<TodosState>|null=null;
  readonly TodosStateEnum= TodosStateEnum;


  constructor(private store:Store<any>) { 
    this.todosState$=this.store.pipe(
      map((state)=>  state.todoStateApp)
    );
  }


  ngOnInit(){
   
    setTimeout(() => {
      this.store.dispatch(new GetAllTodosAction({}))
    }, 1000);
  }
  

}
