import { TestBed, async, inject } from '@angular/core/testing';

import { RegisterValidateGuard } from './register-validate.guard';

describe('RegisterValidateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterValidateGuard]
    });
  });

  it('should ...', inject([RegisterValidateGuard], (guard: RegisterValidateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
