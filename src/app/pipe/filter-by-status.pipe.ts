import { Pipe, PipeTransform } from '@angular/core';
import { TodoStateEnum, Todo } from '../models/todo.model';

@Pipe({
  name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {

  transform(todos : any  ,  status : string): any  {
   // if (!todos) return [];
    //if (!status || status.length == 0) return todos;
  // if((todo.status === status)) return  todo; else return  null ; 
console.log(todos);
console.log(status);
if (!todos) return [];
if (!status || status.length == 0) return todos;
return todos.filter((todo: any) => todo.status.indexOf(status) !=-1);
 

  }

}
