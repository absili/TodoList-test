import {Action} from '@ngrx/store';
import {Todo} from '../models/todo.model';

export enum TodosActionsTypes{
  /* Get All todos*/
  GET_ALL_TODOS="[TODOS] Get All todos",
  GET_ALL_TODOS_SUCCESS="[TODOS] Get All TODOS Success",
  GET_ALL_TODOS_ERROR="[TODOS] Get All TODOS Error",

   /* Add new todos*/
   ADD_TODOS="[TODOS] add todo",
   ADD_TODOS_SUCCESS="[TODOS] add todo Success",
   ADD_TODOS_ERROR="[TODOS] add  todo Error",
  
}

export class GetAllTodosAction implements Action{
  type: TodosActionsTypes=TodosActionsTypes.GET_ALL_TODOS;
  constructor(public payload:any) {
  }
}

export class GetAllTodosActionSuccess implements Action{
  type: TodosActionsTypes=TodosActionsTypes.GET_ALL_TODOS_SUCCESS;
  constructor(public payload:Todo[]) {
  }
}

export class GetAllTodosActionError implements Action{
  type: TodosActionsTypes=TodosActionsTypes.GET_ALL_TODOS_ERROR;
  constructor(public payload:string) {
  }
}
 
/* add todo  */

export class AddTodosAction implements Action{
  type: TodosActionsTypes=TodosActionsTypes.ADD_TODOS;
  constructor(public payload:any) {
  }
}

export class AddTodosActionSuccess implements Action{
  type: TodosActionsTypes=TodosActionsTypes.ADD_TODOS_SUCCESS;
  constructor(public payload:Todo) {
   // console.log();
  }
}

export class AddTodosActionError implements Action{
  type: TodosActionsTypes=TodosActionsTypes.ADD_TODOS_ERROR;
  constructor(public payload:string) {
  }
}

export type TodosActions=
    GetAllTodosAction | GetAllTodosActionSuccess | GetAllTodosActionError
    | AddTodosAction | AddTodosActionSuccess | AddTodosActionError
;
