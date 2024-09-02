import { TestBed } from '@angular/core/testing';

import { AsgLibService } from './asg-lib.service';

describe('AsgLibService', () => {
  let service: AsgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
