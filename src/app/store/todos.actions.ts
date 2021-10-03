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

    /* update new todos*/
    UPDATE_TODOS="[TODOS] update todo",
    UPDATE_TODOS_SUCCESS="[TODOS] update todo Success",
    UPDATE_TODOS_ERROR="[TODOS] update  todo Error",

    /* VIEW new todos*/
    VIEW_TODOS="[TODOS] view todo",
    VIEW_TODOS_SUCCESS="[TODOS] view todo Success",
    VIEW_TODOS_ERROR="[TODOS] view  todo Error",
  
}

export class GetAllTodosAction implements Action{
  type: TodosActionsTypes=TodosActionsTypes.GET_ALL_TODOS;
  constructor(public payload:any) {
  }
}

export class GetAllTodosActionSuccess implements Action{
  type: TodosActionsTypes=TodosActionsTypes.GET_ALL_TODOS_SUCCESS;
  constructor(public payload:any[]) {
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




/* update todo  */

export class UpdateTodosAction implements Action{
  type: TodosActionsTypes=TodosActionsTypes.UPDATE_TODOS;
  constructor(public payload:any) {
  }
}

export class UpdateTodosActionSuccess implements Action{
  type: TodosActionsTypes=TodosActionsTypes.UPDATE_TODOS_SUCCESS;
  constructor(public payload:Todo) {
   // console.log();
  }
}

export class UpdateTodosActionError implements Action{
  type: TodosActionsTypes=TodosActionsTypes.UPDATE_TODOS_ERROR;
  constructor(public payload:string) {
  }
}



/* VIEW todo  */

export class ViewTodosAction implements Action{
  type: TodosActionsTypes=TodosActionsTypes.VIEW_TODOS;
  constructor(public payload:any) {
  }
}

export class ViewTodosActionSuccess implements Action{
  type: TodosActionsTypes=TodosActionsTypes.VIEW_TODOS_SUCCESS;
  constructor(public payload:Todo) {
   // console.log();
  }
}

export class ViewTodosActionError implements Action{
  type: TodosActionsTypes=TodosActionsTypes.UPDATE_TODOS_ERROR;
  constructor(public payload:string) {
  }
}

export type TodosActions=
    GetAllTodosAction | GetAllTodosActionSuccess | GetAllTodosActionError
    | AddTodosAction | AddTodosActionSuccess | AddTodosActionError
    | UpdateTodosAction | UpdateTodosActionSuccess | UpdateTodosActionError
    | ViewTodosAction | ViewTodosActionSuccess | ViewTodosActionError
;
