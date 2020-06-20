import { TestBed } from '@angular/core/testing';

import { HideComponentService } from './hide-component.service';

describe('HideComponentService', () => {
  let service: HideComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
