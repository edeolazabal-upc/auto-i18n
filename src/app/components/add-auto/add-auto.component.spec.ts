import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutoComponent } from './add-auto.component';

describe('AddAutoComponent', () => {
  let component: AddAutoComponent;
  let fixture: ComponentFixture<AddAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAutoComponent]
    });
    fixture = TestBed.createComponent(AddAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
