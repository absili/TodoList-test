import { Component, OnInit } from '@angular/core';
 
import { TodoStatusEnum } from 'src/app/models/todo.model';
import { map, catchError, startWith } from 'rxjs/operators';
import { DataStateEnum } from 'src/app/state/data.state';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddTodosAction } from 'src/app/store/todos.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store:Store<any> ) { }

  ngOnInit(): void {
  }
  addTodo() {
    console.log("add tod");
    this.store.dispatch(new AddTodosAction({
      id: 4,
      title: 'new Todo US 1',
      status: TodoStatusEnum.DONE,
      description: 'desc new Todo US 1'
    }))
   /* this.todoService
    .addTodo(
      {
        id: 3,
        title: 'Todo US 1',
        status: TodoStatusEnum.TODO,
        description: 'desc Todo US 1'
      }
    )
   /* .pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith((s: any) =>console.log(s)),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    )*/;
  }


}
