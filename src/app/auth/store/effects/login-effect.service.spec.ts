import { TestBed } from '@angular/core/testing';
import {LoginEffectService} from "./login-effect.service";


describe('LoginEffect#Service', () => {
  let service: LoginEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
