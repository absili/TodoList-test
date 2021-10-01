import { Injectable } from '@angular/core';
import { ITodoService } from './todo.service.interface';
import { Todo, TodoStateEnum } from '../models/todo.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoService implements ITodoService {

    public mockTodos: Todo[] = [
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

    constructor() {
    }
    
    getTodos(): Observable<Todo[]> {
        return  of(this.mockTodos);
    }
    addTodo(newTodo: Todo): Observable<number> {
        const id = this.mockTodos.length + 1;

        // add the todo to the mock list so it is returned next time we get all todos
        this.mockTodos.push({
            ...newTodo,
            id,
        });

        return of(id);
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