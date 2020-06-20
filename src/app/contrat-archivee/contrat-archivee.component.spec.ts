import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratArchiveeComponent } from './contrat-archivee.component';

describe('ContratArchiveeComponent', () => {
  let component: ContratArchiveeComponent;
  let fixture: ComponentFixture<ContratArchiveeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratArchiveeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratArchiveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
