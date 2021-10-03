import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
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
    
  }


  ngOnInit(){
    this.todosState$=this.store.pipe(
      map((state)=>  state.todoStateApp)
    );
    
    setTimeout(() => {
      this.store.dispatch(new GetAllTodosAction({}))
    }, 1000);
  }
  

}
