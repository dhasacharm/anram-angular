import { TestBed } from '@angular/core/testing';

import { PunchingService } from './punching.service';

describe('PunchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PunchingService = TestBed.get(PunchingService);
    expect(service).toBeTruthy();
  });
});
