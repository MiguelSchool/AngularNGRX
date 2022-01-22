import { TestBed } from '@angular/core/testing';

import { CurrentUserEffectService } from './current-user-effect.service';

describe('CurrentUserEffectService', () => {
  let service: CurrentUserEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentUserEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
