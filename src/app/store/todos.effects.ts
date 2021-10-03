import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType, Effect} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import {
  GetAllTodosAction,
  GetAllTodosActionError,
  GetAllTodosActionSuccess, 
   
  TodosActions,
  TodosActionsTypes,

  AddTodosAction,
  AddTodosActionSuccess,
  AddTodosActionError,
  UpdateTodosActionError,
  ViewTodosActionError,
  ViewTodosActionSuccess
} from './todos.actions';
import {catchError, map, mergeMap} from 'rxjs/operators'; 
import { TodoService } from '../services/todo.mock.service';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodosEffects {
  constructor(private todoService:TodoService, private effectActions$:Actions, private store:Store<any>) {
   
  }


  @Effect()
  getAllTodos$ = this.effectActions$.pipe(
    ofType(TodosActionsTypes.GET_ALL_TODOS),
    mergeMap(() =>
      this.todoService.getTodos().pipe(
        map(todos => {
          return new GetAllTodosActionSuccess(todos);
        }),
        catchError((err)=>of(new GetAllTodosActionError(err.message)))
      )
    )
  );

  @Effect()
  addTodos$ = this.effectActions$.pipe(
    ofType(TodosActionsTypes.ADD_TODOS),
    mergeMap((action) =>
      this.todoService.addTodo((<TodosActions>action).payload).pipe(
        map(todo  => {
          return new GetAllTodosAction({});// new AddTodosActionSuccess(todo);
        }),
        catchError((err)=>of(new AddTodosActionError(err.message)))
      )
    )
  );


  @Effect()
 updateTodos$ = this.effectActions$.pipe(
    ofType(TodosActionsTypes.UPDATE_TODOS),
    mergeMap((action) =>
      this.todoService.updateTodo((<TodosActions>action).payload).pipe(
        map(todo  => {
          return new GetAllTodosAction({});// new AddTodosActionSuccess(todo);
        }),
        catchError((err)=>of(new UpdateTodosActionError(err.message)))
      )
    )
  );


  @Effect()
  ViewTodos$ = this.effectActions$.pipe(
     ofType(TodosActionsTypes.VIEW_TODOS),
     mergeMap((action) =>
       this.todoService.getTodo((<TodosActions>action).payload).pipe(
         map(todo  => {
           return   new ViewTodosActionSuccess(todo);
         }),
         catchError((err)=>of(new ViewTodosActionError(err.message)))
       )
     )
   );
 

}
