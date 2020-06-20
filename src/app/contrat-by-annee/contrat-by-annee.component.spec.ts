import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratByAnneeComponent } from './contrat-by-annee.component';

describe('ContratByAnneeComponent', () => {
  let component: ContratByAnneeComponent;
  let fixture: ComponentFixture<ContratByAnneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratByAnneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratByAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
