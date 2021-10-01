import { Component, OnInit } from '@angular/core';
import { map, startWith, catchError } from 'rxjs/operators';
import { DataStateEnum, AppDataState } from 'src/app/state/data.state';
import { of, Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.mock.service';
import { TodoStateEnum, Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos$:Observable<AppDataState<Todo[]>> |null=null;
  readonly DataStateEnum=DataStateEnum;
  readonly TodoStateEnum=TodoStateEnum;

  constructor(private todoService: TodoService){
  }

  ngOnInit(){
    this.todos$ = this.todoService
        .getTodos()
        .pipe(
          map(data=>{
            console.log(data);
            return ({dataState:DataStateEnum.LOADED,data:data})
          }),
          startWith({dataState:DataStateEnum.LOADING}),
          catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
        );
  }

}
