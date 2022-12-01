import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoActionComponent } from './todo-action.component';

describe('TodoActionComponent', () => {
  let component: TodoActionComponent;
  let fixture: ComponentFixture<TodoActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
