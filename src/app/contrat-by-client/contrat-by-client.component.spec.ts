import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratByClientComponent } from './contrat-by-client.component';

describe('ContratByClientComponent', () => {
  let component: ContratByClientComponent;
  let fixture: ComponentFixture<ContratByClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratByClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
