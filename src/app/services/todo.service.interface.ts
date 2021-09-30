import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

export interface ITodoService {

    // returns observable that resolves to list of todos
    getTodos(): Observable<Todo[]>;

    // returns observable that resolves to ID of new todo
    addTodo(newTodo: Todo): Observable<number>;

    // returns observable that resolves to status message
    updateTodo(todoToUpdate: Todo): Observable<string>;

    // returns observable that resolves to status message
    deleteTodo(todoId: number): Observable<string>;
}