import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsMangamentComponent } from './hrms-mangament.component';

describe('HrmsMangamentComponent', () => {
  let component: HrmsMangamentComponent;
  let fixture: ComponentFixture<HrmsMangamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmsMangamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmsMangamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
