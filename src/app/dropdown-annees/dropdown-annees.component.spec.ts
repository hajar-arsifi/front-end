import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAnneesComponent } from './dropdown-annees.component';

describe('DropdownAnneesComponent', () => {
  let component: DropdownAnneesComponent;
  let fixture: ComponentFixture<DropdownAnneesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownAnneesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownAnneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
