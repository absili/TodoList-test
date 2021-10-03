import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { FilterByStatusPipe } from 'src/app/pipe/filter-by-status.pipe';
import { Store, StoreModule } from '@ngrx/store';
import { TodosState, TodosStateEnum } from 'src/app/store/todos.reducer';
import { provideMockStore } from '@ngrx/store/testing';
describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
     
       declarations: [ 
        TodosComponent ,
        FilterByStatusPipe,
      ],
      providers: [provideMockStore({})],
    })
    .compileComponents();
  });

  beforeEach(() => {
   // const store = TestBed.inject(Store);//jasmine.createSpyObj<Store<TodosStateEnum>>('store', ['select']);
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
