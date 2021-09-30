import { Component, OnInit } from '@angular/core';
import { Todo, TodoStateEnum } from './models/todo.model';
import { TodoService } from './services/todo.service';
import { Observable, of } from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import { AppDataState, DataStateEnum } from './state/data.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   
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
       // .subscribe((todos) => this.todos = todos);

      /*  this.products$= this.productsService.getAllProducts().pipe(
          map(data=>{
            console.log(data);
            return ({dataState:DataStateEnum.LOADED,data:data})
          }),
          startWith({dataState:DataStateEnum.LOADING}),
          catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
        );*/
  }
}
