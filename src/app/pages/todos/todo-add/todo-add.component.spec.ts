import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddComponent } from './todo-add.component';
import { provideMockStore } from '@ngrx/store/testing';
import { FormBuilder } from '@angular/forms';

describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      providers: [provideMockStore({}), FormBuilder],
      declarations: [ TodoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
