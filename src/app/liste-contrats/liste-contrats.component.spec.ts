import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeContratsComponent } from './liste-contrats.component';

describe('ListeContratsComponent', () => {
  let component: ListeContratsComponent;
  let fixture: ComponentFixture<ListeContratsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeContratsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
