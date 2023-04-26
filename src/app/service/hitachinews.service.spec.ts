import { TestBed } from '@angular/core/testing';

import { HitachinewsService } from './hitachinews.service';

describe('HitachinewsService', () => {
  let service: HitachinewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HitachinewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
