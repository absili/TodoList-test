import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ITodoService } from './todo.service.interface';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements ITodoService {

  host: string =environment.host; 

  constructor(private http:HttpClient) { 
  
  }

  getTodos(): import("rxjs").Observable<Todo[]> {
    return this.http.get<Todo[]>(this.host+"/todos");
  }
  addTodo(newTodo: Todo):  Observable<number> {
    throw new Error("Method not implemented.");
  }
  updateTodo(todoToUpdate:  Todo):  Observable<string> {
    throw new Error("Method not implemented.");
  }
  deleteTodo(todoId: number):  Observable<string> {
    throw new Error("Method not implemented.");
  }
}
