import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownClientsComponent } from './dropdown-clients.component';

describe('DropdownClientsComponent', () => {
  let component: DropdownClientsComponent;
  let fixture: ComponentFixture<DropdownClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
