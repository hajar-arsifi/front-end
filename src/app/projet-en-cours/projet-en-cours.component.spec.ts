import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetEnCoursComponent } from './projet-en-cours.component';

describe('ProjetEnCoursComponent', () => {
  let component: ProjetEnCoursComponent;
  let fixture: ComponentFixture<ProjetEnCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetEnCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
