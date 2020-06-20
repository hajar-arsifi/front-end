import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationDepartementalComponent } from './affectation-departemental.component';

describe('AffectationDepartementalComponent', () => {
  let component: AffectationDepartementalComponent;
  let fixture: ComponentFixture<AffectationDepartementalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectationDepartementalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationDepartementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
