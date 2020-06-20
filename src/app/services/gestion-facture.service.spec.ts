import { TestBed } from '@angular/core/testing';

import { GestionFactureService } from './gestion-facture.service';

describe('GestionFactureService', () => {
  let service: GestionFactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionFactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
