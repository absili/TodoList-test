import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoViewComponent } from './pages/todos/todo-view/todo-view.component';

const routes: Routes = [
  {
    path:"", component:TodosComponent
  },
  {
    path:"todo", component:TodosComponent
  },
  {
    path:"todo/:id", component:TodoViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
