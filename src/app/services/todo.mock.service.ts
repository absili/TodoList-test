import { Injectable } from '@angular/core';
import { ITodoService } from './todo.service.interface';
import { Todo, TodoStatusEnum } from '../models/todo.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoService implements ITodoService {

    public mockTodos: Todo[] = [
        {
            id: 1,
            title: 'Mock - Do homework',
            status: TodoStatusEnum.TODO,
            description: 'do home work'
        },
        {
            id: 2,
            title: 'Mock - Do  work',
            status: TodoStatusEnum.TODO,
            description: 'do   work'
        },
        {
            id: 3,
            title: 'Mock - Done  work',
            status: TodoStatusEnum.DONE,
            description: 'done work'
        }
    ];

    constructor() {
    }
    
    getTodos(): Observable<Todo[]> {
        return  of(this.mockTodos);
    }
    addTodo(newTodo: Todo): Observable<Todo> {
        let dataNewTodo = new Todo (
            this.mockTodos.length+1,
             newTodo.title,
             newTodo.status,
             newTodo.description,
        );
        // add the todo to the mock list so it is returned next time we get all todos
       // this.mockTodos.push({...dataNewTodo});
    //  this.mockTodos[ this.mockTodos.length+1]= dataNewTodo;
      this.mockTodos = [...this.mockTodos, dataNewTodo];
        return  of(dataNewTodo);
    }
    updateTodo(todoToUpdate: Todo): Observable<string> {
        this.mockTodos = this.mockTodos.filter((todo: Todo) => {
            todo.id !== todoToUpdate.id;
        });

        this.mockTodos.push(todoToUpdate);

        return of('Updated');
    }
    deleteTodo(todoId: number): Observable<string> {
        this.mockTodos = this.mockTodos.filter((todo: Todo) => {
            todo.id !== todoId;
        });

        return of('Deleted');
    }
}