import { TodoService as TodoMockService } from 'src/app/services/todo.mock.service';
import { TodoService } from 'src/app/services/todo.service';

export const environment = {
  production: true,
  host: 'http://localhost:3000',
  providers : [
    {provide: TodoMockService, useClass: TodoService}
  ]
};
