import { Component, OnInit } from '@angular/core';
import { Todo, TodoStateEnum } from './models/todo.model';
import { TodoService } from './services/todo.service';
import { Observable, of } from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import { AppDataState, DataStateEnum } from './state/data.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

}
