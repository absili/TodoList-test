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
    errorMessage:string,
    dataState:TodosStateEnum,
    type?: TodosActionsTypes
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
          type: action.type
        };
    case TodosActionsTypes.GET_ALL_TODOS_SUCCESS:
      return {
          ...state,
          todos: (<TodosActions>action).payload,
          dataState:TodosStateEnum.LOADED,
          type: action.type
        };
    case TodosActionsTypes.GET_ALL_TODOS_ERROR:
      return {
          ...state, 
          dataState:TodosStateEnum.ERROR, 
          errorMessage:(<TodosActions>action).payload,
          type: action.type
        };
    
     /* ADD todos*/
    case TodosActionsTypes.ADD_TODOS:
      return {
        ...state, 
        dataState:TodosStateEnum.LOADING ,
        type: action.type
      };
    case TodosActionsTypes.ADD_TODOS_SUCCESS:
      return {
          ...state, 
          todos:[...state.todos, (<TodosActions>action).payload], 
          dataState:TodosStateEnum.LOADED,
          type: action.type
        }
    case TodosActionsTypes.ADD_TODOS_ERROR:
      return {
          ...state, 
          dataState:TodosStateEnum.ERROR, 
          errorMessage:(<TodosActions>action).payload,
          type: action.type
        };
   
   
      default : 
        return  state ;
  }
}
