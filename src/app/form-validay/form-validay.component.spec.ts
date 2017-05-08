import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidayComponent } from './form-validay.component';

describe('FormValidayComponent', () => {
  let component: FormValidayComponent;
  let fixture: ComponentFixture<FormValidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
