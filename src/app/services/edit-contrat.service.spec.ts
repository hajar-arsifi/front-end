import { TestBed } from '@angular/core/testing';

import { EditContratService } from './edit-contrat.service';

describe('EditContratService', () => {
  let service: EditContratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditContratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
