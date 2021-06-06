import { TestBed } from '@angular/core/testing';

import { SharingUserService } from './sharing-user.service';

describe('SharingUserService', () => {
  let service: SharingUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharingUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
