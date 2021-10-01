import { FilterByStatusPipe } from './filter-by-status.pipe';
import { TodoStateEnum, Todo } from '../models/todo.model';
var todos: Todo[]  = [
  {
      id: 1,
      title: 'Do homework',
      status: TodoStateEnum.TODO,
      description: 'do home work'
  },
  {
      id: 2,
      title: 'Do  work',
      status: TodoStateEnum.TODO,
      description: 'do   work'
  },
  {
      id: 3,
      title: 'Done  work',
      status: TodoStateEnum.DONE,
      description: 'done work'
  }
];

describe('FilterByStatusPipe', () => {

  beforeEach(async () => {
   
  });
  it('create an instance', () => {
    const pipe = new FilterByStatusPipe();
     expect(pipe).toBeTruthy();
  });

  it('should display only todo', () => {
      const pipe = new FilterByStatusPipe();
      const result = pipe.transform(todos, TodoStateEnum.TODO);
      expect(result.length).toEqual(2); //true
  });
});
