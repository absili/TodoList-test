import { Component, OnInit, Input } from '@angular/core';
 
import { TodoStatusEnum } from 'src/app/models/todo.model';
import { Store } from '@ngrx/store';
import { AddTodosAction, TodosActionsTypes } from 'src/app/store/todos.actions';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { TodosState } from 'src/app/store/todos.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
    
  @Input() isShow:Boolean = false;
  
  todosState$:Observable<TodosState>|null=null;

  registerForm: FormGroup;
  submitted = false;
  readonly actionsTypes = TodosActionsTypes;

  constructor(private store:Store<any>, private formBuilder: FormBuilder ) {
    this.registerForm = this.formBuilder.group({
        title: ['', Validators.required],
         description: [''],
    });
  }


  ngOnInit(): void {
    this.todosState$=this.store.pipe(
      map((state)=>  state.todoStateApp)
    );
  }

  
  addTodo(title: string, description: string) {
    
    this.store.dispatch(new AddTodosAction({
      id:null,
      title: title,//'new Todo US 1',
      status: TodoStatusEnum.TODO,
      description: description
    }));
  }
   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onSubmit() {
       this.submitted = true;
       // stop here if form is invalid
       if (this.registerForm.invalid) {
           return;
       }
       this.addTodo(this.registerForm.value.title, this.registerForm.value.description);
       // display form values on success
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
   }
 
   onReset() {
       this.submitted = false; 
       this.registerForm.reset();
   }
 

}
