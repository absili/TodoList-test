import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FilterByStatusPipe } from './pipe/filter-by-status.pipe';
import { TodosComponent } from './pages/todos/todos.component';
import { TestMyPipePipe } from './pipe/test-my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterByStatusPipe,
    TodosComponent,
    TestMyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
