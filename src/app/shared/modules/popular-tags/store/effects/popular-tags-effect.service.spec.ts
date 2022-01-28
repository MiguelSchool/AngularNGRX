import { TestBed } from '@angular/core/testing';

import { PopularTagsEffectService } from './popular-tags-effect.service';

describe('PopularTagsEffectService', () => {
  let service: PopularTagsEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularTagsEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
