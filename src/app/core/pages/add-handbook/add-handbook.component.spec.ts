import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHandbookComponent } from './add-handbook.component';

describe('AddHandbookComponent', () => {
  let component: AddHandbookComponent;
  let fixture: ComponentFixture<AddHandbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHandbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHandbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
