import { TestBed } from '@angular/core/testing';

import { VoterouteService } from './voteroute.service';

describe('VoterouteService', () => {
  let service: VoterouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoterouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
