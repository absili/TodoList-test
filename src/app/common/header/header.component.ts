import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoStateEnum } from 'src/app/models/todo.model';
import { map, catchError, startWith } from 'rxjs/operators';
import { DataStateEnum } from 'src/app/state/data.state';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  addTodo() {
    console.log("add tod");
    this.todoService
    .addTodo(
      {
        id: 3,
        title: 'Todo US 1',
        status: TodoStateEnum.TODO,
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
