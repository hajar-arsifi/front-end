import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratCreationComponent } from './contrat-creation.component';

describe('ContratCreationComponent', () => {
  let component: ContratCreationComponent;
  let fixture: ComponentFixture<ContratCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
