import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownEtatsComponent } from './dropdown-etats.component';

describe('DropdownEtatsComponent', () => {
  let component: DropdownEtatsComponent;
  let fixture: ComponentFixture<DropdownEtatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownEtatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownEtatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
