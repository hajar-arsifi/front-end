import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureProjetComponent } from './facture-projet.component';

describe('FactureProjetComponent', () => {
  let component: FactureProjetComponent;
  let fixture: ComponentFixture<FactureProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
