import {Todo} from '../models/todo.model';
import {TodosActions, TodosActionsTypes} from './todos.actions';
import {Action} from '@ngrx/store';

export enum TodosStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial"
}
export interface TodosState{
    todos:Todo[],
    todo?:Todo,
    errorMessage:string,
    dataState:TodosStateEnum,
}

const initState:TodosState={
  todos:[],
  errorMessage:"",
  dataState:TodosStateEnum.INITIAL
}

export function todosReducer(state=initState, action:Action) {
  switch (action.type) {
    case TodosActionsTypes.GET_ALL_TODOS:
      return {
          ...state, 
          dataState:TodosStateEnum.LOADING ,
        };
    case TodosActionsTypes.GET_ALL_TODOS_SUCCESS:
      return {
          ...state,
          todos: (<TodosActions>action).payload,
          dataState:TodosStateEnum.LOADED,
        };
    case TodosActionsTypes.GET_ALL_TODOS_ERROR:
      return {
          ...state, 
          dataState:TodosStateEnum.ERROR, 
          errorMessage:(<TodosActions>action).payload,
        };
    
     /* ADD todos*/
     case TodosActionsTypes.ADD_TODOS:
      return {
        ...state, 
        dataState:TodosStateEnum.LOADING ,
      };
    case TodosActionsTypes.ADD_TODOS_SUCCESS:
      return {
          ...state, 
          todos:[...state.todos, (<TodosActions>action).payload], 
          dataState:TodosStateEnum.LOADED,
        }
    case TodosActionsTypes.ADD_TODOS_ERROR:
      return {
          ...state, 
          dataState:TodosStateEnum.ERROR, 
          errorMessage:(<TodosActions>action).payload,
        };
   

         /* UPDATE todos*/
    case TodosActionsTypes.UPDATE_TODOS:
      return {
        ...state, 
        dataState:TodosStateEnum.LOADING ,
      };
    case TodosActionsTypes.UPDATE_TODOS_SUCCESS:
      return {
          ...state, 
          todos:[...state.todos, (<TodosActions>action).payload], 
          dataState:TodosStateEnum.LOADED,
        }
    case TodosActionsTypes.UPDATE_TODOS_ERROR:
      return {
          ...state, 
          dataState:TodosStateEnum.ERROR, 
          errorMessage:(<TodosActions>action).payload,
        };
   


           /* VIEW todos*/
    case TodosActionsTypes.VIEW_TODOS:
      return {
        ...state, 
        dataState:TodosStateEnum.LOADING ,
      };
    case TodosActionsTypes.VIEW_TODOS_SUCCESS:
      return {
          ...state, 
          todo: (<TodosActions>action).payload , 
          dataState:TodosStateEnum.LOADED,
        }
    case TodosActionsTypes.VIEW_TODOS_ERROR:
      return {
          ...state, 
          dataState:TodosStateEnum.ERROR, 
          errorMessage:(<TodosActions>action).payload,
        };
   
   
      default : 
        return  state ;
  }
}
