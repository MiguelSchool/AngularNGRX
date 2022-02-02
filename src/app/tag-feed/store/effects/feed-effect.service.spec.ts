import { TestBed } from '@angular/core/testing';

import { FeedEffectService } from './feed-effect.service';

describe('FeedEffectService', () => {
  let service: FeedEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
