import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromtwoComponent } from './fromtwo.component';

describe('FromtwoComponent', () => {
  let component: FromtwoComponent;
  let fixture: ComponentFixture<FromtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
