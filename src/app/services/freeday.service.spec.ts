import { TestBed } from '@angular/core/testing';

import { FreedayService } from './freeday.service';

describe('FreedayService', () => {
  let service: FreedayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreedayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
