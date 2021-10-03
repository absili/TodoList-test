import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { GetAllTodosAction, GetAllTodosActionSuccess, GetAllTodosActionError } from './todos.actions';


import { TodosEffects } from './todos.effects';
import { TodoService } from '../services/todo.mock.service';
import { Todo, TodoStatusEnum } from '../models/todo.model';
import { provideMockStore } from '@ngrx/store/testing';

describe('TodosEffects', () => {
  let actions: Observable<any>;

  let effects: TodosEffects;
  let todoService: jasmine.SpyObj<TodoService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosEffects,
        provideMockStore({}),
        provideMockActions(() => actions),
        {
          provide: TodoService,
          useValue: {
            getTodos: jasmine.createSpy()
          }
        }
      ]
    });

    effects = TestBed.get(TodosEffects);
    todoService = TestBed.get(TodoService);
  });

    it('should return a stream with todo list loaded action', () => {
      const todoList: Todo[] = [{ title: '', id: 1, description: '', status: TodoStatusEnum.TODO }];
      const action = new GetAllTodosAction({});
      const outcome = new GetAllTodosActionSuccess(todoList);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: todoList });
      todoService.getTodos.and.returnValue(response);

      const expected = cold('--b', { b: outcome });
      expect(effects.getAllTodos$).toBeObservable(expected);
    });


});