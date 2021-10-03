import { Injectable } from '@angular/core';
import { ITodoService } from './todo.service.interface';
import { Todo, TodoStatusEnum } from '../models/todo.model';
import { Observable, of } from 'rxjs';
import { HttpService } from './http.service';

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

    constructor(private http:HttpService) {
    }
    
    getTodos():Observable<Todo[]> {
        return this.http.get("/todos");
    }
    addTodo(newTodo: Todo):  Observable<Todo> {
        return this.http.post("/todos", newTodo);
        //throw new Error("Method not implemented.");
    }
    getTodo(id:  string):  Observable<Todo> { 
        return this.http.get("/todos/"+id);
    }
    updateTodo(todoToUpdate:  Todo):  Observable<string> {
        const id = todoToUpdate.id;
        return this.http.put("/todos/"+id, todoToUpdate);
    }
    deleteTodo(todoId: number):  Observable<string> {
        throw new Error("Method not implemented.");
    }

    
    _getTodos(): Observable<Todo[]> {
        return  of(this.mockTodos);
    }
    _addTodo(newTodo: Todo): Observable<Todo> {
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
    _updateTodo(todoToUpdate: Todo): Observable<string> {
        this.mockTodos = this.mockTodos.filter((todo: Todo) => {
            todo.id !== todoToUpdate.id;
        });

        this.mockTodos.push(todoToUpdate);

        return of('Updated');
    }
    _deleteTodo(todoId: number): Observable<string> {
        this.mockTodos = this.mockTodos.filter((todo: Todo) => {
            todo.id !== todoId;
        });

        return of('Deleted');
    }
}