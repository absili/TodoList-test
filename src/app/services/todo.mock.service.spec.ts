import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.mock.service';
import { FilterByStatusPipe } from '../pipe/filter-by-status.pipe';
import { TodoStatusEnum } from '../models/todo.model';
import { HttpService } from './http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('TodoMockService', () => {
  let service: TodoService;
  let pipeFilter: FilterByStatusPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[HttpService]
    });
    service = TestBed.inject(TodoService);
    pipeFilter = new FilterByStatusPipe();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('get mock todo list && use filter status ', ()=>{
    let todos : any[] = [];
    service._getTodos().subscribe(data => todos = data);
    expect(todos.length).toEqual(service.mockTodos.length);
    const result = pipeFilter.transform(todos, TodoStatusEnum.TODO);
    expect(result.length).toEqual(2); //true
  });
});
