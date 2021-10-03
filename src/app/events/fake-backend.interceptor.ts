import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Todo } from '../models/todo.model';

if(JSON.parse((<any>localStorage.getItem('todos'))) === null){
    let todos = [
        {
          "id": 1,
          "title": "Do homework",
          "status": "todo",
          "description": "do home work"
        },
        {
          "id": 2,
          "title": "Do work",
          "status": "todo",
          "description": "do work"
        },
    ]
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
// array in local storage for registered users
let todos: any[] = JSON.parse((<any>localStorage.getItem('todos'))) ||  [];
//(localStorage.getItem('users')!==null)?JSON.parse(localStorage.getItem('users')): [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
       
        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/todos') && method === 'POST':
                    return addTodo();
                case url.endsWith('/todos') && method === 'GET':
                    return getTodos();
                case url.match(/\/todos\/\d+$/) && method === 'GET':
                    return getTodoById();
                case url.match(/\/todos\/\d+$/) && method === 'PUT':
                    return updateTodo();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions

        function addTodo() {
            const todo = JSON.parse( body)
            console.log('interceptor add ', todo);

           const id = todos.length ? Math.max(...todos.map((x: Todo) => x.id)) + 1 : 1;
            
            todos = [...todos, {
                id: id,
                title: todo.title,
                description: todo.description,
                status: todo.status
            }];
            //todos.push(JSON.parse( todo));
            console.log('interceptor new ',  todos );

            localStorage.setItem('todos', JSON.stringify(todos));

            return ok(todo);
        }
 

        function getTodos() {
            return ok(todos);
        }

        function getTodoById() {
            const todo = todos.find((x:Todo) => x.id == idFromUrl());
            return ok(todo);
        }

        function updateTodo() {
            const todo = body
            todos = todos.filter((x: { id: number; }) => x.id !== idFromUrl());
            todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(todos));
            return ok();
        }
        function deleteTodo() {
            todos = todos.filter((x: { id: number; }) => x.id !== idFromUrl());
            localStorage.setItem('todos', JSON.stringify(todos));
            return ok();
        }

        // helper functions

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorized' } });
        }

        function serverError() {
           return throwError({ status: 500, error: { message: 'An error occured' } });
        }

        function error(message: any) {
            return throwError({ error: { message } });
        }

      

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};