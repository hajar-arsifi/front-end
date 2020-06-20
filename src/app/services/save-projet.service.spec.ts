import { TestBed } from '@angular/core/testing';

import { SaveProjetService } from './save-projet.service';

describe('SaveProjetService', () => {
  let service: SaveProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
