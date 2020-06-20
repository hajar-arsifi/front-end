import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetTermineComponent } from './projet-termine.component';

describe('ProjetTermineComponent', () => {
  let component: ProjetTermineComponent;
  let fixture: ComponentFixture<ProjetTermineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetTermineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
