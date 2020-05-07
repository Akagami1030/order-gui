import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthCounterComponent } from './length-counter.component';

describe('LengthCounterComponent', () => {
  let component: LengthCounterComponent;
  let fixture: ComponentFixture<LengthCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LengthCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
