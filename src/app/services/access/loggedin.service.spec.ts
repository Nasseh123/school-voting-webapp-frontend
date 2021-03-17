import { TestBed } from '@angular/core/testing';

import { LoggedinService } from './loggedin.service';

describe('LoggedinService', () => {
  let service: LoggedinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
