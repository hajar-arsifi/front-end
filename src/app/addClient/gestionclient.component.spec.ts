import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionclientComponent } from './gestionclient.component';

describe('GestionclientComponent', () => {
  let component: GestionclientComponent;
  let fixture: ComponentFixture<GestionclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
