import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ITodoService } from './todo.service.interface';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements ITodoService {

  host: string =environment.host; 

  constructor(private http:HttpService) { 
  
  }

  getTodos():Observable<Todo[]> {
    return this.http._get(this.host+"/todos");
  }
  addTodo(newTodo: Todo):  Observable<Todo> {
    return this.http._post(this.host+"/todos", newTodo);
    //throw new Error("Method not implemented.");
  }
  updateTodo(todoToUpdate:  Todo):  Observable<string> {
    throw new Error("Method not implemented.");
  }
  deleteTodo(todoId: number):  Observable<string> {
    throw new Error("Method not implemented.");
  }
}
