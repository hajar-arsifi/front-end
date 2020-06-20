import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratByMoisComponent } from './contrat-by-mois.component';

describe('ContratByMoisComponent', () => {
  let component: ContratByMoisComponent;
  let fixture: ComponentFixture<ContratByMoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratByMoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratByMoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
