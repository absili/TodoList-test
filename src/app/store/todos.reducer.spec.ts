import { TodosActions, TodosActionsTypes, GetAllTodosAction, GetAllTodosActionSuccess, GetAllTodosActionError } from "./todos.actions";
import { TodosState, TodosStateEnum, todosReducer } from './todos.reducer';

describe('todo reducer', () => {
    it('should return isLoading/loaded/error', () => {
        const initState :TodosState={
            todos:[],
            errorMessage:"",
            dataState:TodosStateEnum.INITIAL
          }
        /**
         * test loading
         */
        const loadingTodosAction = new GetAllTodosAction([]);
        const newState1 = todosReducer(initState, loadingTodosAction);
        expect(newState1.dataState).toBe(TodosStateEnum.LOADING );
        /**
         * test loaded
         */
        const loadedTodosAction = new GetAllTodosActionSuccess([]);
        const newState2 = todosReducer(initState, loadedTodosAction);
        expect(newState2.dataState).toBe(TodosStateEnum.LOADED );

        /**
         * test error
         */
        const errorTodosAction = new GetAllTodosActionError('no data');
        const newState3 = todosReducer(initState, errorTodosAction);
        expect(newState3.dataState).toBe(TodosStateEnum.ERROR );
        expect(newState3.errorMessage).toEqual('no data');
      });
  });