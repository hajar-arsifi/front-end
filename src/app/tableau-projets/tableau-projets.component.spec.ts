import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauProjetsComponent } from './tableau-projets.component';

describe('TableauProjetsComponent', () => {
  let component: TableauProjetsComponent;
  let fixture: ComponentFixture<TableauProjetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauProjetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
