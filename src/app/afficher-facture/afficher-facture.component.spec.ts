import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherFactureComponent } from './afficher-facture.component';

describe('AfficherFactureComponent', () => {
  let component: AfficherFactureComponent;
  let fixture: ComponentFixture<AfficherFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
